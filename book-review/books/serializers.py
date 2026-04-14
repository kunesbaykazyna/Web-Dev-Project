from rest_framework import serializers
from .models import Author, Book

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'

class BookSerializer(serializers.ModelSerializer):
    # Автордың атын тек ID емес, толық объект ретінде алу үшін:
    author = AuthorSerializer(read_only=True)
    # Бірақ кітап қосқанда автордың ID-ын жіберу үшін:
    author_id = serializers.PrimaryKeyRelatedField(
        queryset=Author.objects.all(), source='author', write_only=True
    )

    class Meta:
        model = Book
        fields = [
            'id', 'title', 'description', 'cover_image', 
            'publication_year', 'genre', 'pages', 'author', 'author_id', 'created_at'
        ]