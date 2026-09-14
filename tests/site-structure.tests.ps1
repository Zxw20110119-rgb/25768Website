$ErrorActionPreference = 'Stop'
node (Join-Path $PSScriptRoot 'portfolio.test.cjs')
exit $LASTEXITCODE
