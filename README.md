# ParkManager
🚘 Lightweight and powerful parking API built on top of Node.JS and AdonisJS framework to manage location, availability and more !

---

## Setup

In this part, run all the commands in root folder of project.

### Install dependencies

```
yarn
```

### Database configuration & seed

Next, you need some dummy data to test API. Ensure you have a postgree database started before.
The Postgree configuration can be set in .env file, you will see these variables :

```javascript
PG_HOST=localhost
PG_PORT=5432
PG_USER=parkuser
PG_PASSWORD=password
PG_DB_NAME=parkmanager
```

Once it's done, you need to construct the database 

```
node ace migration:run
```

If anything goes wrong during this step, type 
```node ace migration:rollback``` to clean the database and retry

Finally, fill it with some dummy data

```
node ace db:seed
```

And it's done ! 🎉
<br><br>
Testing accounts :

| email        | password           | role  |
| ------------- |:-------------| :-----|
| test.park@gmail.com      | password | USER |
| test.park.admin@gmail.com      | passwod      |  ADMIN |

<br>

### Run project

```
yarn start
```

The API runs on 3333 port by default, you can change it in .env file
<br>
<br>

### Documentation
---
#### Users routes : 

| Type        | URL           | Body  | Response |
| ------------- |:-------------| :-----| :-----|
| POST | /users/register | {email: string, password: string, password_confirmation: string, firstname: string, lastname: string, role?: string} | Bearer Token
| POST | /users/login | {email: string, password: string} | Bearer Token

Obviously, you need to be already logged with admin role to create another one 😎 


#### Places routes :

| Type        | URL           | Body / Params | Response | Role
| ------------- |:-------------| :-----| :-----| :-----|
| GET | /places/show | Params authorized : floor, userId, id (place) | List of places | *
| GET | /places/statistics | / | Show parking statistics | ADMIN
| POST | /places/register | {placeCode: string, floor: number} | Place object | ADMIN
| POST | /places/:placeId | {userAssigned: string} | Updated place object | ADMIN
| POST | /places/:placeId/release | / | Place object released | ADMIN

To perform requests with the desired role, you need to add Authorization header as Bearer Token, and set the token you got when you logged.









