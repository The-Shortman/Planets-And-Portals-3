(function tfmgCastingRecipes() {
  const { BUCKET, BOTTLE, BLOCK, INGOT, NUGGET } = global.fluids;

  ServerEvents.recipes((event) => {
    const castingRecipes = [
      {
        input: { fluid: "tfmg:molten_slag", amount: BOTTLE },
      },
    ];

    castingRecipes.forEach((recipe) => {
      event
        .custom({
          type: "tfmg:casting",
          ingredients: [recipe.input],
          processingTime: recipe.time,
          results: [recipe.output],
        })
        .id(`kubejs:tfmg/casting/${recipe.id}`);
    });
  });
})();
