# Reels Master for Firefox (Gecko) - AMO Package Builder
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location -Path $scriptDir

$files = @(
    "manifest.json", "background.js", "content.js", 
    "popup.html", "popup.js", "popup.css", "styles.css", 
    "welcome.html", "welcome.js", "welcome.css", 
    "icon16.png", "icon19.png", "icon32.png", "icon38.png", 
    "icon48.png", "icon64.png", "icon128.png", "icon512.png", 
    "icon_master.png", "icon_master.svg", "LICENSE"
)

$zipName = "ReelsMasterGecko-v2.1.0-firefox.zip"
$xpiName = "ReelsMasterGecko-v2.1.0-firefox.xpi"

Remove-Item -Path $zipName, $xpiName -ErrorAction SilentlyContinue
Compress-Archive -Path $files -DestinationPath $zipName -Force
Copy-Item -Path $zipName -Destination $xpiName -Force

Write-Host "✅ Successfully packaged Firefox AMO extension:" -ForegroundColor Green
Write-Host " - $zipName"
Write-Host " - $xpiName"
Write-Host "Ready to upload to: https://addons.mozilla.org/en-US/developers/addon/submit/upload-listed" -ForegroundColor Cyan
