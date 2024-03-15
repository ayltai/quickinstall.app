variable "project_id" {
  description = "The Firebase/Google Cloud Platform project ID to host the resources in"
  type        = string
  default     = "quickinstallapp"
}

variable "region" {
  description = "The Firebase/Google Cloud Platform region to host the resources in"
  type        = string
  default     = "europe-west2"
}

variable "project_service_apis" {
  description = "List of Google Cloud Platform APIs to enable in the project"
  type        = list(string)

  default = [
    "firebasestorage.googleapis.com",
    "firestore.googleapis.com",
    "firebaserules.googleapis.com",
    "cloudfunctions.googleapis.com",
    "cloudbuild.googleapis.com",
    "clouderrorreporting.googleapis.com",
    "iam.googleapis.com",
  ]
}

variable "backend_runtime" {
  description = "The runtime to use for the backend"
  type        = string
  default     = "nodejs20"
}

variable "backend_memory" {
  description = "The memory to use for the backend"
  type        = number
  default     = 128
}

variable "backend_timeout" {
  description = "The timeout in seconds to use for the backend"
  type        = number
  default     = 15
}
