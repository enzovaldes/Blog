from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import SomeModel

# Register your models here.
# Apply summernote to all TextField in model.
class PostBlogAdmin(SummernoteModelAdmin):  # instead of ModelAdmin
    summernote_fields = ('Contenido',)

admin.site.register(PostBlog, PostBlogAdmin)


