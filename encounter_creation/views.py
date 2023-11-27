from django.shortcuts import render
from .forms import EncounterForm
from .serializers import EncounterSerializer
from rest_framework import viewsets
from .models import Encounter

class EncounterViewSet(viewsets.ModelViewSet):
    queryset = Encounter.objects.all()
    serializer_class = EncounterSerializer

def create_encounter(request):
    if request.method == 'POST':
        form = EncounterForm(request.POST)
        if form.is_valid():
            # Process the data in form.cleaned_data
            print("Coordinates received:", form.cleaned_data['coordinates'])
            
            form.save()
            # Redirect to a new URL or indicate success
        print(form.fields['map'])
    else:
        form = EncounterForm()

    return render(request, 'encounter_creation/create_encounter.html', {'form': form})
