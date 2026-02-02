(function createFillingRecipes() {
  const { BUCKET, BLOCK, INGOT, NUGGET } = global.fluids;

  ServerEvents.recipes((event) => {
    const fillingRecipes = [
      {
        input: "#planetsandportals:berries",
        fluid: { fluid: "minecraft:lava", amount: BUCKET / 2 },
        output: "planetsandportals:lavaberries",
      },
    ];

    fillingRecipes.forEach((recipe) => {
      event.recipes.create
        .filling(recipe.output, [recipe.fluid, recipe.input])
        .id(`kubejs:create/filling/${recipe.id}`);
    });
  });
})();
