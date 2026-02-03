(function vintageimprovementsHammeringRecipes() {
  ServerEvents.recipes((event) => {
    const hammeringRecipes = [
      {
        input: "ad_astra:steel_block",
        output: "tfmg:heavy_plate",
        loops: 1,
      },
    ];

    hammeringRecipes.forEach((recipe) => {
      event.recipes
        .vintageimprovementsHammering(recipe.output, recipe.input)
        .hammerBlows(recipe.loops ?? 1)
        .anvilBlock(recipe.anvil ?? "minecraft:anvil")
        .id(`kubejs:vintageimprovements/hammering/${recipe.id}`);
    });
  });
})();
