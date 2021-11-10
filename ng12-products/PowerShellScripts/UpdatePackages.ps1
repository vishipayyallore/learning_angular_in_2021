# 
# Script to update the Packages inside all folders.
#

# TODO: Convert this into function
Set-Location -Path ..\webapp

npm i
ng update @angular/cli @angular/core
npm update

# Come back to PowerShellScripts folder
Set-Location -Path ..\PowerShellScripts
