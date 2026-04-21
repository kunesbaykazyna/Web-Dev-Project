from django.urls import path
from .views import (
    ReviewListCreateView, ReviewDetailView, FavoriteToggleView, UserFavoritesListView,
    ReviewLikeToggleView, ReviewCommentListCreateView, ReviewCommentDetailView,
    MyReviewsView
)

urlpatterns = [
    path('books/<int:book_id>/reviews/', ReviewListCreateView.as_view(), name='book-reviews'),
    path('reviews/<int:pk>/', ReviewDetailView.as_view(), name='review-detail'),
    path('reviews/<int:review_id>/like/', ReviewLikeToggleView.as_view(), name='review-like'),
    path('reviews/<int:review_id>/comments/', ReviewCommentListCreateView.as_view(), name='review-comments'),
    path('comments/<int:pk>/', ReviewCommentDetailView.as_view(), name='review-comment-detail'),
    path('favorites/toggle/', FavoriteToggleView.as_view(), name='favorite-toggle'),
    path('favorites/', UserFavoritesListView.as_view(), name='user-favorites'),
    path('my/', MyReviewsView.as_view(), name='my-reviews'),
]