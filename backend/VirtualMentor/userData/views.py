from rest_framework import viewsets
from .models import Students
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = Students.objects.all()
    serializer_class = UserSerializer
