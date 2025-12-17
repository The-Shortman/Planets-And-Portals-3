(function vanillaShapelessRecipes() {
  ServerEvents.recipes((event) => {
    const shapelessRecipes = [
      // Vanilla

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

      // Blast Furnace

      {
        inputs: ["tfmg:fireproof_bricks", "create:andesite_funnel"],
        output: "mm:blast_furnace_item_input",
        id: "blast_furnace_item_input",
      },
      {
        inputs: ["tfmg:fireproof_bricks", "create:fluid_valve"],
        output: "mm:blast_furnace_fluid_output",
        id: "blast_furnace_fluid_output",
      },
      {
        inputs: ["tfmg:blast_furnace_output"],
        output: "mm:blast_furnace_controller",
        id: "blast_furnace_controller",
      },

      // Steel Furnace

      {
        inputs: ["tfmg:heavy_machinery_casing", "create:andesite_funnel"],
        output: "mm:steel_furnace_item_input",
        id: "steel_furnace_item_input",
      },
      {
        inputs: ["tfmg:heavy_machinery_casing", "create:fluid_valve"],
        output: "mm:steel_furnace_fluid_output",
        id: "steel_furnace_fluid_output",
      },
      {
        inputs: [
          "tfmg:heavy_machinery_casing",
          "create_new_age:electrical_connector",
        ],
        output: "mm:steel_furnace_energy_input",
        id: "steel_furnace_energy_input",
      },

      // Coke Oven

      {
        inputs: ["mm:coke_oven_filler", "create:display_board"],
        output: "mm:coke_oven_controller",
        id: "coke_oven_controller",
      },
      {
        inputs: ["mm:coke_oven_filler", "create:andesite_funnel"],
        output: "mm:coke_oven_item_output",
        id: "coke_oven_item_output",
      },
      {
        inputs: ["mm:coke_oven_filler", "create:brass_funnel"],
        output: "mm:coke_oven_item_input",
        id: "coke_oven_item_input",
      },
      {
        inputs: ["mm:coke_oven_filler", "create:fluid_valve"],
        output: "mm:coke_oven_fluid_output",
        id: "coke_oven_fluid_output",
      },

      // Fuel Mixer

      {
        inputs: ["tfmg:steel_casing", "create:mechanical_pump"],
        output: "mm:fuel_mixer_fluid_input",
        id: "fuel_mixer_fluid_output",
      },
      {
        inputs: ["tfmg:steel_casing", "create:fluid_valve"],
        output: "mm:fuel_mixer_fluid_output",
        id: "fuel_mixer_fluid_output",
      },
      {
        inputs: ["tfmg:steel_casing", "create_new_age:electrical_connector"],
        output: "mm:fuel_mixer_energy_input",
        id: "fuel_mixer_energy_input",
      },
    ];

    shapelessRecipes.forEach((recipe) => {
      event
        .shapeless(recipe.output, recipe.inputs)
        .id(`kubejs:minecraft/shapeless/${recipe.id}`);
    });
  });
})();
