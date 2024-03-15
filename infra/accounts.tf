resource "google_service_account" "backend" {
  account_id   = "${var.project_id}-backend"
  display_name = "${var.project_id}-backend"

  depends_on = [
    module.project-services,
  ]
}
