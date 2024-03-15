# QuickInstall.app - Backend

[![Swagger Validator](https://img.shields.io/swagger/valid/3.0?specUrl=https%3A%2F%2Fraw.githubusercontent.com%2Fayltai%2Fquickinstall.app%2Fmaster%2Fbackend%2Fdocs%2Fopenapi.yaml)](https://europe-west2-quickinstallapp.cloudfunctions.net/api/docs/)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=quickinstall.app-backend&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=quickinstall.app-backend)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=quickinstall.app-backend&metric=coverage)](https://sonarcloud.io/summary/new_code?id=quickinstall.app-backend)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=quickinstall.app-backend&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=quickinstall.app-backend)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=quickinstall.app-backend&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=quickinstall.app-backend)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=quickinstall.app-backend&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=quickinstall.app-backend)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=quickinstall.app-backend&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=quickinstall.app-backend)

## API documentation

[OpenAPI](https://europe-west2-quickinstallapp.cloudfunctions.net/api/docs/)

## Prerequisites

This project includes a [Dev Container](https://containers.dev/) that is pre-configured with all the necessary tools installed and an environment properly set up.

There are several ways to start using dev containers:
* Launch the dev container directly from the GitHub repository using [Codespaces](https://github.com/features/codespaces)
* Launch the dev container from Visual Studio Code or Visual Studio using the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
* Launch the dev container from an IntelliJ IDE (with early support only - not recommended)
* Launch the dev container using [Dev Container CLI](https://github.com/devcontainers/cli) and [Docker](https://www.docker.com):
  ```bash
  devcontainer up --workspace-folder .
  ```

Without using the include dev container, please make sure the following requirements are met:

* Installed [Node.js](https://nodejs.org) v20 or above
* Installed [pnpm](https://pnpm.io) v8 or above
* Installed [gcloud CLI](https://cloud.google.com/sdk/gcloud)
* Installed [Firestore emulator](https://cloud.google.com/firestore/docs/emulator)

## Running locally

1. Install dependencies
   ```sh
   pnpm i
   ```
2. Start the backend servers
   ```sh
   pnpm run dev
   ```
3. The backend APIs can be accessed at [http://localhost:8080/](http://localhost:8080/)
4. The OpenAPI specification can be accessed at [http://localhost:8080/docs](http://localhost:8080/docs)

## Building from source

1. Install dependencies
   ```sh
   pnpm i
   ```
2. Build the backend
   ```sh
   pnpm run build
   ```
