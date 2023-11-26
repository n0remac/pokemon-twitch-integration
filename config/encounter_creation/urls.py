from django.urls import path
from .views import create_encounter

urlpatterns = [
    # Other paths...
    path('create-encounter/', create_encounter, name='create-encounter'),
]
