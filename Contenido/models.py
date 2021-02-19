from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify #slug es para personalizar las URL

# Create your models here.
class Categorias(models.TextChoices):
    CiberSeguridad = 'CiberSeguridad'
    SegInteligencia = 'Inteligencia de Seguridad'
    Siem ='SIEM' #SIEM es gestion de eventos e inteligencia de seguridad
    Cloud= 'Cloud'
    Iot = 'IOT'
    GesVulnerabilidad = 'Gestión de Vulnerabilidades'

class PostBlog(models.Model):
    Titulo = models.CharField(max_length= 60)
    Categoria = models.CharField(max_length= 40, choices=Categorias.choices) #se puede incluir un default
    MiniDes = mdoels.CharField(max_length= 140) #igual que Twitter
    Miniatura = models.ImageField(upload_to='imagenes/%A/%m/%d/') #se organizan por año y mes
    Fecha = models.CharField(max_length= 8)
    Slug = models.SlugField() 
    Contenido = models.TextField()




