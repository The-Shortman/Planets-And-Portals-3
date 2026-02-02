// Remove player fall damage in the nether
(function negateNetherFallDamage() {
  EntityEvents.hurt("minecraft:player", (event) => {
    const { player, source } = event;

    if (!event.entity.isPlayer()) return;

    if (player.level.dimension == "minecraft:the_nether") {
      if (source.type().msgId() == "fall") {
        event.cancel();
      }
    }
  });
})();
