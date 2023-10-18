from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Students
from .serializers import StudentSerializer

@api_view(['GET'])
def getStudent():
    queryset = Students.objects.all()
    serializer = StudentSerializer(queryset, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addStudent(request):
    serializer = StudentSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)