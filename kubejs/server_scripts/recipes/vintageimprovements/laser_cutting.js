(function vintageimprovementsLaserCuttingRecipes() {
  ServerEvents.recipes((event) => {
    const laserCuttingRecipes = [
      {
        input: "tfmg:heavy_plate",
        output: "ad_astra:rocket_fin",
        energy: 4000,
        chargeRate: 50,
        id: "rocket_fin",
      },
    ];

    laserCuttingRecipes.forEach((recipe) => {
      event.recipes.vintageimprovements
        .laser_cutting(recipe.output, recipe.input)
        .energyCost(recipe.energy)
        .maxChargeRate(recipe.chargeRate)
        .id(`kubejs:vintageimprovements/laser_cutting/${recipe.id}`);
    });
  });
})();
