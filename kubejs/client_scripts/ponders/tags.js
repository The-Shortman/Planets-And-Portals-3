(function ponderTags() {
  Ponder.tags((event) => {
    [
      {
        id: "planetsandportals:tier_1_machines",
        icon: "minecraft:paper",
        name: "Book 1 Multiblocks",
        desc: "Placeholder",
        items: "minecraft:paper",
      },
      {
        id: "planetsandportals:tier_2_machines",
        icon: "mm:steel_furnace_controller",
        name: "Book 2 Multiblocks",
        desc: "Machines designed for early industry",
        items: ["mm:steel_furnace_controller", "mm:fuel_mixer_controller"],
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
