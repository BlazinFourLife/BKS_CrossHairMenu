local crosshair = {
    size = 30,
    color = "#ffffff",
    thickness = 2,
    enabled = false,
    style = "cross",
    showOnlyWhenAimed = false
}

local isMenuOpen = false
local lastVisibilityState = false
local updateInterval = 100 -- milliseconds

local function updateCrosshairVisibility()
    if not crosshair.enabled then
        if lastVisibilityState then
            SendNUIMessage({ action = "updateCrosshairVisibility", visible = false })
            lastVisibilityState = false
        end
    else
        local shouldShow = not crosshair.showOnlyWhenAimed or IsPlayerFreeAiming(PlayerId())
        local isUIVisible = not IsPauseMenuActive() and not IsHudHidden()
        local newVisibilityState = shouldShow and isUIVisible

        if newVisibilityState ~= lastVisibilityState then
            SendNUIMessage({ action = "updateCrosshairVisibility", visible = newVisibilityState })
            lastVisibilityState = newVisibilityState
        end
    end

    SetTimeout(updateInterval, updateCrosshairVisibility)
end

local function updateCrosshair()
    SendNUIMessage({
        action = "updateCrosshair",
        data = crosshair
    })
end

RegisterCommand('toggle_crosshair', function()
    crosshair.enabled = not crosshair.enabled
    updateCrosshair()
    print("Crosshair toggled. Enabled:", crosshair.enabled)
end, false)

RegisterCommand('crosshair', function()
    if not isMenuOpen then
        isMenuOpen = true
        SetNuiFocus(true, true)
        SendNUIMessage({ 
            action = 'open', 
            data = crosshair 
        })
        print("Crosshair menu opened")
    else
        print("Crosshair menu is already open")
    end
end, false)

RegisterNUICallback('saveSettings', function(data, cb)
    crosshair.size = tonumber(data.size)
    crosshair.thickness = tonumber(data.thickness)
    crosshair.color = data.color
    crosshair.style = data.crosshair
    crosshair.showOnlyWhenAimed = data.showOnlyWhenAimed
    crosshair.enabled = true
    updateCrosshair()
    print("Settings saved:", json.encode(crosshair))
    cb({status = "ok"})
end)

RegisterNUICallback('closeUI', function(_, cb)
    isMenuOpen = false
    SetNuiFocus(false, false)
    SendNUIMessage({ action = 'hideMenu' })
    print("UI closed")
    cb({status = "ok"})
end)

RegisterCommand('debug_crosshair', function()
    print("Crosshair Debug Info:")
    print(json.encode(crosshair))
    print("Is menu open:", isMenuOpen)
end, false)

exports('GetCrosshairSettings', function()
    return crosshair
end)

exports('UpdateCrosshairSettings', function(newSettings)
    for k, v in pairs(newSettings) do
        if crosshair[k] ~= nil then
            crosshair[k] = v
        end
    end
    updateCrosshair()
end)

-- Start the visibility update loop
Citizen.CreateThread(function()
    updateCrosshairVisibility()
end)

-- Initialize the crosshair when the resource starts
Citizen.CreateThread(function()
    Wait(1000) -- Wait a short time to ensure everything is loaded
    updateCrosshair()
    -- Ensure the UI is hidden on script restart
    SendNUIMessage({ action = 'hideMenu' })
end)

