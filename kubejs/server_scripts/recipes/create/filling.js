(function createFillingRecipes() {
  ServerEvents.recipes((event) => {
    const fillingRecipes = [
      {
        input: "minecraft:dead_bush",
        fluid: {
          fluid: "minecraft:lava",
          amount: 1000,
        },
        output: "regions_unexplored:dorcel",
        id: "dorcel_from_dead_bush",
      },
    ];

    fillingRecipes.forEach((recipe) => {
      event.recipes.create
        .filling(recipe.output, [recipe.fluid, recipe.input])
        .id(`kubejs:create/filling/${recipe.id}`);
    });
  });
})();
