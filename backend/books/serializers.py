from rest_framework import serializers
from .models import Author, Book


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
        ]


class BookDetailSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(read_only=True)
    author_id = serializers.PrimaryKeyRelatedField(
        queryset=Author.objects.all(),
        source='author',
        write_only=True
    )
    average_rating = serializers.SerializerMethodField()

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
        ]

    def get_average_rating(self, obj):
        return obj.average_rating