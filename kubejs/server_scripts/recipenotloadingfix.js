PlayerEvents.loggedIn(e => {
    e.server.runCommandSilent(`reload`) // Reloads all server scripts when a player joins. Enabling this may crash a multiplayer server.
})