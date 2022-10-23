## Description
build ordering application using nest js microservice in apps you will find 3 services <br>
1- authentication (auth) for protect api  <br>
2- billing service (just log every creation order) <br>
3- orders service (create order and list all orders) <br>

using rabbitmq and docker and nest js microservice <br>
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
