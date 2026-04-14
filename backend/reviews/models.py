from django.db import models
from django.contrib.auth.models import User
from books.models import Book 

class Review(models.Model):

    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='user_reviews')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    rating = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.book.title}"
    