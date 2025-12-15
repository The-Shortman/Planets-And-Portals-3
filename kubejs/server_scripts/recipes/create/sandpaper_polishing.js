(function createSandpaperPolishingRecipes() {
  ServerEvents.recipes((event) => {
    const sandpaperPolishingRecipes = [];

    sandpaperPolishingRecipes.forEach((recipe) => {
      event.recipes.create.sandpaper_polishing(recipe.output, recipe.input);
    });
  });
})();
