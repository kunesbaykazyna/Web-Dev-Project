from rest_framework import generics, permissions
from django.contrib.auth import get_user_model
from .models import Profile

from .serializer import RegisterSerializer, UserSerializer, ProfileSerializer
import google.generativeai as genai
from django.conf import settings
from rest_framework.decorators import api_view, permission_classes,authentication_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.utils.decorators import method_decorator 
from django.views.decorators.csrf import csrf_exempt

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

genai.configure(api_key=settings.GEMINI_API_KEY)
model = genai.GenerativeModel('gemini-2.5-flash')
@csrf_exempt
@api_view(['POST'])
@authentication_classes([])
@permission_classes([AllowAny])
def chat_with_gemini(request):
    user_message = request.data.get('message')
    
    # 1. Проверка ключа
    api_key = getattr(settings, 'GEMINI_API_KEY', None)
    if not api_key:
        return Response({'reply': 'Ошибка: Ключ GEMINI_API_KEY не найден в settings.py'}, status=200)

    try:
        # 2. Настройка внутри функции (для надежности)
        genai.configure(api_key=api_key)
        # Try adding version 'v1' or 'v1beta' is not needed, just change the name:
        model = genai.GenerativeModel('models/gemini-2.5-flash')

        
        # 3. Попытка запроса
        response = model.generate_content(user_message)
        
        if response and response.text:
            return Response({'reply': response.text})
        else:
            return Response({'reply': 'ИИ вернул пустой ответ'}, status=200)

    except Exception as e:
        # 4. Вывод реальной ошибки прямо в чат
        error_text = str(e)
        print(f"!!! КРИТИЧЕСКАЯ ОШИБКА: {error_text}") # Посмотри это в терминале
        return Response({'reply': f'Проблема в коде: {error_text}'}, status=200)