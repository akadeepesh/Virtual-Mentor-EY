from django.db import models

class User(models.Model):
    full_name = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    email = models.EmailField()
    languages = models.TextField()
    skills = models.TextField()
    state = models.CharField(max_length=100)
    interests = models.TextField()
