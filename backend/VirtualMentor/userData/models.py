from django.db import models
from django.utils.text import slugify

class User(models.Model):
    full_name = models.CharField(max_length=100)
    username = models.CharField(max_length=100, unique=True, blank=True)
    email = models.EmailField()
    languages = models.TextField()
    skills = models.TextField()
    state = models.CharField(max_length=100)
    interests = models.TextField()
    def save(self, *args, **kwargs):
        if not self.username:
            self.username = slugify(self.full_name)
            if User.objects.filter(username=self.username).exists():
                i = 1
                while User.objects.filter(username=f"{self.username}{i}").exists():
                    i += 1
                self.username = f"{self.username}{i}"
        super().save(*args, **kwargs)
