(function createSandpaperPolishingRecipes() {
  ServerEvents.recipes((event) => {
    const sandpaperPolishingRecipes = [
      {
        input: "createoreexcavation:raw_diamond",
        output: "minecraft:diamond",
        id: "raw_diamond",
      },
    ];

    sandpaperPolishingRecipes.forEach((recipe) => {
      event.recipes.create
        .sandpaper_polishing(recipe.output, recipe.input)
        .id(`kubejs:create/sandpaper_polishing/${recipe.id}`);
    });
  });
})();
