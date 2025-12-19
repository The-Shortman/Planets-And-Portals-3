(function createSplashingRecipes() {
  ServerEvents.recipes((event) => {
    const splashingRecipes = [
      {
        input: "planetsandportals:lavaberries",
        output: "planetsandportals:soaked_lavaberries",
        id: "soaked_lavaberries",
      },
    ];

    splashingRecipes.forEach((recipe) => {
      event.recipes.create
        .splashing(recipe.outputs, recipe.input)
        .id(`kubejs:create/splashing/${recipe.id}`);
    });
  });
})();
