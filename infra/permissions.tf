module "project-services" {
  source                     = "terraform-google-modules/project-factory/google//modules/project_services"
  version                    = ">= 14.5"
  project_id                 = var.project_id
  activate_apis              = var.project_service_apis
  disable_dependent_services = true
}

resource "google_project_iam_member" "backend_firestore" {
  project = var.project_id
  role    = "roles/datastore.user"
  member  = "serviceAccount:${google_service_account.backend.email}"
}

resource "google_project_iam_member" "backend_error_reporting" {
  project = var.project_id
  role    = "roles/errorreporting.writer"
  member  = "serviceAccount:${google_service_account.backend.email}"
}
