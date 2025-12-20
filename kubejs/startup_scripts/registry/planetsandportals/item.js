(function planetsAndPortalsItemRegistry() {
  StartupEvents.registry("item", (event) => {
    //! Armour
    event.create("planetsandportals:the_badge", "chestplate").tier("the_badge");

    //! Portaberries
    event.create("planetsandportals:infernal_portaberries").food((food) => {
      food
        .hunger(0)
        .saturation(0)
        .effect("minecraft:fire_resistance", 600, 0, 1)
        .effect("minecraft:slow_falling", 600, 0, 1)
        .alwaysEdible()
        .eaten((ctx) => {
          const { player } = ctx;
          let dim = player.getLevel().getDimension();

          if (dim == "minecraft:overworld") {
            let x = Math.floor(player.x / 8.0) + 0.5;
            let y = 248.0;
            let z = Math.floor(player.z / 8.0) + 0.5;
            //prettier-ignore
            Utils.server.runCommandSilent(
              `execute in minecraft:the_nether run tp ${player.uuid} ${x} ${y} ${z}`
            );
          } else if (dim == "minecraft:the_nether") {
            let x = Math.floor(player.x * 8.0) + 0.5;
            let y = 248.0;
            let z = Math.floor(player.z * 8.0) + 0.5;
            //prettier-ignore
            Utils.server.runCommandSilent(
              `execute in minecraft:overworld run tp ${player.uuid} ${x} ${y} ${z}`
            );
          }
        });
    });

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
      {
        id: "planetsandportals:lavaberries",
        name: "Lavaberries",
        stackSize: 64,
      },
      {
        id: "planetsandportals:soaked_lavaberries",
        name: "Soaked Lavaberries",
        stackSize: 64,
      },
      {
        id: "planetsandportals:sand_encased_egg",
        name: "Sand-Encased Egg",
        stackSize: 64,
      },
      {
        id: "planetsandportals:rose_quartz_dust",
        name: "Rose Quartz Dust",
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
      {
        id: "planetsandportals:unfinished_soul_sand",
        name: "Unfinished Soul Sand",
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
