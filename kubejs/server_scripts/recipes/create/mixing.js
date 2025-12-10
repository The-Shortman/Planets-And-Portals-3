(function createMixingRecipes() {
  ServerEvents.recipes((event) => {
    const mixingRecipes = [
      {
        inputs: [
          {
            fluid: "minecraft:water",
            amount: 1000,
          },
          "create:powdered_obsidian",
        ],
        outputs: {
          fluid: "planetsandportals:obsidian_solution",
          amount: 1000,
        },
      },
      {
        inputs: ["planetsandportals:grout", "planetsandportals:andesite_dust"],
        outputs: "2x create:andesite_alloy",
      },
      {
        inputs: ["create:zinc_ingot", "2x minecraft:copper_ingot"],
        outputs: "planetsandportals:brass_mixture",
      },
      {
        outputs: ["mekanism:ingot_lead"],
        inputs: ["mekanism:dust_lead"],
        heat: "heated",
      },
      {
        outputs: ["mekanism:dust_refined_obsidian"],
        inputs: ["mekanism:dust_obsidian", "ad_astra:ostrum_nugget"],
        heat: "heated",
      },
      {
        outputs: ["mekanism:ingot_uranium"],
        inputs: ["mekanism:dust_uranium"],
        heat: "heated",
      },
      {
        outputs: ["mekanism:alloy_infused"],
        inputs: ["create:andesite_alloy", "mekanism:enriched_redstone"],
        heat: "heated",
      },
    ];

    mixingRecipes.forEach((recipe) => {
      event.recipes.create
        .mixing(recipe.outputs, recipe.inputs)
        .heatRequirement(recipe.heat ?? "")
        .processingTime(recipe.time ?? 100);
    });
  });
})();
