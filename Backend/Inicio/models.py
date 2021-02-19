from django.db import models

# Create your models here.

class Inicio(models.Model):
    Usuario = models.CharField(max_length=60)
    Pass = models.CharField(max_length=30)