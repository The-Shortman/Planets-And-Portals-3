(function recipeReplacements() {
  ServerEvents.recipes((event) => {
    const inputReplacements = [
      {
        filter: { input: "croptopia:cheese" },
        remove: "croptopia:cheese",
        replace: "#planetsandportals:cheeses",
      },
      {
        filter: { input: "ad_astra:cheese" },
        remove: "ad_astra:cheese",
        replace: "#planetsandportals:cheeses",
      },
      {
        filter: { input: "mekanism:dust_steel" },
        remove: "mekanism:dust_steel",
        replace: "tfmg:steel_ingot",
      },
      {
        filter: { mod: "create_new_age" },
        remove: "create:andesite_casing",
        replace: "tfmg:steel_casing",
      },
      {
        filter: { mod: "create_new_age" },
        remove: ["create:brass_casing", "create:andesite_alloy_block"],
        replace: "tfmg:heavy_machinery_casing",
      },
      {
        filter: { mod: "mekanism" },
        remove: "minecraft:iron_ingot",
        replace: "mekanism:ingot_osmium",
      },
      {
        filter: { input: "mekanism:sawdust" },
        remove: "mekanism:sawdust",
        replace: "create:cardboard",
      },
    ];

    const outputReplacements = [
      {
        filter: { output: "mekanism:sawdust" },
        remove: "mekanism:sawdust",
        replace: "create:cardboard",
      },
    ];

    inputReplacements.forEach((recipe) => {
      event.replaceInput(recipe.filter, recipe.remove, recipe.replace);
    });

    outputReplacements.forEach((recipe) => {
      event.replaceOutput(recipe.filter, recipe.remove, recipe.replace);
    });
  });
})();
