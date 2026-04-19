from rest_framework import serializers
from .models import Author, Book, Favorite
from django.contrib.auth import get_user_model

class AuthorSerializer(serializers.ModelSerializer):
    full_name = serializers.CharField(read_only=True)
    book_count = serializers.SerializerMethodField()

    class Meta:
        model = Author
        fields = [
            'id',
            'first_name',
            'last_name',
            'full_name',
            'bio',
            'birth_date',
            'book_count',
        ]

    def get_book_count(self, obj):
        return obj.books.count()


class BookListSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(source='author.full_name', read_only=True)
    average_rating = serializers.FloatField(read_only=True)
    is_favorite = serializers.SerializerMethodField()

    class Meta:
        model = Book
        fields = [
            'id',
            'title',
            'author_name',
            'genre',
            'cover_image',
            'published_date',
            'average_rating',
            'is_favorite', 
        ]

    # МЫНА ЖЕРДЕГІ ШЕГІНІС ТҮЗЕТІЛДІ (КЛАСТЫҢ ІШІНДЕ):
    def get_is_favorite(self, obj):
        request = self.context.get('request')
        user = None
        
        if request and hasattr(request, 'user') and request.user.is_authenticated:
            user = request.user
        else:
            user = get_user_model().objects.first()

        if user:
            # Тікелей модель арқылы тексеру
            return Favorite.objects.filter(user=user, book=obj).exists()
        return False


class BookDetailSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(read_only=True)
    author_id = serializers.PrimaryKeyRelatedField(
        queryset=Author.objects.all(),
        source='author',
        write_only=True
    )
    average_rating = serializers.SerializerMethodField()
    is_favorite = serializers.SerializerMethodField()

    class Meta:
        model = Book
        fields = [
            'id',
            'title',
            'author',
            'author_id',
            'description',
            'published_date',
            'isbn',
            'genre',
            'cover_image',
            'created_at',
            'average_rating',
            'is_favorite',
        ]

    def get_average_rating(self, obj):
        return getattr(obj, 'average_rating', 0)

    def get_is_favorite(self, obj):
        request = self.context.get('request')
        user = None
        if request and hasattr(request, 'user') and request.user.is_authenticated:
            user = request.user
        else:
            user = get_user_model().objects.first()
            
        if user:
            return Favorite.objects.filter(user=user, book=obj).exists()
        return False