(function createSandpaperPolishingRecipes() {
  ServerEvents.recipes((event) => {
    const sandpaperPolishingRecipes = [
      {
        input: "planetsandportals:rough_diamond",
        output: "minecraft:diamond",
      },
    ];

    sandpaperPolishingRecipes.forEach((recipe) => {
      event.recipes.create.sandpaper_polishing(recipe.output, recipe.input);
    });
  });
})();
