from django.urls import path
from .views import PublicProfileView

urlpatterns = [
    path('users/<str:username>/', PublicProfileView.as_view(), name='public-profile'),
]
