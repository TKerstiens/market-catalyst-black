powershell -Command {
    # Check if the CloudFront distribution ID environment variable exists
    if (-not [string]::IsNullOrWhiteSpace($env:MARKET_CB_CLOUDFRONT_DIST_ID)) {
        $cloudFrontDistributionId = $env:MARKET_CB_CLOUDFRONT_DIST_ID
    } else {
        # Prompt the user for the CloudFront distribution ID if not found in the environment
        Write-Host "Enter your CloudFront distribution ID:"
        $cloudFrontDistributionId = Read-Host
    }

    # Ensure CloudFront distribution ID is provided
    if ([string]::IsNullOrWhiteSpace($cloudFrontDistributionId)) {
        Write-Host "CloudFront distribution ID is required to proceed."
        exit
    }

    # Build the React app
    npm run build

    # Sync the build directory to your S3 bucket
    aws --profile terraform s3 sync build/ s3://market.catalyst.black --delete

    # Invalidate the CloudFront cache to ensure users see the updated version
    aws --profile terraform cloudfront create-invalidation --distribution-id $cloudFrontDistributionId --paths "/*"

    Write-Host "Deployment complete!"
}
