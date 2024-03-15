resource "google_firestore_database" "this" {
  name                        = "(default)"
  location_id                 = var.region
  type                        = "FIRESTORE_NATIVE"
  concurrency_mode            = "PESSIMISTIC"
  app_engine_integration_mode = "DISABLED"

  depends_on = [
    module.project-services,
  ]
}

resource "google_firebaserules_ruleset" "this" {
  project = var.project_id

  source {
    files {
      name    = "firestore.rules"
      content = file("firestore.rules")
    }
  }

  depends_on = [
    module.project-services,
    google_firestore_database.this,
  ]
}

resource "google_firebaserules_release" "this" {
  project      = var.project_id
  ruleset_name = "project/${var.project_id}/rulesets/${google_firebaserules_ruleset.this.name}"
  name         = "cloud.firestore"

  depends_on = [
    module.project-services,
    google_firestore_database.this,
  ]

  lifecycle {
    replace_triggered_by = [
      google_firebaserules_ruleset.this,
    ]
  }
}
