(function planetsAndPortalsItemRegistry() {
  StartupEvents.registry("item", (event) => {
    //! Armour
    event.create("planetsandportals:the_badge", "chestplate").tier("the_badge");

    //! Basic
    const basicItems = [
      // Crushed Ad Astra Ores
      {
        id: "planetsandportals:crushed_raw_desh", // Texture from Create Ad Astra Compat
        name: "Crushed Desh Ore",
        stackSize: 64,
      },
      {
        id: "planetsandportals:desh_dust",
        name: "Desh Dust",
        stackSize: 64,
      },
      {
        id: "planetsandportals:crushed_raw_ostrum", // Texture from Create Ad Astra Compat
        name: "Crushed Ostrum Ore",
        stackSize: 64,
      },
      {
        id: "planetsandportals:crushed_raw_calorite", // Texture from Create Ad Astra Compat
        name: "Crushed Calorite Ore",
        stackSize: 64,
      },

      // Ingredient items
      {
        id: "planetsandportals:steel_electrode",
        name: "Steel Electrode",
        stackSize: 64,
      },
      {
        id: "planetsandportals:andesite_dust", // Texture from Create: Astral
        name: "Powdered Andesite",
        stackSize: 64,
      },
      {
        id: "planetsandportals:brass_mixture",
        name: "Brass Mixture",
        stackSize: 64,
      },
    ];

    basicItems.forEach((item) => {
      event
        .create(item.id, "basic")
        .displayName(item.name)
        .maxStackSize(item.stackSize ?? 64)
        .rarity(item.rarity ?? "common");
    });

    //! Create Sequenced Assembly transitional items

    const transitionalItems = [
      {
        id: "planetsandportals:unfinished_engine_frame",
        name: "Unfinished Engine Frame",
        stackSize: 1,
      },
    ];

    transitionalItems.forEach((item) => {
      event
        .create(item.id, "create:sequenced_assembly")
        .displayName(item.name)
        .maxStackSize(item.stackSize ?? 64)
        .rarity(item.rarity ?? "common");
    });
  });
})();
