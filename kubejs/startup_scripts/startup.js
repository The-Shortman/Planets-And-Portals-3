// unused event to detect when a player swaps main hand item

global.onLivingSwapItemsEvent = function (event) {}; // placeholder
ForgeEvents.onEvent(
  "net.minecraftforge.event.entity.living.LivingSwapItemsEvent",
  global.onLivingSwapItemsEvent
);
