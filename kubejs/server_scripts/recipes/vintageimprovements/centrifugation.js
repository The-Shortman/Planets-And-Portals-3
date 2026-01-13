(function vintageimprovementsCentrifugationRecipes() {
  ServerEvents.recipes((event) => {
    const { BUCKET, BOTTLE, BLOCK, INGOT, NUGGET } = global.fluids;

    const centrifugationRecipes = [];

    centrifugationRecipes.forEach((recipe) => {
      event.recipes.vintageimprovements
        .centrifugation(recipe.output, recipe.input)
        .processingTime(recipe.time ?? 100)
        .minimalRPM(recipe.minRPM ?? 64)
        .id(`kubejs:vintageimprovements/centrifugation/${recipe.id}`);
    });
  });
})();
