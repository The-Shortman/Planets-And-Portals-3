ServerEvents.recipes((event) => {
    [
        {
            input: "minecraft:dead_bush",
            fluid: {
                fluid: "minecraft:lava",
                amount: 1000
            },
            output: "regions_unexplored:dorcel"
        }
    ].forEach((recipe) => {
        event.recipes.create.filling(recipe.output, [recipe.fluid, recipe.input])
    });
  })