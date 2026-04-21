from django.urls import path
from .views import (
    BookListView,
    BookDetailView,
    AuthorListView,
    AuthorDetailView,
    FavoriteToggleView,
    FavoriteListView,
    book_stats_view,
    author_books_view
)

urlpatterns = [
    path('books/', BookListView.as_view(), name='book-list'),
    path('books/<int:pk>/', BookDetailView.as_view(), name='book-detail'),
    path('books/stats/', book_stats_view, name='book-stats'),
    path('authors/', AuthorListView.as_view(), name='author-list'),
    path('authors/<int:pk>/', AuthorDetailView.as_view(), name='author-detail'),
    path('authors/<int:author_id>/books/', author_books_view, name='author-books'),
    path('favorites/toggle/', FavoriteToggleView.as_view(), name='favorite-toggle'),
    path('favorites/', FavoriteListView.as_view(), name='favorite-list'),
]