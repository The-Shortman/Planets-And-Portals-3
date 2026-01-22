(function createEmptyingRecipes() {
  const { BUCKET, BLOCK, INGOT, NUGGET } = global.fluids;

  ServerEvents.recipes((event) => {
    const emptyingRecipes = [
      {
        input: "create:pulp",
        output: [
          "planetsandportals:dried_pulp",
          { fluid: "minecraft:water", amount: 100 },
        ],
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
