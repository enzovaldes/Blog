from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import PostBlog


# Register your models here.
# Apply summernote to all TextField in model.

class PostBlogAdmin(SummernoteModelAdmin):  # instead of ModelAdmin
    exclude = ('slug',)
    list_display = ('id', 'Titulo', 'Categoria', 'FechaCreacion',)
    list_display_links = ('id', 'Titulo',)
    search_fields = ('Titulo',)
    list_per_page = 15
    summernote_fields = ('Contenido',)

admin.site.register(PostBlog, PostBlogAdmin)


