from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from .models import Review, Favorite, ReviewLike, ReviewComment
from .serializers import ReviewSerializer, FavoriteSerializer, ReviewCommentSerializer

class ReviewListCreateView(generics.ListCreateAPIView):
    serializer_class = ReviewSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        return Review.objects.filter(
            book_id=self.kwargs['book_id']
        ).prefetch_related('likes', 'comments__user').select_related('user')

    def perform_create(self, serializer):
        serializer.save(user=self.request.user, book_id=self.kwargs['book_id'])

class ReviewLikeToggleView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, review_id):
        review = get_object_or_404(Review, id=review_id)
        like, created = ReviewLike.objects.get_or_create(review=review, user=request.user)
        if not created:
            like.delete()
        return Response({
            'status': 'liked' if created else 'unliked',
            'like_count': review.likes.count(),
            'is_liked': created,
        })

class ReviewDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ReviewSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Review.objects.filter(user=self.request.user)

class ReviewCommentListCreateView(generics.ListCreateAPIView):
    serializer_class = ReviewCommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        return ReviewComment.objects.filter(
            review_id=self.kwargs['review_id']
        ).select_related('user')

    def perform_create(self, serializer):
        review = get_object_or_404(Review, id=self.kwargs['review_id'])
        serializer.save(user=self.request.user, review=review)

class ReviewCommentDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ReviewCommentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return ReviewComment.objects.filter(user=self.request.user)

class FavoriteToggleView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args, **kwargs):
        book_id = request.data.get('book_id')
        user = request.user
        favorite, created = Favorite.objects.get_or_create(user=user, book_id=book_id)
        if not created:
            favorite.delete()
            return Response({"status": "removed"}, status=status.HTTP_200_OK)
        return Response({"status": "added"}, status=status.HTTP_201_CREATED)

class UserFavoritesListView(generics.ListAPIView):
    serializer_class = FavoriteSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Favorite.objects.filter(user=self.request.user)
