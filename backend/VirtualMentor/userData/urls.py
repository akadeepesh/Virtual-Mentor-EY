from django.urls import path
from . import views

urlpatterns = [
    path("", views.getStudent),
    path("add/", views.addStudent),
]
