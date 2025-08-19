# Simple PowerShell HTTP Server
$port = 8080
$root = Get-Location

Write-Host "Starting HTTP server on port $port..."
Write-Host "Serving files from: $root"
Write-Host "Open your browser and go to: http://localhost:$port"
Write-Host "Press Ctrl+C to stop the server"
Write-Host ""

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $url = $request.Url.LocalPath
        if ($url -eq "/") {
            $url = "/index.html"
        }
        
        # Handle clean URLs (remove .html extension)
        $filePath = Join-Path $root $url.TrimStart("/")
        
        # If file doesn't exist, try adding .html extension
        if (-not (Test-Path $filePath -PathType Leaf)) {
            $filePath = Join-Path $root ($url.TrimStart("/") + ".html")
        }
        
        Write-Host "$(Get-Date -Format 'HH:mm:ss') - $($request.HttpMethod) $url -> $filePath"
        
        if (Test-Path $filePath -PathType Leaf) {
            $content = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $content.Length
            
            # Set content type based on file extension
            $extension = [System.IO.Path]::GetExtension($filePath)
            switch ($extension) {
                ".html" { $response.ContentType = "text/html" }
                ".css"  { $response.ContentType = "text/css" }
                ".js"   { $response.ContentType = "application/javascript" }
                ".png"  { $response.ContentType = "image/png" }
                ".jpg"  { $response.ContentType = "image/jpeg" }
                ".jpeg" { $response.ContentType = "image/jpeg" }
                ".gif"  { $response.ContentType = "image/gif" }
                default { $response.ContentType = "text/plain" }
            }
            
            $response.OutputStream.Write($content, 0, $content.Length)
            Write-Host "  [SUCCESS] Served successfully"
        } else {
            $response.StatusCode = 404
            $notFound = [System.Text.Encoding]::UTF8.GetBytes("404 - File not found: $url")
            $response.OutputStream.Write($notFound, 0, $notFound.Length)
            Write-Host "  [ERROR] 404 Not Found"
        }
        
        $response.Close()
    }
} finally {
    $listener.Stop()
}
