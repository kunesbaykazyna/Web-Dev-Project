from django.urls import path
from .views import BookListAPIView, BookDetailAPIView, AuthorListAPIView

urlpatterns = [
    path('books/', BookListAPIView.as_view(), name='book-list'),
    path('books/<int:pk>/', BookDetailAPIView.as_view(), name='book-detail'),
    path('authors/', AuthorListAPIView.as_view(), name='author-list'),
]