(function createCuttingRecipes() {
  ServerEvents.recipes((event) => {
    const cuttingRecipes = [
      {
        input: "create:andesite_alloy",
        output: "8x create:shaft",
      },
    ];

    cuttingRecipes.forEach((recipe) => {
      event.recipes.create.cutting(recipe.output, recipe.input);
    });
  });
})();
