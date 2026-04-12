from rest_framework import generics
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models import Avg

from .models import Book, Author
from .serializers import (
    BookListSerializer,
    BookDetailSerializer,
    AuthorSerializer,
)


class BookListView(generics.ListAPIView):
    serializer_class = BookListSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]

    search_fields = ['title', 'author__first_name', 'author__last_name']

    filterset_fields = ['genre']

    ordering_fields = ['title', 'published_date', 'avg_rating']
    ordering = ['-created_at']

    def get_queryset(self):
        return Book.objects.select_related('author').annotate(
            avg_rating=Avg('reviews__rating')
        )


class BookDetailView(generics.RetrieveAPIView):
    serializer_class = BookDetailSerializer

    def get_queryset(self):
        return Book.objects.select_related('author').prefetch_related('reviews')


class AuthorListView(generics.ListAPIView):
    queryset = Author.objects.prefetch_related('books').all()
    serializer_class = AuthorSerializer
    filter_backends = [SearchFilter]
    search_fields = ['first_name', 'last_name']


class AuthorDetailView(generics.RetrieveAPIView):
    queryset = Author.objects.prefetch_related('books').all()
    serializer_class = AuthorSerializer