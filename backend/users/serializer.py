from rest_framework import serializers
from .models import Profile
from django.contrib.auth import get_user_model

User = get_user_model()

class ProfileSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='user.username')
    email = serializers.ReadOnlyField(source='user.email')

    class Meta:
        model = Profile
        fields = ['username', 'bio', 'avatar', 'location', 'email']

class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'profile']

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8)
    password_confirm = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'password_confirm']

    def validate(self, attrs):
        if attrs['password'] != attrs['password_confirm']:
            raise serializers.ValidationError({"password": "Passwords do not match."})
        return attrs

    def create(self, validated_data):
        validated_data.pop('password_confirm')
        user = User.objects.create_user(**validated_data)
        return user


class PublicReviewSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    book_id = serializers.SerializerMethodField()
    book_title = serializers.SerializerMethodField()
    text = serializers.CharField()
    rating = serializers.IntegerField()
    created_at = serializers.DateTimeField()

    def get_book_id(self, obj):
        return obj.book_id

    def get_book_title(self, obj):
        return obj.book.title


class PublicCommentSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    review_id = serializers.SerializerMethodField()
    book_id = serializers.SerializerMethodField()
    book_title = serializers.SerializerMethodField()
    text = serializers.CharField()
    created_at = serializers.DateTimeField()

    def get_review_id(self, obj):
        return obj.review_id

    def get_book_id(self, obj):
        return obj.review.book_id

    def get_book_title(self, obj):
        return obj.review.book.title


class PublicProfileSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField()
    bio = serializers.SerializerMethodField()
    location = serializers.SerializerMethodField()
    avatar = serializers.SerializerMethodField()
    reviews = serializers.SerializerMethodField()
    comments = serializers.SerializerMethodField()

    def get_username(self, obj):
        return obj.username

    def get_bio(self, obj):
        try:
            return obj.profile.bio
        except Exception:
            return ''

    def get_location(self, obj):
        try:
            return obj.profile.location
        except Exception:
            return ''

    def get_avatar(self, obj):
        try:
            if obj.profile.avatar:
                request = self.context.get('request')
                if request:
                    return request.build_absolute_uri(obj.profile.avatar.url)
                return obj.profile.avatar.url
        except Exception:
            pass
        return None

    def get_reviews(self, obj):
        from reviews.models import Review
        reviews = Review.objects.filter(user=obj).select_related('book').order_by('-created_at')
        return PublicReviewSerializer(reviews, many=True).data

    def get_comments(self, obj):
        from reviews.models import ReviewComment
        comments = ReviewComment.objects.filter(user=obj).select_related('review__book').order_by('-created_at')
        return PublicCommentSerializer(comments, many=True).data

    class Meta:
        model = User
        fields = ['id', 'username', 'bio', 'location', 'avatar', 'reviews', 'comments']
