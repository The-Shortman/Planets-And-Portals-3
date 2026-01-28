(function vanillaShapelessRecipes() {
  ServerEvents.recipes((event) => {
    const shapelessRecipes = [
      // Misc

      {
        inputs: Item.of("createoreexcavation:raw_redstone", 9),
        output: "regions_unexplored:raw_redstone_block",
        id: "raw_redstone_block",
      },
      {
        inputs: "regions_unexplored:raw_redstone_block",
        output: Item.of("createoreexcavation:raw_redstone", 9),
        id: "raw_redstone_from_block",
      },
      {
        inputs: "tfmg:fireclay",
        output: Item.of("tfmg:fireclay_ball", 4),
        id: "fireclay_ball",
      },

      // Create

      {
        inputs: [
          Item.of("minecraft:gravel", 4),
          Item.of("minecraft:sand", 4),
          "minecraft:clay",
        ],
        output: Item.of("planetsandportals:grout", 8),
        id: "grout_large",
      },
      {
        inputs: ["minecraft:gravel", "minecraft:sand", "minecraft:clay_ball"],
        output: Item.of("planetsandportals:grout", 2),
        id: "grout_small",
      },
      {
        inputs: [Item.of("create:shaft", 4), "create:zinc_ingot"],
        output: Item.of("copycats:copycat_shaft", 4),
        id: "copycat_shaft",
      },

      // Create Ore Excavation

      {
        inputs: [
          "minecraft:writable_book",
          "minecraft:map",
          "tfmg:cast_iron_sheet",
        ],
        output: "createoreexcavation:vein_atlas",
        id: "ore_vein_atlas",
      },

      // Blast Furnace

      {
        inputs: ["tfmg:fireproof_bricks", "create:andesite_funnel"],
        output: "mbd2:blast_furnace_item_input",
        id: "blast_furnace_item_input",
      },
      {
        inputs: ["tfmg:fireproof_bricks", "create:fluid_valve"],
        output: "mbd2:blast_furnace_fluid_output",
        id: "blast_furnace_fluid_output",
      },
    ];

    shapelessRecipes.forEach((recipe) => {
      event
        .shapeless(recipe.output, recipe.inputs)
        .id(`kubejs:minecraft/shapeless/${recipe.id}`);
    });
  });
})();
