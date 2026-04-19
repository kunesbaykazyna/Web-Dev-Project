from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models import Avg
from rest_framework.permissions import AllowAny
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.contrib.auth import get_user_model

from .models import Book, Author, Favorite
from .serializers import (
    BookListSerializer,
    BookDetailSerializer,
    AuthorSerializer,
)

@method_decorator(csrf_exempt, name='dispatch')
class FavoriteToggleView(APIView):
    """
    Таңдаулыларға қосу және алып тастау логикасы.
    """
    permission_classes = [AllowAny] 

    def post(self, request):
        book_id = request.data.get('book_id')
        if not book_id:
            return Response({"error": "Book ID is required"}, status=status.HTTP_400_BAD_REQUEST)

        # Пайдаланушыны анықтау (авторизация болмаса бірінші юзерді алады)
        user = request.user if request.user.is_authenticated else get_user_model().objects.first()

        if not user:
            return Response({"error": "No user found in database"}, status=status.HTTP_404_NOT_FOUND)

        try:
            book = Book.objects.get(id=book_id)
            
            # get_or_create: бар болса алады, жоқ болса жаңасын жасайды
            favorite, created = Favorite.objects.get_or_create(user=user, book=book)
            
            if not created:
                # Егер бұрыннан бар болса - лайкты алып тастаймыз (өшіреміз)
                favorite.delete()
                return Response({"is_favorite": False, "message": "Removed from favorites"}, status=status.HTTP_200_OK)
            
            # Жаңадан қосылды
            return Response({"is_favorite": True, "message": "Added to favorites"}, status=status.HTTP_201_CREATED)
            
        except Book.DoesNotExist:
            return Response({"error": "Book not found"}, status=status.HTTP_404_NOT_FOUND)


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



class FavoriteListView(generics.ListAPIView):
    serializer_class = BookListSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        # Пайдаланушыны анықтау
        user = self.request.user if self.request.user.is_authenticated else get_user_model().objects.first()
        
        if not user:
            return Book.objects.none()

        # Моделіңде 'favorites' деп тұрғандықтан, фильтрде де солай жазамыз:
        # Фильтрде 'favorites' (көпше түрде) болуы керек, өйткені моделіңде солай
        return Book.objects.filter(favorites__user=user).annotate(
            avg_rating=Avg('reviews__rating')
        )