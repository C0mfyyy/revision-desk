# Builds revision-desk.html from src/app.html by inserting the GEIT starter content at /*SEED*/.
$root = $PSScriptRoot
$utf8 = New-Object Text.UTF8Encoding($false)
$app  = [IO.File]::ReadAllText((Join-Path $root 'src\app.html'))
$seed = [IO.File]::ReadAllText((Join-Path $root 'src\geit-seed.js'))
if (-not $app.Contains('/*SEED*/')) { throw 'src/app.html is missing the /*SEED*/ marker' }
[IO.File]::WriteAllText((Join-Path $root 'revision-desk.html'), $app.Replace('/*SEED*/', $seed.TrimEnd()), $utf8)
Write-Output "Built revision-desk.html"
