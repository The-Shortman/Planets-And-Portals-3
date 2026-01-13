(function createMechanicalCraftingRecipes() {
  ServerEvents.recipes((event) => {
    const mechanicalCraftingRecipes = [
      {
        pattern: [" A BB", "ACCCD", "AA EF"],
        key: {
          A: "tfmg:steel_block",
          B: "vintageimprovements:cast_iron_spring",
          C: "#minecraft:logs",
          D: "tfmg:steel_casing",
          E: "create:precision_mechanism",
          F: "create:shaft",
        },
        output: "vintageimprovements:helve_hammer",
        id: "helve_hammer",
      },
      {
        pattern: [" ABC ", "DEEFD", "  BC "],
        key: {
          A: "create:precision_mechanism",
          B: "vintageimprovements:cast_iron_spring",
          C: "tfmg:steel_ingot",
          D: "create:shaft",
          E: "tfmg:heavy_machinery_casing",
          F: "tfmg:cast_iron_block",
        },
        output: "vintageimprovements:lathe",
        id: "lathe",
      },
      {
        pattern: [" ABA ", "ACBCA", "BBDBB", "ACBCA", " ABA "],
        key: {
          A: "vintageimprovements:steel_spring",
          B: "#minecraft:logs",
          C: "tfmg:steel_casing",
          D: "tfmg:steel_mechanism",
        },
        output: "vintageimprovements:centrifuge",
        id: "centrifuge",
      },
      {
        pattern: [" ABA ", "AACAA", "BDEDB", "AAFAA", " AFA "],
        key: {
          A: "tfmg:cast_iron_sheet",
          B: "create:copper_casing",
          C: "create:brass_casing",
          D: "create:precision_mechanism",
          E: "create:mechanical_bearing",
          F: "create:fluid_pipe",
        },
        output: "createoreexcavation:drilling_machine",
        id: "drilling_machine",
      },
    ];

    mechanicalCraftingRecipes.forEach((recipe) => {
      event.recipes.create
        .mechanical_crafting(recipe.output, recipe.pattern, recipe.key)
        .id(`kubejs:create/mechanical_crafting/${recipe.id}`);
    });
  });
})();
