# Front Patient

This application was developed using [AngularJS](https://angularjs.org) with [Material Components](https://material.angularjs.org).

## Prerequisites

Some resources are required to start the application

[NodeJS](https://nodejs.org/en)

[YARN](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) or [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)


## Install dependencies

run the following command:

```sh
npm install
```

To only install resolved dependencies in `package-lock.json`:

```sh
npm ci
```

## Run the application

Before running the application, install the http-server library by running the command:

```sh
npm install http-server --global
```
After installing the library, run the command

```sh
npm start
```


Open http://127.0.0.1:8500 in your browser.

## API configuration

Insert the API URL in `app/config/api.config.js`