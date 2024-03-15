resource "google_storage_bucket" "state" {
  name                        = "${var.project_id}-terraform-states"
  location                    = "EU"
  uniform_bucket_level_access = true

  versioning {
    enabled = true
  }
}

resource "google_firebase_storage_bucket" "state" {
  provider  = google-beta
  bucket_id = google_storage_bucket.state.id

  depends_on = [
    module.project-services,
  ]
}

resource "google_storage_bucket" "backend" {
  name                        = "${var.project_id}-backend"
  location                    = "EU"
  uniform_bucket_level_access = true
}

resource "google_firebase_storage_bucket" "backend" {
  provider  = google-beta
  bucket_id = google_storage_bucket.backend.id

  depends_on = [
    module.project-services,
  ]
}

resource "google_storage_bucket_object" "backend" {
  bucket = google_storage_bucket.backend.name
  name   = "backend-${data.archive_file.backend.output_md5}.zip"
  source = data.archive_file.backend.output_path
}
