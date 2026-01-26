(function tfmgDistillationRecipes() {
  ServerEvents.recipes((event) => {
    const distillationRecipes = [
      {
        input: { fluid: "tfmg:crude_oil", amount: 150 },
        output: [
          { fluid: "tfmg:heavy_oil", amount: 50 },
          { fluid: "tfmg:naphtha", amount: 20 },
          { fluid: "tfmg:gasoline", amount: 40 },
          { fluid: "tfmg:lpg", amount: 40 },
        ],
        id: "crude_oil",
      },
      {
        input: { fluid: "tfmg:heavy_oil", amount: 100 },
        output: [
          { fluid: "tfmg:lubrication_oil", amount: 30 },
          { fluid: "tfmg:diesel", amount: 50 },
          { fluid: "tfmg:kerosene", amount: 20 },
        ],
        id: "heavy_oil",
      },
    ];

    distillationRecipes.forEach((recipe) => {
      event
        .custom({
          type: "tfmg:distillation",
          ingredients: [recipe.input],
          results: recipe.output,
        })
        .id(`kubejs:tfmg/distillation/${recipe.id}`);
    });
  });
})();
