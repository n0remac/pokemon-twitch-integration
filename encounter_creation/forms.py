from django import forms
from .models import Encounter

class EncounterForm(forms.ModelForm):
    class Meta:
        model = Encounter
        fields = [
            'map', 'trainer_type', 'trainer_name', 'encounter_dialog', 
            'lose_dialog', 'pokemon1', 'pokemon2', 'pokemon3', 
            'pokemon4', 'pokemon5', 'pokemon6', 'pokemon_level'
        ]
