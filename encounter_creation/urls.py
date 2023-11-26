from .views import create_encounter
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EncounterViewSet

router = DefaultRouter()
router.register(r'encounters', EncounterViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('create-encounter/', create_encounter, name='create-encounter'),
]
