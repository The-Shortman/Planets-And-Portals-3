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
        replace: "ad_astra:steel_ingot",
      },
      {
        filter: { mod: "create_new_age" },
        remove: "create:andesite_casing",
        replace: "ppfmg:steel_casing",
      },
      {
        filter: { mod: "create_new_age" },
        remove: ["create:brass_casing", "create:andesite_alloy_block"],
        replace: "ppfmg:heavy_machinery_casing",
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
      {
        filter: { input: "#forge:plates/iron" },
        remove: "#forge:plates/iron",
        replace: "create:iron_sheet",
      },
      {
        filter: { input: "#forge:storage_blocks/steel" },
        remove: "#forge:storage_blocks/steel",
        replace: "ad_astra:steel_block",
      },
      {
        filter: { input: "#forge:ingots/steel" },
        remove: "#forge:ingots/steel",
        replace: "ad_astra:steel_ingot",
      },
      {
        filter: { input: "#forge:nuggets/steel" },
        remove: "#forge:ingots/steel",
        replace: "ad_astra:steel_ingot",
      },
      {
        filter: { input: "#forge:plates/steel" },
        remove: "#forge:plates/steel",
        replace: "ppfmg:heavy_plate",
      },
      {
        filter: { input: "#forge:plates/cast_iron" },
        remove: "#forge:plates/cast_iron",
        replace: "ppfmg:cast_iron_sheet",
      },
    ];

    const outputReplacements = [
      {
        filter: { output: "mekanism:sawdust" },
        remove: "mekanism:sawdust",
        replace: "create:cardboard",
      },
      {
        filter: { input: "#forge:plates/iron" },
        remove: "#forge:plates/iron",
        replace: "create:iron_sheet",
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
