# 
# Script to update the Packages inside all folders.
#
#
#


# TODO: Create an Array of folders and execute it loop

# TODO: Convert this into function
Set-Location -Path ..\webapp
ng update @angular/cli @angular/core
npm update

# Come back to PowerShellScripts folder
Set-Location -Path ..\PowerShellScripts
