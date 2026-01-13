(function vintageimprovementsHammeringRecipes() {
  ServerEvents.recipes((event) => {
    const hammeringRecipes = [
      {
        input: "tfmg:steel_block",
        output: "tfmg:heavy_plate",
        loops: 4,
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
