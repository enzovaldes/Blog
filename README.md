# Blog-Informatico
Proyecto desarrollado con Django y React el cual consta de un blog informático simple.
### Pasos a seguir
Luego de clonar el repositorio se debe crear un Virtual Environment con el siguiente comando:

***IMPORTANTE: debes tener instalado Python y pip en tu dispositivo***

```
python -m venv nombre-del-venv
```

Para activar venv se ejecuta:
```
source nombre-del-venv/bin/activate
```

Una vez que se activa el Venv se ingresa a la carpeta del repositorio clonado, luego, entrar a carpeta Backend.

Antes de correr el servidor, se deben instalar algunas librerias, además de Django:
```
python -m pip install Django
```
Luego, CORS:
```
pip install django-cors-headers
```
Django REST Framework: 'https://www.django-rest-framework.org/'
```
pip install djangorestframework 
```
Django Summernote: 'https://github.com/summernote/django-summernote'
```
pip install django-summernote 
```
Por último, Pillow:
```
python -m pip install pillow 
```
Después de instalar todas las librerías, ejecuta `python manage.py migrate` y por último `python manage.py runserver`.

En el localhost tendrás acceso a la API.

***Estos comandos son solo para ejecutar la API, pronto estará disponible el Frontend!!***
