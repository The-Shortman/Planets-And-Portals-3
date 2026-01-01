// Remove player fall damage in the nether
(function negateNetherFallDamage() {
  EntityEvents.hurt("minecraft:player", (event) => {
    const { player, source } = event;

    if (!event.entity.isPlayer()) return;

    if (player.level.dimension == "minecraft:the_nether") {
      console.log(`Player took ${source.type().msgId()} damage in Nether`);
      if (source.type().msgId() == "fall") {
        console.log("Player fell in Nether");
        event.cancel();
      }
    }
  });
})();
