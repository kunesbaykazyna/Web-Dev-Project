from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Review, Favorite
from .serializers import ReviewSerializer, FavoriteSerializer

class ReviewListCreateView(generics.ListCreateAPIView):
    serializer_class = ReviewSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        return Review.objects.filter(book_id=self.kwargs['book_id'])

    def perform_create(self, serializer):
        serializer.save(user=self.request.user, book_id=self.kwargs['book_id'])

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