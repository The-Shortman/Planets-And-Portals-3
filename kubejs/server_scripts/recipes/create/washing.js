(function createSplashingRecipes() {
  ServerEvents.recipes((event) => {
    const splashingRecipes = [
      {
        input: "planetsandportals:lavaberries",
        outputs: "planetsandportals:soaked_lavaberries",
        id: "soaked_lavaberries",
      },
      {
        input: "planetsandportals:rose_quartz_dust",
        outputs: "create:rose_quartz",
        id: "rose_quartz",
      },
    ];

    splashingRecipes.forEach((recipe) => {
      event.recipes.create
        .splashing(recipe.outputs, recipe.input)
        .id(`kubejs:create/splashing/${recipe.id}`);
    });
  });
})();
