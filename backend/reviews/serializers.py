from rest_framework import serializers
from .models import Review, Favorite, ReviewLike, ReviewComment

class ReviewCommentSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='user.username')
    user_id = serializers.ReadOnlyField(source='user.id')
    is_owner = serializers.SerializerMethodField()

    def get_is_owner(self, obj):
        request = self.context.get('request')
        return bool(request and request.user.is_authenticated and request.user == obj.user)

    class Meta:
        model = ReviewComment
        fields = ['id', 'review', 'user_id', 'username', 'text', 'created_at', 'updated_at', 'is_owner']
        read_only_fields = ['user', 'review']

class ReviewSerializer(serializers.ModelSerializer):
    user_username = serializers.ReadOnlyField(source='user.username')
    user_id = serializers.ReadOnlyField(source='user.id')
    book_title = serializers.ReadOnlyField(source='book.title')  # ← добавили
    like_count = serializers.SerializerMethodField()
    is_liked = serializers.SerializerMethodField()
    comments = ReviewCommentSerializer(many=True, read_only=True)
    is_owner = serializers.SerializerMethodField()

    def get_like_count(self, obj):
        return obj.likes.count()

    def get_is_liked(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            return obj.likes.filter(user=request.user).exists()
        return False

    def get_is_owner(self, obj):
        request = self.context.get('request')
        return bool(request and request.user.is_authenticated and request.user == obj.user)

    class Meta:
        model = Review
        fields = [
            'id', 'book', 'user', 'user_id', 'user_username',
            'book_title',
            'text', 'rating', 'created_at',
            'like_count', 'is_liked', 'is_owner', 'comments'
        ]
        read_only_fields = ['user', 'book']

class FavoriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorite
        fields = ['id', 'user', 'book', 'created_at']
        read_only_fields = ['user']