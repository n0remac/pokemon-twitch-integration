from django.shortcuts import render
from .forms import EncounterForm

def create_encounter(request):
    if request.method == 'POST':
        form = EncounterForm(request.POST)
        if form.is_valid():
            # Process the data in form.cleaned_data
            form.save()
            # Redirect to a new URL or indicate success
        print(form.fields['map'])
    else:
        form = EncounterForm()

    return render(request, 'encounter_creation/create_encounter.html', {'form': form})
