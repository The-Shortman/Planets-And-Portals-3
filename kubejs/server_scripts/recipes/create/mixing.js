(function createMixingRecipes() {
  const { BUCKET, BLOCK, INGOT, NUGGET } = global.fluids;
  ServerEvents.recipes((event) => {
    const mixingRecipes = [
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
        inputs: [
          Item.of("mekanism:dust_quartz", 1),
          Item.of("minecraft:redstone", 3),
        ],
        outputs: Item.of("planetsandportals:rose_quartz_dust", 4),
        id: "rose_quartz_dust",
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
