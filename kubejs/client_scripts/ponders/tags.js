(function ponderTags() {
  Ponder.tags((event) => {
    [
      {
        id: "planetsandportals:tier_1_machines",
        icon: "minecraft:paper",
        name: "Early Game Multiblocks",
        desc: "Ponders coming soon!",
        items: "minecraft:paper",
      },
    ].forEach((ponder) => {
      event.createTag(
        ponder.id,
        ponder.icon,
        ponder.name,
        ponder.desc,
        ponder.items,
      );
    });
  });
})();
