terraform {
  required_version = ">= 1.7"

  backend "gcs" {
    bucket = "quickinstallapp-terraform-states"
  }

  required_providers {
    archive = {
      source  = "hashicorp/archive"
      version = ">= 2.4"
    }

    google = {
      source  = "hashicorp/google"
      version = ">= 5.20"
    }

    google-beta = {
      source  = "hashicorp/google-beta"
      version = ">= 5.20"
    }
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

provider "google-beta" {
  project = var.project_id
  region  = var.region
}
