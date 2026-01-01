(function portaberryTeleportSafety() {
  EntityEvents.hurt("minecraft:player", (event) => {
    const { player, source } = event;
    const server = Utils.server;

    if (!event.entity.isPlayer()) return;

    if (player.level.dimension == "minecraft:the_nether") {
      if (
        source.type().msgId() == "inWall" &&
        player.stages.has("nether_teleport")
      ) {
        let x = Math.floor(player.x);
        let y = Math.floor(player.y);
        let z = Math.floor(player.z);
        //prettier-ignore
        server.runCommandSilent(
          `execute in minecraft:the_nether run fill ${x - 1} ${y} ${z - 1} ${x + 1} ${y + 2} ${z + 1} air`
        );
        player.stages.remove("nether_teleport");
        event.cancel();
      }
    }
  });
})();
