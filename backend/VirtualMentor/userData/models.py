from django.db import models

class Students(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField()
    languages = models.TextField()
    skills = models.TextField()
    state = models.CharField(max_length=100)
    interests = models.TextField()
    gender = models.CharField(max_length=100, null=True)
    level = models.IntegerField(default=0)
    level_score = models.FloatField(default=0.0)
    quiz_number = models.IntegerField(default=0)