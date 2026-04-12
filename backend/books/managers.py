from django.db import models


class BookQuerySet(models.QuerySet):
    def with_average_rating(self):
        from django.db.models import Avg
        return self.annotate(avg_rating=Avg('reviews__rating'))

    def by_genre(self, genre):
        return self.filter(genre__iexact=genre)

    def search(self, query):
        from django.db.models import Q
        return self.filter(
            Q(title__icontains=query) |
            Q(author__first_name__icontains=query) |
            Q(author__last_name__icontains=query)
        )


class BookManager(models.Manager):
    def get_queryset(self):
        return BookQuerySet(self.model, using=self._db)

    def with_average_rating(self):
        return self.get_queryset().with_average_rating()

    def search(self, query):
        return self.get_queryset().search(query)