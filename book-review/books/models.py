from django.db import models

class Author(models.Model):
    name = models.CharField(max_length=255)
    biography = models.TextField(blank=True, null=True)
    birth_date = models.DateField(blank=True, null=True)
    country = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name

class Book(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    cover_image = models.URLField(max_length=500, blank=True, null=True) # Суреттің сілтемесін сақтау оңайырақ
    publication_year = models.IntegerField()
    genre = models.CharField(max_length=100)
    pages = models.IntegerField()
    author = models.ForeignKey(Author, on_delete=models.CASCADE, related_name='books')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title