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
            player.stages.add("nether_teleport");
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
      // Ore processing compat
      {
        id: "planetsandportals:dirty_zinc_dust",
        name: "Dirty Zinc Dust",
        stackSize: 64,
      },
      {
        id: "planetsandportals:zinc_dust",
        name: "Zinc Dust",
        stackSize: 64,
      },
      {
        id: "planetsandportals:crushed_raw_desh", // Texture from Create Ad Astra Compat
        name: "Crushed Desh Ore",
        stackSize: 64,
      },
      {
        id: "planetsandportals:dirty_desh_dust",
        name: "Dirty Desh Dust",
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
      {
        id: "planetsandportals:sticky_wart",
        name: "Sticky Wart",
        stackSize: 64,
      },
      {
        id: "planetsandportals:stony_wart",
        name: "Stony Wart",
        stackSize: 64,
      },
      {
        id: "planetsandportals:concave_heavy_plate",
        name: "Concave Heavy Plate",
        stackSize: 64,
      },
      {
        id: "planetsandportals:unevacuated_steel_mechanism",
        name: "Unevacuated Steel Mechanism",
        stackSize: 64,
      },
      {
        id: "planetsandportals:cardboard_mechanism",
        name: "Cardboard Mechanism",
        stackSize: 64,
      },
      {
        id: "planetsandportals:salt_bucket",
        name: "Salt Bucket",
        stackSize: 64,
      },
      {
        id: "planetsandportals:blasting_mixture",
        name: "Blasting Mixture",
        stackSize: 64,
      },
      {
        id: "planetsandportals:ballistic_polymer",
        name: "Ballistic Polymer",
        stackSize: 16,
      },

      // Curving Press Heads

      {
        id: "planetsandportals:fan_curving_head",
        name: "Fan Curving Head",
        stackSize: 1,
      },
    ];

    basicItems.forEach((item) => {
      event
        .create(item.id, "basic")
        .displayName(item.name)
        .maxStackSize(item.stackSize)
        .rarity(item.rarity ?? "common");
    });

    //! Create Sequenced Assembly transitional items

    const transitionalItems = [
      {
        id: "planetsandportals:unfinished_soul_sand",
        name: "Unfinished Soul Sand",
      },
      {
        id: "planetsandportals:unfinished_crafter_slot_cover",
        name: "Unfinished Crafter Slot Cover",
      },
      {
        id: "planetsandportals:unfinished_rose_quartz",
        name: "Unfinished Rose Quartz",
      },
      {
        id: "planetsandportals:incomplete_electron_tube",
        name: "Incomplete Electron Tube",
      },
      {
        id: "planetsandportals:incomplete_cardboard_mechanism",
        name: "Incomplete Cardboard Mechanism",
      },
      {
        id: "planetsandportals:incomplete_generator_coil",
        name: "Incomplete Generator Coil",
      },
      {
        id: "planetsandportals:incomplete_nose_cone",
        name: "Incomplete Nose Cone",
      },
    ];

    transitionalItems.forEach((item) => {
      event
        .create(item.id, "create:sequenced_assembly")
        .displayName(item.name)
        .maxStackSize(1)
        .rarity(item.rarity ?? "common");
    });
  });
})();
