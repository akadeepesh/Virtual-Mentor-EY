from django.db import models


class Students(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField()
    languages = models.TextField(blank=True, null=True)
    skills = models.TextField(blank=True, null=True)
    interests = models.TextField(blank=True, null=True)
    gender = models.CharField(max_length=100, blank=True, null=True)
    level = models.IntegerField(default=0, blank=True, null=True)
    level_score = models.FloatField(default=0.0, blank=True, null=True)
    quiz_number = models.IntegerField(default=0, blank=True, null=True)
