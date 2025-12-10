(function createMillingRecipes() {
  ServerEvents.recipes((event) => {
    const millingRecipes = [
      {
        input: "minecraft:raw_copper",
        output: "create:crushed_raw_copper",
      },
      {
        input: "minecraft:raw_iron",
        output: "create:crushed_raw_iron",
      },
      {
        input: "create:raw_zinc",
        output: "create:crushed_raw_zinc",
      },
      {
        input: "minecraft:andesite",
        output: "planetsandportals:andesite_dust",
      },
    ];

    millingRecipes.forEach((recipe) => {
      event.recipes.create.milling(recipe.output, recipe.input);
    });
  });
})();
