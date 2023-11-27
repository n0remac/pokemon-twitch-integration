from django.db import models

class Encounter(models.Model):
    coordinates = models.CharField(max_length=100, blank=True, null=True)  # Storing as a string "x,y"z

    MAP_CHOICES = [
        ('map1', 'Map 1'),
        ('map2', 'Map 2'),
        # ...
    ]
    TRAINER_TYPE_CHOICES = [
        ('type1', 'Type 1'),
        ('type2', 'Type 2'),
        # ...
    ]
    POKEMON_CHOICES = [
        ('pokemon1', 'Pokemon 1'),
        ('pokemon2', 'Pokemon 2'),
        # ...
    ]

    map = models.CharField(max_length=100, choices=MAP_CHOICES)
    trainer_type = models.CharField(max_length=100, choices=TRAINER_TYPE_CHOICES)
    trainer_name = models.CharField(max_length=100)
    encounter_dialog = models.TextField()
    lose_dialog = models.TextField()
    pokemon1 = models.CharField(max_length=100, choices=POKEMON_CHOICES)
    pokemon2 = models.CharField(max_length=100, choices=POKEMON_CHOICES)
    pokemon3 = models.CharField(max_length=100, choices=POKEMON_CHOICES)
    pokemon4 = models.CharField(max_length=100, choices=POKEMON_CHOICES)
    pokemon5 = models.CharField(max_length=100, choices=POKEMON_CHOICES)
    pokemon6 = models.CharField(max_length=100, choices=POKEMON_CHOICES)
    pokemon_level = models.IntegerField()