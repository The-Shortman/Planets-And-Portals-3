(function vintageimprovementsLaserCuttingRecipes() {
  ServerEvents.recipes((event) => {
    const laserCuttingRecipes = [
      {
        input: "ppfmg:heavy_plate",
        output: "ad_astra:rocket_fin",
        energy: 4000,
        chargeRate: 50,
        id: "rocket_fin",
      },
      {
        input: "create:iron_sheet",
        output: "planetsandportals:complex_iron_parts",
        energy: 2000,
        chargeRate: 50,
        id: "complex_iron_parts",
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
