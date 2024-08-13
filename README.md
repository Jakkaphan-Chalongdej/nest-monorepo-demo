## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ npm run start app1 # or app2

# watch mode
$ npm run start:dev app1 # or app2
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e
```


## Structure

```bash
apps
   |-- app1
   |   |-- src
   |   |   |-- api
   |   |   |   |-- api.module.ts
   |   |   |-- app1.module.ts
   |   |   |-- config
   |   |   |   |-- app.config.ts
   |   |   |   |-- config.module.ts
   |   |   |   |-- database.config.ts
   |   |   |-- database
   |   |   |   |-- data-source.ts
   |   |   |   |-- database.module.ts
   |   |   |-- main.ts
   |   |-- test
   |   |   |-- app.e2e-spec.ts
   |   |   |-- jest-e2e.json
   |   |-- tsconfig.app.json
   |-- app2
   |   |-- src
   |   |   |-- api
   |   |   |   |-- api.module.ts
   |   |   |-- app2.module.ts
   |   |   |-- config
   |   |   |   |-- app.config.ts
   |   |   |   |-- config.module.ts
   |   |   |   |-- database.config.ts
   |   |   |-- database
   |   |   |   |-- data-source.ts
   |   |   |   |-- database.module.ts
   |   |   |-- main.ts
   |   |-- test
   |   |   |-- app.e2e-spec.ts
   |   |   |-- jest-e2e.json
   |   |-- tsconfig.app.json
libs
   |-- core
   |   |-- src
   |   |   |-- database
   |   |   |   |-- base
   |   |   |   |   |-- crud.service.ts
   |   |   |   |   |-- index.ts
   |   |   |   |-- common
   |   |   |   |   |-- enum
   |   |   |   |   |   |-- database.enum.ts
   |   |   |   |   |   |-- index.ts
   |   |   |   |   |   |-- serialization-group.enum.ts
   |   |   |   |   |-- extended-entity-migration.ts
   |   |   |   |   |-- extended-entity.ts
   |   |   |   |   |-- index.ts
   |   |-- tsconfig.lib.json
   |-- utils
   |   |-- src
   |   |   |-- dto
   |   |   |   |-- paginationQueryString.dto.ts
   |   |   |-- exceptions
   |   |   |   |-- http-exception.ts
   |   |   |-- interceptors
   |   |   |   |-- http-interception.ts
   |   |   |-- response
   |   |   |   |-- response.ts
   |   |-- tsconfig.lib.json
.env.example
.eslintrc.js
.gitignore
.prettierrc
README.md
nest-cli.json
package.json
tsconfig.build.json
tsconfig.json
yarn.lock
```
