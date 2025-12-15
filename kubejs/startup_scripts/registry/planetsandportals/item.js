(function planetsAndPortalsItemRegistry() {
  StartupEvents.registry("item", (event) => {
    //! Armour
    event.create("planetsandportals:the_badge", "chestplate").tier("the_badge");

    //! Basic
    const basicItems = [
      // Restricted Portals Key (end prevention)
      {
        id: "planetsandportals:end_prevention_placeholder",
        name: "Placeholder Item",
        stackSize: 1,
      },

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

    //! Cosmic Resonator

    const cosmicResonatorItems = [
      { id: "alpha", stage: "1", name: "Alpha" },
      { id: "beta", stage: "1", name: "Beta" },
      { id: "gamma", stage: "1", name: "Gamma" },
      { id: "delta", stage: "1", name: "Delta" },
      { id: "epsilon", stage: "1", name: "Epsilon" },
    ];

    cosmicResonatorItems.forEach((item) => {
      event
        .create(`planetsandportals:cosmic_resonator_${item.id}`, "basic")
        .displayName(`Cosmic Resonator ${item.name}`)
        .maxStackSize(1)
        .rarity("epic")
        .texture(
          `planetsandportals:item/cosmic_resonator/tier_${item.stage}/${item.id}`
        )
        .fireResistant(true);
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
