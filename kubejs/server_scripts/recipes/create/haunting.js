(function createHauntingRecipes() {
  ServerEvents.recipes((event) => {
    const hauntingRecipes = [
      {
        input: "minecraft:glass",
        output: "create:framed_glass",
        id: "framed_glass",
      },
      {
        input: "minecraft:charcoal",
        output: "minecraft:coal",
        id: "coal",
      },
      {
        input: "minecraft:blackstone",
        output: "minecraft:netherrack",
        id: "netherrack",
      },
      {
        input: "planetsandportals:soaked_lavaberries",
        output: "planetsandportals:infernal_portaberries",
        id: "infernal_portaberries",
      },
    ];

    hauntingRecipes.forEach((recipe) => {
      event.recipes.create
        .haunting(recipe.output, recipe.input)
        .id(`kubejs:create/haunting/${recipe.id}`);
    });
  });
})();
