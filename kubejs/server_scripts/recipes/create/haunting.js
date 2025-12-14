(function createHauntingRecipes() {
  ServerEvents.recipes((event) => {
    const hauntingRecipes = [
      {
        input: "minecraft:glass",
        output: "create:framed_glass",
      },
      {
        input: "minecraft:charcoal",
        output: "minecraft:coal",
      },
      {
        input: "minecraft:blackstone",
        output: "minecraft:netherrack",
      },
    ];

    hauntingRecipes.forEach((recipe) => {
      event.recipes.create.haunting(recipe.output, recipe.input);
    });
  });
})();
