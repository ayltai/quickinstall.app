resource "google_firebase_project" "this" {
  provider = google-beta
  project  = var.project_id
}
