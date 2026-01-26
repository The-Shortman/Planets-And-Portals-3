(function vintageimprovementsVibratingRecipes() {
  ServerEvents.recipes((event) => {
    const vibratingRecipes = [];

    vibratingRecipes.forEach((recipe) => {
      event.recipes.vintageimprovements
        .vibrating(recipe.output, recipe.input)
        .processingTime(recipe.time ?? 20)
        .id(`kubejs:vintageimprovements/vibrating/${recipe.id}`);
    });
  });
}); //! Uninvoked IIFE
