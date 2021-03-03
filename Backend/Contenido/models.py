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
    MiniDes = models.CharField(max_length= 140) #igual que Twitter
    Miniatura = models.ImageField(upload_to='imagenes/%A/%m/%d/') #se organizan por año y mes
    Fecha = models.CharField(max_length= 8)
    Destacados = models.BooleanField(default=False)
    Contenido = models.TextField()
    FechaCreacion = models.DateTimeField(default=datetime.now, blank=True)
    Slug = models.SlugField() 

    #Esta funcion hace que se puedan tener varios titulos iguales y que los slug no coincidan.
    def Save(self, *args, **kwargs):
        SlugOriginal= slugify(self.Titulo)
        queryset = PostBlog.objects.all().filter(slug__iexact=SlugOriginal).count()

        count = 1
        Slug = SlugOriginal
        while(queryset):
            Slug = SlugOriginal +'-'+ str(count)
            count +=1
            queryset = PostBlog.objects.all().filter(slug__iexact=Slug).count()
        self.Slug = Slug

        if self.Destacados:
            try:
                temp = PostBlog.objects.get(Destacados=True)
                if self != temp:
                    temp.Destacados = False
                    temp.save()
            except PostBlog.DoesNotExist:
                    pass
            
        super(PostBlog, self).save(*args, **kwargs)

    def __str__(self):
        return self.Titulo



