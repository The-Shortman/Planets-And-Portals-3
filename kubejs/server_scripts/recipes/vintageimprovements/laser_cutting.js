(function vintageimprovementsLaserCuttingRecipes() {
  ServerEvents.recipes((event) => {
    const laserCuttingRecipes = [];

    laserCuttingRecipes.forEach((recipe) => {
      event.recipes.vintageimprovements
        .laser_cutting(recipe.output, recipe.input)
        .energyCost(recipe.energy)
        .maxChargeRate(recipe.chargeRate ?? recipe.energy / 10)
        .id(`kubejs:vintageimprovements/laser_cutting/${recipe.id}`);
    });
  });
});
