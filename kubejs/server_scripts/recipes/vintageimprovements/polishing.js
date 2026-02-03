(function vintageimprovementsPolishingRecipes() {
  ServerEvents.recipes((event) => {
    const lowSpeed = 1; // 16 RPM or less
    const medSpeed = 2; // 16 - 64 RPM
    const highSpeed = 3; // 64+ RPM

    const polishingRecipes = [];

    polishingRecipes.forEach((recipe) => {
      event.recipes.vintageimprovements
        .polishing(recipe.output, recipe.input)
        .processingTime(recipe.time ?? 100)
        .speedLimits(recipe.speed)
        .id(`kubejs:vintageimprovements/polishing/${recipe.id}`);
    });
  });
})();
