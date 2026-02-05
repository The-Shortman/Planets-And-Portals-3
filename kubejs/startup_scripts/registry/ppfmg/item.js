(function ppfmgItemRegistry() {
  // This is a set of items that were intitially part of TFMG.
  // However, the mod has been removed due to a plethora of bugs present within it.
  // Instead, PPFMG is now used to register the items. TFMG is fully licensed under the MIT License.
  StartupEvents.registry("item", (event) => {
    const basicItems = [
      {
        id: "ppfmg:bitumen",
        name: "Bitumen",
        stackSize: 64,
      },
      {
        id: "ppfmg:blasting_mixture",
        name: "Blasting Mixture",
        stackSize: 64,
      },
      {
        id: "ppfmg:cast_iron_ingot",
        name: "Cast Iron Ingot",
        stackSize: 64,
      },
      {
        id: "ppfmg:cast_iron_nugget",
        name: "Cast Iron Nugget",
        stackSize: 64,
      },
      {
        id: "ppfmg:cast_iron_sheet",
        name: "Cast Iron Sheet",
        stackSize: 64,
      },
      {
        id: "ppfmg:coal_coke",
        name: "Coal Coke",
        stackSize: 64,
      },
      {
        id: "ppfmg:coal_coke_dust",
        name: "Coal Coke Dust",
        stackSize: 64,
      },
      {
        id: "ppfmg:concave_heavy_plate",
        name: "Concave Heavy Plate",
        stackSize: 64,
      },
      {
        id: "ppfmg:fireclay_ball",
        name: "Fireclay Ball",
        stackSize: 64,
      },
      {
        id: "ppfmg:fireproof_brick",
        name: "Fireproof Brick",
        stackSize: 64,
      },
      {
        id: "ppfmg:heavy_plate",
        name: "Heavy Plate",
        stackSize: 64,
      },
      {
        id: "ppfmg:limesand",
        name: "Limesand",
        stackSize: 64,
      },
      {
        id: "ppfmg:rubber_sheet",
        name: "Rubber Sheet",
        stackSize: 64,
      },
      {
        id: "ppfmg:slag",
        name: "Slag",
        stackSize: 64,
      },
      {
        id: "ppfmg:steel_mechanism",
        name: "Steel Mechanism",
        stackSize: 64,
      },
      {
        id: "ppfmg:synthetic_leather",
        name: "Synthetic Leather",
        stackSize: 64,
      },
      {
        id: "ppfmg:synthetic_string",
        name: "Synthetic String",
        stackSize: 64,
      },
      {
        id: "ppfmg:unevacuated_steel_mechanism",
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
