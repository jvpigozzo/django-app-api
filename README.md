# README

## Setting up the development environment

Place a .env file at app containing the passowrd for the django superuser (app-api-user@django.com):

```
APP_API_USER_PASS=
```

Run the website locally:

```
docker compose up
```

Log in to the admin at localhost:8000/admin and create a token.

To shut down the environment, use the command:

```
docker compose down
```
