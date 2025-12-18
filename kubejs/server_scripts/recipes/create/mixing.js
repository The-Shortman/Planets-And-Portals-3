(function createMixingRecipes() {
  const { BUCKET, BLOCK, INGOT, NUGGET } = global.fluids;
  ServerEvents.recipes((event) => {
    const mixingRecipes = [
      {
        inputs: [
          { fluid: "minecraft:water", amount: BUCKET },
          "create:powdered_obsidian",
        ],
        outputs: {
          fluid: "planetsandportals:obsidian_solution",
          amount: BUCKET,
        },
        id: "obsidian_solution",
      },
      {
        inputs: ["planetsandportals:grout", "planetsandportals:andesite_dust"],
        outputs: "2x create:andesite_alloy",
        id: "andesite_alloy_efficient",
      },
      {
        inputs: [
          "create:crushed_raw_zinc",
          Item.of("create:crushed_raw_copper", 2),
        ],
        outputs: Item.of("planetsandportals:brass_mixture", 3),
        id: "brass_mixture",
      },
      {
        outputs: ["mekanism:ingot_lead"],
        inputs: ["mekanism:dust_lead"],
        heat: "heated",
        id: "lead_ingot_from_dust",
      },
      {
        outputs: ["mekanism:dust_refined_obsidian"],
        inputs: ["mekanism:dust_obsidian", "ad_astra:ostrum_nugget"],
        heat: "heated",
        id: "refined_obsidian_dust",
      },
      {
        outputs: ["mekanism:ingot_uranium"],
        inputs: ["mekanism:dust_uranium"],
        heat: "heated",
        id: "uranium_ingot_from_dust",
      },
      {
        outputs: ["mekanism:alloy_infused"],
        inputs: ["create:andesite_alloy", "mekanism:enriched_redstone"],
        heat: "heated",
        id: "infused_alloy",
      },
    ];

    mixingRecipes.forEach((recipe) => {
      // kube throws a fit if you give heatRequirement an empty value unlike in 1.18.2
      if (recipe.heat != null) {
        event.recipes.create
          .mixing(recipe.outputs, recipe.inputs)
          .heatRequirement(recipe.heat)
          .processingTime(recipe.time ?? 100)
          .id(`kubejs:create/mixing/${recipe.id}`);
      } else {
        event.recipes.create
          .mixing(recipe.outputs, recipe.inputs)
          .processingTime(recipe.time ?? 100)
          .id(`kubejs:create/mixing/${recipe.id}`);
      }
    });
  });
})();
