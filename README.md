# Property manager

Application that can create/view/edit property.

## Setup

To run this software locally, you need Docker.
You can start this [docker-compose configuration](./docker-compose.yml),
However it is recommended to use make commands to start the development environment.
 
If you want to start all the services it for the first time,
simply run:

    make up install up logs

Later is enough to run:

    make up logs

This will start development version of the web application on
[localhost:8080](http://localhost:8080).
The backend will be running on [localhost:9090](http://localhost:9090).

These local URLs are configurable through environment variables,
For example [this configuration](./env.penguin.linux.test), 
will make it possible to run this application on a Chromebook,
where "localhost" is not really pointing to the Docker host.
To enable this configuration simply run this command before the `make up`:

    export $(cat .env.penguin.linux.test | xargs)

the same way environment variables could be used to deploy this software
on production hosts. For example this software has been deployed on:
[prop-front.herokuapp.com](https://prop-front.herokuapp.com).

## Backend

Is Apollo GraphQL server running on [localhost:9090](http://localhost:9090)

In the playground try this:

    mutation ($input: PropertyInput!) {
        createProperty(input: $input) {
            id
        }
    }

with variables:

    {
        "input": { 
                "address": "Singerstr. 33, Berlin",
            "bedrooms": 2,
            "type": "APARTMENT"
        }
    }

### Test with Jest

To run tests on ~~frontend and~~ backend use this command:

    make test

### Shell into containers

To perform development tasks inside containers,
there are shorthand commands to run bash feom within running containers:

    make into-frontend

    make into-backend

    make into-mongo

    make into-mongo-db
    
    # The last command will log you into mongo client,
    # so you can run mongo commands over there like this:
    > db.getCollection('properties').remove({})

### TODO

- Enable CORS check;
- Disable Playground in production;
- Test failure scenarios;
- Error handling;
- Test DB;
