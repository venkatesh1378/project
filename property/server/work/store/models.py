
from django.db import models

class Contact(models.Model):
    name=models.CharField(max_length=300)
    number=models.CharField(max_length=10)
    email=models.EmailField()
    subject=models.TextField()
    def __str__(self):
        return self.name
