from rest_framework import generics, permissions
from django.contrib.auth import get_user_model
from .models import Profile
from .serializer import RegisterSerializer, UserSerializer, ProfileSerializer 

User = get_user_model()

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = RegisterSerializer
    
class ProfileView(generics.RetrieveUpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer 
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user.profile
