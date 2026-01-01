// Remove player fall damage in the nether
(function negateNetherFallDamage() {
  EntityEvents.hurt((event) => {
    const { player, source } = event;
    let dim = player.getLevel().getDimension();

    if (!event.entity.isPlayer()) return;

    if (dim == "minecraft:the_nether") {
      if (source.type == "minecraft:fall") {
        event.cancel();
      }
    }
  });
})();
