(function createHauntingRecipes() {
  ServerEvents.recipes((event) => {
    const hauntingRecipes = [
      {
        input: "minecraft:glass",
        output: "create:framed_glass",
        id: "glass",
      },
      {
        input: "minecraft:charcoal",
        output: "minecraft:coal",
        id: "charcoal",
      },
      {
        input: "minecraft:blackstone",
        output: "minecraft:netherrack",
        id: "blackstone",
      },
    ];

    hauntingRecipes.forEach((recipe) => {
      event.recipes.create
        .haunting(recipe.output, recipe.input)
        .id(`kubejs:create/haunting/${recipe.id}`);
    });
  });
})();
