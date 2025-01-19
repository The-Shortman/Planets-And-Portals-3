Platform.mods.kubejs.name = 'Planets and Portals 3'

// startup script
global.onLivingSwapItemsEvent = function(e){} // placeholder
ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingSwapItemsEvent',  global.onLivingSwapItemsEvent);