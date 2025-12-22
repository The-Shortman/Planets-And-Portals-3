(function mobsandfamiliarsMossieSpawns() {
  EntityJSEvents.biomeSpawns((event) => {
    event.addSpawn(
      "mobsandfamiliars:mossie",
      ["#forge:is_lush", "#minecraft:is_jungle", "#minecraft:lush_caves"],
      500,
      3,
      5
    );
  });
})();
