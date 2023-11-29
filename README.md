# pokemon-twitch-integration
A project to integrate pokemon essentials with a twitch stream. Code name PokeStream.

# Dev setup
## Requirements
1. Python3.10.6 is installed
2. Virtual env is installed and activated

## Setup
Install dependencies:
```bash
pip install -r requirements.txt
```
Create Django migrations and apply them:
```bash
python manage.py makemigrations
python manage.py migrate
```
Run the Django web app:
```bash
python manage.py runserver
```
Access website at http://127.0.0.1:8000/  

Currently, nothing is on the main page, the main part of the app can be found at http://127.0.0.1:8000/encounter/create-encounter/  

The API can be viewed at http://127.0.0.1:8000/encounter/encounters/  

To make an admin account run:  
```bash
python manage.py createsuperuser
```
Log into admin page at http://127.0.0.1:8000/admin/  

# Resources
If you are new to Django this is a great tutorial:  
https://tutorial.djangogirls.org/en/

# Pokemon Essentials as a subtree module
This projected uses the [Maruno17 pokemon essentials](https://github.com/Maruno17/pokemon-essentials) project as a subtree module. I have forked Maruno17's repository then added it as a subtree module to this repository. See [these docs](https://www.atlassian.com/git/tutorials/git-subtree) for more information on the git subtree command.

To update from the main fork changes must first be pulled into this [this fork](https://github.com/n0remac/pokemon-essentials). Then these commands can be run from this repository:
```bash
git fetch git@github.com:n0remac/pokemon-essentials.git master
git subtree pull --prefix pokemon-essentials git@github.com:n0remac/pokemon-essentials.git master --squash
```