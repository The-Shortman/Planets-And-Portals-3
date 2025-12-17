(function createCuttingRecipes() {
  ServerEvents.recipes((event) => {
    const cuttingRecipes = [
      {
        input: "create:andesite_alloy",
        output: "8x create:shaft",
        id: "shaft_from_andesite_alloy",
      },
    ];

    cuttingRecipes.forEach((recipe) => {
      event.recipes.create
        .cutting(recipe.output, recipe.input)
        .id(`kubejs:create/cutting/${recipe.id}`);
    });
  });
})();
