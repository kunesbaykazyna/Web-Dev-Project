from django.urls import path
from .views import ReviewListCreateView, FavoriteToggleView, UserFavoritesListView

urlpatterns = [
    path('books/<int:book_id>/reviews/', ReviewListCreateView.as_view(), name='book-reviews'),
    path('favorites/toggle/', FavoriteToggleView.as_view(), name='favorite-toggle'),
    path('favorites/', UserFavoritesListView.as_view(), name='user-favorites'),
]