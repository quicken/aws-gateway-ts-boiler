# Typescript Lambda Project

A boilerplate project for quickly bootstrapping a mono repo for managing AWS API Gateway Microservices built using typescript.

### Features

- Write code in TypeScript
- Debugger Support
- Unit Testing, Mock the AWS SDK
- Run locally
- Deploy with Serverless Framework
- Documentation generated from JSDoc comments
- Share code using Yarn Workspaces

### Project Anatomy

#### \_\_tests\_\_

This folder contains all unit tests.

#### \_dev

A place for storing files that support development. For example docker compose files, bash scripts that flush caches, database schema definitions, ERD diagrams and so on.

#### coverage

Unit test coverage reports generated by Jest are written to this location.

#### dist

JavaScript code compiled by TypeScript as a part of the build process is written to this folder. The contents of this folder are packaged and deployed to AWS Lambda. During local development, the contents of this folder are mapped to the serverless offline tool.

#### src

The TypeScript source that is deployed to AWS Lambda is contained in this folder.

#### src/index.tsx

This optional file is a placeholder that assists TypeDoc with locating exported classes and methods when generating documentation.

In a typical node or react application there is a single entry point into the application. However, in the case of a lambda project, there is no single entry point as each lambda
will have its own entry point. To work around the requirement to define an entry point for TypeDoc it is possible to use this index.tsx file to specify the exports that TypeDoc should use as a starting point for inspecting the code.

Alternatively, this file can be left empty. In this case entry points for TypeDocs can be defined as an array of strings inside of the TypeDocs config file "typedoc.json".

#### src/lambda

The entry points for lambda functions are contained inside of this folder. Each workspace represents a collection of one or more lambda functions.

To mitigate against breaking changes from Amazon the lambda entry point scripts should NOT contain the business logic serviced by the lambda. Instead, the entry point scripts should limit
functionality to what is required to sanitise and transform event data for usage by the business logic.

#### src/lib

The entry points for lambda functions are contained inside of this folder. Each workspace represents a collection of one or more lambda functions.

To mitigate against breaking changes from Amazon the lambda entry point scripts should NOT contain the business logic serviced by the lambda. Instead, the entry point scripts should limit
functionality to what is required to sanitise and transform event data for usage by the business logic.

#### tsconfig.json

The typescript configuration file is symlinked by the project
