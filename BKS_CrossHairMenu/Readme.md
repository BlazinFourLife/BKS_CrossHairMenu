# Crosshair Script

This script draws a crosshair in the center of the screen in a FiveM resource and includes a menu for customization.

## Creators

- Kingy
- Blazin

## Usage (FiveM)

1. Add the `Client.lua` and `html/ui.js` scripts to your FiveM resource.
2. Ensure the scripts are correctly referenced in your `fxmanifest.lua` file:
    ```lua
    -- fxmanifest.lua
    fx_version 'cerulean'
    game 'gta5'

    client_scripts {
        'Client.lua'
    }

    files {
        'html/ui.js'
    }

    ui_page 'html/ui.html'
    ```
3. Use the command `/crosshair` to open the crosshair customization menu.

## Customization

You can customize the crosshair by calling the following functions from other scripts:

- `exports['BKS_crosshairmenu']:GetCrosshairSettings()` - Gets the current crosshair settings.
- `exports['BKS_crosshairmenu']:UpdateCrosshairSettings(newSettings)` - Updates the crosshair settings.

## Crosshair Menu

1. The crosshair menu can be opened using the `/crosshair` command.
2. Adjust the size, thickness, and color of the crosshair using the menu.
3. Save the settings to apply the changes.

## Commands

- `/crosshair` - Opens the crosshair customization menu.
- `/debug_crosshair` - Prints debug information about the crosshair settings.
- `/toggle_crosshair` - Toggles the crosshair on and off (optional).

The crosshair will now be displayed in the center of the screen when you run the game, and you can customize it using the menu or toggle it using the command.
