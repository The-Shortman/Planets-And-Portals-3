(function createEmptyingRecipes() {
  const { BUCKET, BLOCK, INGOT, NUGGET } = global.fluids;

  ServerEvents.recipes((event) => {
    const emptyingRecipes = [
      {
        input: "create:pulp",
        output: "planetsandportals:dried_pulp",
        id: "dried_pulp",
      },
    ];

    emptyingRecipes.forEach((recipe) => {
      event.recipes.create
        .emptying(recipe.output, recipe.input)
        .id(`kubejs:create/emptying/${recipe.id}`);
    });
  });
})();
