## Description
build ordering application using nest js microservice in apps you will find 3 services 
1- authentication (auth) for protect api  
2- billing service (just log every creation order)
3- orders service (create order and list all orders)

using rabbitmq and docker and nest js microservice 
## Installation

```bash
$ npm install
```

## Running the app

this app can run with docker just run 
```bash
#development
$ docker-compose up --build -V
```
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
