# QuickInstall.App - Frontend

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=quickinstall.app-frontend&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=quickinstall.app-frontend)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=quickinstall.app-frontend&metric=coverage)](https://sonarcloud.io/summary/new_code?id=quickinstall.app-frontend)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=quickinstall.app-frontend&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=quickinstall.app-frontend)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=quickinstall.app-frontend&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=quickinstall.app-frontend)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=quickinstall.app-frontend&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=quickinstall.app-frontend)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=quickinstall.app-frontend&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=quickinstall.app-frontend)
[![Storybook Docs](https://img.shields.io/badge/storybook-docs-FF4785?label=storybook)](https://quickinstall.app/design)

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

## Running locally

1. Start the backend servers by following the instructions [here](../backend/README.md)
2. Install dependencies
   ```sh
   pnpm i
   ```
3. Start the backend servers
   ```sh
   pnpm start
   ```
4. The frontend can be accessed at [http://localhost:5173/](http://localhost:5173/)

## Building from source

1. Install dependencies
   ```sh
   pnpm i
   ```
2. Build the backend
   ```sh
   pnpm run build
   ```
3. The artifacts can be found in the `dist` folder

## Components library

[Storybook Components Library](https://quickinstall.app/design)
