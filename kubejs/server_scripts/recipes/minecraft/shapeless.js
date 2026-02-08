(function vanillaShapelessRecipes() {
  ServerEvents.recipes((event) => {
    const shapelessRecipes = [
      // Misc

      {
        input: Item.of("createoreexcavation:raw_redstone", 9),
        output: "regions_unexplored:raw_redstone_block",
        id: "raw_redstone_block",
      },
      {
        input: "regions_unexplored:raw_redstone_block",
        output: Item.of("createoreexcavation:raw_redstone", 9),
        id: "raw_redstone_from_block",
      },

      // Create

      {
        input: [
          Item.of("minecraft:gravel", 4),
          Item.of("minecraft:sand", 4),
          "minecraft:clay",
        ],
        output: Item.of("planetsandportals:grout", 8),
        id: "grout_large",
      },
      {
        input: ["minecraft:gravel", "minecraft:sand", "minecraft:clay_ball"],
        output: Item.of("planetsandportals:grout", 2),
        id: "grout_small",
      },
      {
        input: [Item.of("create:shaft", 4), "create:zinc_ingot"],
        output: Item.of("copycats:copycat_shaft", 4),
        id: "copycat_shaft",
      },

      // Ppfmg

      {
        input: "ppfmg:fireclay",
        output: Item.of("ppfmg:fireclay_ball", 4),
        id: "fireclay_ball",
      },
      {
        input: "ppfmg:cast_iron_ingot",
        output: Item.of("ppfmg:cast_iron_nugget", 9),
        id: "cast_iron_nugget",
      },
      {
        input: Item.of("ppfmg:cast_iron_nugget", 9),
        output: "ppfmg:cast_iron_ingot",
        id: "cast_iron_ingot_from_nuggets",
      },
      {
        input: "ppfmg:cast_iron_block",
        output: Item.of("ppfmg:cast_iron_ingot", 9),
        id: "cast_iron_ingot_from_block",
      },
      {
        input: Item.of("ppfmg:cast_iron_ingot", 9),
        output: "ppfmg:cast_iron_block",
        id: "cast_iron_block",
      },

      // Create Ore Excavation

      {
        input: [
          "minecraft:writable_book",
          "minecraft:map",
          "ppfmg:cast_iron_sheet",
        ],
        output: "createoreexcavation:vein_atlas",
        id: "ore_vein_atlas",
      },

      // Blast Furnace

      {
        input: ["ppfmg:fireproof_bricks", "create:andesite_funnel"],
        output: "mbd2:blast_furnace_item_input",
        id: "blast_furnace_item_input",
      },
      {
        input: ["ppfmg:fireproof_bricks", "create:fluid_valve"],
        output: "mbd2:blast_furnace_fluid_output",
        id: "blast_furnace_fluid_output",
      },
    ];

    shapelessRecipes.forEach((recipe) => {
      event
        .shapeless(recipe.output, recipe.input)
        .id(`kubejs:minecraft/shapeless/${recipe.id}`);
    });
  });
})();
