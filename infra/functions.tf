data "archive_file" "backend" {
  type        = "zip"
  source_dir  = "../backend"
  output_path = "./backend-${timestamp()}.zip"

  excludes = [
    "node_modules",
    ".gcloudignore",
    ".gitignore",
    ".eslintrc.js",
    "src/apis.test.*",
    "babel.config.js",
    "package-lock.json",
    "pnpm-lock.yaml",
    "sonar-project.properties",
    "README.md",
  ]
}

resource "google_cloudfunctions_function" "backend" {
  name                  = "api"
  runtime               = var.backend_runtime
  available_memory_mb   = var.backend_memory
  entry_point           = "api"
  source_archive_bucket = google_storage_bucket.backend.name
  source_archive_object = google_storage_bucket_object.backend.name
  timeout               = var.backend_timeout
  trigger_http          = true
  service_account_email = google_service_account.backend.email

  depends_on = [
    module.project-services,
  ]

  timeouts {
    create = "10m"
    update = "10m"
    delete = "5m"
  }
}

resource "google_cloudfunctions_function_iam_member" "backend" {
  cloud_function = google_cloudfunctions_function.backend.name
  role           = "roles/cloudfunctions.invoker"
  member         = "allUsers"
}
