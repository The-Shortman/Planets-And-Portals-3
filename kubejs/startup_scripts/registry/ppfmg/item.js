(function ppfmgItemRegistry() {
  // This is a set of items that were intitially part of TFMG.
  // However, the mod has been removed due to a plethora of bugs present within it.
  // Instead, Ppfmg is now used to register the items. TFMG is fully licensed under the MIT License.
  StartupEvents.registry("item", (event) => {
    const basicItems = [
      {
        id: "ppfmg:bitumen", // craftable
        name: "Bitumen",
        stackSize: 64,
      },
      {
        id: "ppfmg:blasting_mixture", // craftable
        name: "Blasting Mixture",
        stackSize: 64,
      },
      {
        id: "ppfmg:cast_iron_ingot", //craftable
        name: "Cast Iron Ingot",
        stackSize: 64,
      },
      {
        id: "ppfmg:cast_iron_nugget", // craftable
        name: "Cast Iron Nugget",
        stackSize: 64,
      },
      {
        id: "ppfmg:cast_iron_sheet", // craftable
        name: "Cast Iron Sheet",
        stackSize: 64,
      },
      {
        id: "ppfmg:coal_coke", // needs mbd2 file edit
        name: "Coal Coke",
        stackSize: 64,
      },
      {
        id: "ppfmg:coal_coke_dust", // craftable
        name: "Coal Coke Dust",
        stackSize: 64,
      },
      {
        id: "ppfmg:concave_heavy_plate", // craftable
        name: "Concave Heavy Plate",
        stackSize: 64,
      },
      {
        id: "ppfmg:fireclay_ball", // craftable
        name: "Fireclay Ball",
        stackSize: 64,
      },
      {
        id: "ppfmg:fireproof_brick", // craftable
        name: "Fireproof Brick",
        stackSize: 64,
      },
      {
        id: "ppfmg:heavy_plate", // craftable
        name: "Heavy Plate",
        stackSize: 64,
      },
      {
        id: "ppfmg:limesand", // craftable
        name: "Limesand",
        stackSize: 64,
      },
      {
        id: "ppfmg:rubber_sheet", // craftable
        name: "Rubber Sheet",
        stackSize: 64,
      },
      {
        id: "ppfmg:slag", // craftable
        name: "Slag",
        stackSize: 64,
      },
      {
        id: "ppfmg:steel_mechanism", // craftable
        name: "Steel Mechanism",
        stackSize: 64,
      },
      {
        id: "ppfmg:synthetic_leather", // craftable, not useful
        name: "Synthetic Leather",
        stackSize: 64,
      },
      {
        id: "ppfmg:synthetic_string", // craftable, not useful
        name: "Synthetic String",
        stackSize: 64,
      },
      {
        id: "ppfmg:unevacuated_steel_mechanism", // craftable
        name: "Unevacuated Steel Mechanism",
        stackSize: 64,
      },
    ];

    //! Create Sequenced Assembly transitional items

    const transitionalItems = [
      {
        id: "ppfmg:unfinished_steel_mechanism",
        name: "Unfinished Steel Mechanism",
      },
    ];

    basicItems.forEach((item) => {
      event
        .create(item.id, "basic")
        .displayName(item.name)
        .maxStackSize(item.stackSize)
        .rarity(item.rarity ?? "common");
    });

    transitionalItems.forEach((item) => {
      event
        .create(item.id, "create:sequenced_assembly")
        .displayName(item.name)
        .maxStackSize(1)
        .rarity(item.rarity ?? "common");
    });
  });
})();
