$ErrorActionPreference = 'Stop'

$projectRoot = Split-Path -Parent $PSScriptRoot
$index = Get-Content -Raw (Join-Path $projectRoot 'index.html')
$style = Get-Content -Raw (Join-Path $projectRoot 'style.css')
$script = Get-Content -Raw (Join-Path $projectRoot 'script.js')
$scene = Get-Content -Raw (Join-Path $projectRoot 'three-scene.js')
$failures = [System.Collections.Generic.List[string]]::new()

function Assert-Absent([string]$Name, [string]$Text, [string]$Pattern) {
    if ($Text -match $Pattern) {
        $failures.Add("Unexpected $Name")
    }
}

function Assert-Present([string]$Name, [string]$Text, [string]$Pattern) {
    if ($Text -notmatch $Pattern) {
        $failures.Add("Missing $Name")
    }
}

Assert-Absent 'Reflection panel' $index '(?i)reflection-panel|>\s*Reflection\s*<'
Assert-Absent 'top category navigation' $index '(?i)class="nav-links"'
Assert-Absent 'hero shortcut buttons' $index '(?i)class="hero-actions"|class="button\b'
Assert-Absent 'button-only CSS' $style '(?m)^\.button(?:-|\s|\{|:)|^\.hero-actions\b|^\.nav-links\b'
Assert-Absent 'magnet button JavaScript' $script 'initializeMagnetButtons|data-magnet|navLinks'

Assert-Present 'non-interactive brand' $index '(?s)<div class="site-brand".*?Renzo Studio.*?</div>'
Assert-Present 'left image-editing panel' $index 'class="story-panel panel-left gallery-panel"'
Assert-Present 'right Blender panel' $index 'class="story-panel panel-right blender-panel"'
Assert-Present 'left Fusion panel' $index 'class="story-panel panel-left fusion-panel"'
Assert-Present 'right animation panel' $index 'class="story-panel panel-right growth-video"'

$fusionArtworkCount = [regex]::Matches($index, 'class="artwork fusion-artwork"').Count
if ($fusionArtworkCount -ne 4) {
    $failures.Add("Expected 4 Fusion artworks, found $fusionArtworkCount")
}

Assert-Present 'interlocking bracket image' $index 'images/fusion-interlocking-bracket\.png'
Assert-Present 'leaf structure image' $index 'images/fusion-leaf-structure\.png'
Assert-Present 'interlocking bracket caption' $index '<figcaption>Interlocking Bracket Model</figcaption>'
Assert-Present 'leaf structure caption' $index '<figcaption>Leaf Structure Model</figcaption>'
Assert-Present 'interlocking bracket alt text' $index 'alt="Autodesk Fusion interlocking bracket model"'
Assert-Present 'leaf structure alt text' $index 'alt="Autodesk Fusion leaf structure model"'

if (-not (Test-Path (Join-Path $projectRoot 'images/fusion-interlocking-bracket.png'))) {
    $failures.Add('Missing interlocking bracket image file')
}

if (-not (Test-Path (Join-Path $projectRoot 'images/fusion-leaf-structure.png'))) {
    $failures.Add('Missing leaf structure image file')
}

Assert-Present 'curved stem path' $scene 'THREE\.CatmullRomCurve3'
Assert-Present 'tubular stem geometry' $scene 'THREE\.TubeGeometry'
Assert-Present 'tapered leaf geometry' $scene 'THREE\.ShapeGeometry'
Assert-Present 'soft glow particles' $scene 'THREE\.PointsMaterial'
Assert-Present 'bounded desktop camera drift' $scene 'const desktopCameraDrift = 1\.15;'
Assert-Present 'gentle world rotation' $scene 'world\.rotation\.y = progress \* 0\.24;'
Assert-Present 'slender stem radius' $scene 'const stemRadius = narrowScreen \? 0\.18 : 0\.24;'
Assert-Present 'reduced motion support' $scene 'prefers-reduced-motion'
Assert-Present 'hidden page rendering pause' $scene 'visibilitychange'
Assert-Present 'mobile pixel-ratio cap' $scene 'Math\.min\(window\.devicePixelRatio'
Assert-Present 'WebGL fallback state' $scene 'is-webgl-unavailable'

if ($failures.Count -gt 0) {
    Write-Host "FAILED ($($failures.Count) checks)"
    $failures | ForEach-Object { Write-Host " - $_" }
    exit 1
}

Write-Host 'PASS (30 checks)'
