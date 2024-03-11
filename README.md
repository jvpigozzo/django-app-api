# README

## Setting up the development environment

Place a .env file at app containing the password for the django superuser (app-api-user@django.com):

```
APP_API_USER_PASS=
```

Run the website locally:

```
docker compose up
```

Log in to the admin at localhost:8000/admin and create a token. To shut down the environment, use the command:

```
docker compose down
```

Place a new .env file at frontend containing the token: 

```
VITE_REACT_APP_TOKEN=
```

Also place the token in .env file from app

```
APP_TOKEN=
```
