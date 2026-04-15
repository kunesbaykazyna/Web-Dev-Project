from rest_framework import serializers
from .models import Review, Favorite

class ReviewSerializer(serializers.ModelSerializer):
    user_username = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Review
        fields = ['id', 'book', 'user', 'user_username', 'text', 'rating', 'created_at']
        read_only_fields = ['user']

class FavoriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorite
        fields = ['id', 'user', 'book', 'created_at']
        read_only_fields = ['user']