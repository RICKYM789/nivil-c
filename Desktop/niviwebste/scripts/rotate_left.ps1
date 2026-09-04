Add-Type -AssemblyName System.Drawing

$projectDir = "c:\Users\ricky\Desktop\niviwebste\public\images\projects"
$targets = @(
    "pool_party4.jpeg",
    "event13.jpeg"
)

$codecs = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders()
$jpegEncoder = $null
foreach ($c in $codecs) {
    if ($c.MimeType -eq "image/jpeg") { $jpegEncoder = $c; break }
}

$ep = New-Object System.Drawing.Imaging.EncoderParameters(1)
$ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 85L)

foreach ($name in $targets) {
    $filePath = Join-Path $projectDir $name
    if (Test-Path $filePath) {
        Write-Host "Rotating left: $name"
        $bytes = [System.IO.File]::ReadAllBytes($filePath)
        $ms = New-Object System.IO.MemoryStream(,$bytes)
        $img = [System.Drawing.Image]::FromStream($ms)
        
        # Rotate 270 degrees clockwise = 90 degrees left
        $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone)
        
        $tempPath = $filePath + ".tmp"
        $img.Save($tempPath, $jpegEncoder, $ep)
        $img.Dispose()
        $ms.Dispose()
        
        Remove-Item $filePath -Force
        Rename-Item $tempPath $name -Force
        
        Write-Host "Done: $name rotated left"
    } else {
        Write-Host "File not found: $name"
    }
}
