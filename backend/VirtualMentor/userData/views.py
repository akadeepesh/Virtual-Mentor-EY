from rest_framework import viewsets
from .models import Students
from .serializers import StudentSerializer

class StudentViewset(viewsets.ModelViewSet):
    queryset = Students.objects.all()
    serializer_class = StudentSerializer
    
    
    def create(self, serializer):
        first_name = self.request.data.get('first_name')
        serializer.save(first_name=first_name)