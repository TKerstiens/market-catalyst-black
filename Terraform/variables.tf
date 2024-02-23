variable "aws_region" {
  description = "The AWS region where resources will be created"
  type        = string
  default     = "us-east-1" # Set your default region or remove the default to require explicit value
}