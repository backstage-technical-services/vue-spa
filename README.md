# Vue SPA

[![CircleCI](https://circleci.com/gh/backstage-technical-services/vue-spa.svg?style=shield)](https://circleci.com/gh/backstage-technical-services/vue-spa)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=backstage-technical-services_vue-spa&metric=alert_status)](https://sonarcloud.io/dashboard?id=backstage-technical-services_vue-spa)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=backstage-technical-services_vue-spa&metric=coverage)](https://sonarcloud.io/dashboard?id=backstage-technical-services_vue-spa)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=backstage-technical-services_vue-spa&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=backstage-technical-services_vue-spa)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=backstage-technical-services_vue-spa&metric=sqale_index)](https://sonarcloud.io/dashboard?id=backstage-technical-services_vue-spa)
[![chat](https://img.shields.io/badge/chat-on%20slack-brightgreen)](https://bts-website.slack.com)
[![license](https://img.shields.io/badge/license-Apache%20v2-blue)](./LICENSE.txt)

## Technologies
* TypeScript 3.x
* Vue.js 2.x
* Vuex
* Vue Router
* Axios
* FontAwesome 5
* Bootstrap 4

## Pre-requisites

* [Node.js][install-nodejs] (12.16+)
* [Yarn][install-yarn]

## Installing

1. Clone the repository
   ```sh
   $ git clone git@github.com:backstage-technical-services/vue-spa.git
   ```

2. Install the dependencies
   ```sh
   $ yarn install --frozen-lockfile
   ```

## Commands
* Boot development server with hot reloading
    ```sh
    $ yarn run serve
    ```
* Lint and fix
    ```sh
    $ yarn run lint --fix
    ```
* Unit tests
    ```sh
    $ yarn run test:unit
    ```
* End-to-end tests
    ```sh
    $ yarn run test:e2e
    ```

[install-nodejs]: https://nodejs.org/en/download
[install-yarn]: https://classic.yarnpkg.com/en/docs/install
