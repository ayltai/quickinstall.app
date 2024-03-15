# QuickInstall.app - DevOps

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=quickinstall.app-infra&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=quickinstall.app-infra)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=quickinstall.app-infra&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=quickinstall.app-infra)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=quickinstall.app-infra&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=quickinstall.app-infra)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=quickinstall.app-infra&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=quickinstall.app-infra)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=quickinstall.app-infra&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=quickinstall.app-infra)

## Prerequisites

* Provisioned a Service Account with the following roles:
    - Cloud Datastore Owner
    - Cloud Functions Admin
    - Cloud Storage for Firebase Admin
    - Firebase Rules Admin
    - Project IAM Admin
    - Service Account Admin
    - Service Account User
    - Service Usage Admin
    - Storage Admin
* Create a private key for the Service Account and download it as a file by following this [instructions](https://cloud.google.com/iam/docs/keys-create-delete)

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

* Installed [Terraform](https://www.terraform.io/) v1.7 or above

## Deploying the backend servers

1. Modify the [`variables.tf`](infra/variables.tf) file to match your environment
1. Initialise Terraform modules
   ```sh
   terraform init
   ```
2. Apply the infrastructure
   ```sh
   terraform apply
   ```
