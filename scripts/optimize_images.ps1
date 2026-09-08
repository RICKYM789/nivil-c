Add-Type -AssemblyName System.Drawing

$projectDir = "c:\Users\ricky\Desktop\niviwebste\public\images\projects"
$files = Get-ChildItem -Path $projectDir -File

function Get-JpegEncoder {
    $codecs = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders()
    foreach ($codec in $codecs) {
        if ($codec.MimeType -eq "image/jpeg") {
            return $codec
        }
    }
    return $null
}

$jpegEncoder = Get-JpegEncoder
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 80L)

foreach ($file in $files) {
    if ($file.Length -gt 500KB) {
        Write-Host "Processing: $($file.Name) ($([math]::Round($file.Length / 1MB, 2)) MB)"
        
        try {
            $bytes = [System.IO.File]::ReadAllBytes($file.FullName)
            $ms = New-Object System.IO.MemoryStream(,$bytes)
            $img = [System.Drawing.Image]::FromStream($ms)
            
            $maxWidth = 1600
            $maxHeight = 1600
            
            $ratioX = $maxWidth / $img.Width
            $ratioY = $maxHeight / $img.Height
            $ratio = [Math]::Min($ratioX, $ratioY)
            
            if ($ratio -lt 1.0) {
                $newWidth = [int]($img.Width * $ratio)
                $newHeight = [int]($img.Height * $ratio)
            } else {
                $newWidth = $img.Width
                $newHeight = $img.Height
            }
            
            $bmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
            $g = [System.Drawing.Graphics]::FromImage($bmp)
            $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
            $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
            $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
            
            $g.DrawImage($img, 0, 0, $newWidth, $newHeight)
            
            $img.Dispose()
            $ms.Dispose()
            $g.Dispose()
            
            $tempPath = $file.FullName + ".tmp"
            if ($jpegEncoder -and ($file.Extension -match "jpe?g|JPG")) {
                $bmp.Save($tempPath, $jpegEncoder, $encoderParams)
            } else {
                $bmp.Save($tempPath, [System.Drawing.Imaging.ImageFormat]::Png)
            }
            $bmp.Dispose()
            
            Remove-Item $file.FullName -Force
            Rename-Item $tempPath $file.Name -Force
            
            $newFile = Get-Item $file.FullName
            Write-Host "Done: $($file.Name) -> $([math]::Round($newFile.Length / 1KB, 1)) KB"
        } catch {
            Write-Host "Error processing $($file.Name): $_"
        }
    }
}
