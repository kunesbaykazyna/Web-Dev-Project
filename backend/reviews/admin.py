from django.contrib import admin
from .models import Review
from books.models import Author, Book 

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('id', 'book', 'user', 'rating', 'created_at')