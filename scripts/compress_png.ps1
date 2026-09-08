Add-Type -AssemblyName System.Drawing

$filePath = "c:\Users\ricky\Desktop\niviwebste\public\images\projects\event1.png"
if (Test-Path $filePath) {
    $bytes = [System.IO.File]::ReadAllBytes($filePath)
    $ms = New-Object System.IO.MemoryStream(,$bytes)
    $img = [System.Drawing.Image]::FromStream($ms)
    
    $maxWidth = 1600
    $maxHeight = 1600
    $ratio = [Math]::Min($maxWidth / $img.Width, $maxHeight / $img.Height)
    $newW = [int]($img.Width * $ratio)
    $newH = [int]($img.Height * $ratio)
    
    $bmp = New-Object System.Drawing.Bitmap($newW, $newH)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($img, 0, 0, $newW, $newH)
    
    $img.Dispose()
    $ms.Dispose()
    $g.Dispose()
    
    $codecs = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders()
    $jpegEncoder = $null
    foreach ($c in $codecs) {
        if ($c.MimeType -eq "image/jpeg") { $jpegEncoder = $c; break }
    }
    
    $ep = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 82L)
    
    $tempPath = $filePath + ".tmp"
    $bmp.Save($tempPath, $jpegEncoder, $ep)
    $bmp.Dispose()
    
    Remove-Item $filePath -Force
    Rename-Item $tempPath "event1.png" -Force
    
    $f = Get-Item $filePath
    Write-Host "event1.png resized and compressed to: $([math]::Round($f.Length / 1KB, 1)) KB"
}
