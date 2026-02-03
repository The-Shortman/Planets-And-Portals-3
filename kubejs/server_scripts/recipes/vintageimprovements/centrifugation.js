(function vintageimprovementsCentrifugationRecipes() {
  ServerEvents.recipes((event) => {
    const { BUCKET, BOTTLE, BLOCK, INGOT, NUGGET } = global.fluids;

    const centrifugationRecipes = [
      {
        input: { fluid: "tfmg:naphtha", amount: 20 },
        output: [
          { fluid: "tfmg:ethylene", amount: 10 },
          { fluid: "tfmg:propylene", amount: 10 },
        ],
        time: 10,
        minRPM: 128,
        id: "ethylene_and_propylene",
      },
    ];

    centrifugationRecipes.forEach((recipe) => {
      event.recipes.vintageimprovements
        .centrifugation(recipe.output, recipe.input)
        .processingTime(recipe.time ?? 100)
        .minimalRPM(recipe.minRPM ?? 64)
        .id(`kubejs:vintageimprovements/centrifugation/${recipe.id}`);
    });
  });
})();
