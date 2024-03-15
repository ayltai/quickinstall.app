resource "google_firebase_web_app" "this" {
  provider     = google-beta
  project      = var.project_id
  display_name = "QuickInstall.app"
}
