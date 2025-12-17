(function createMillingRecipes() {
  ServerEvents.recipes((event) => {
    const millingRecipes = [
      {
        input: "minecraft:raw_copper",
        output: "create:crushed_raw_copper",
        id: "raw_copper",
      },
      {
        input: "minecraft:raw_iron",
        output: "create:crushed_raw_iron",
        id: "raw_iron",
      },
      {
        input: "create:raw_zinc",
        output: "create:crushed_raw_zinc",
        id: "raw_zinc",
      },
      {
        input: "minecraft:raw_gold",
        output: "create:crushed_raw_gold",
        id: "raw_gold",
      },
      {
        input: "minecraft:andesite",
        output: "planetsandportals:andesite_dust",
        id: "andesite",
      },
    ];

    millingRecipes.forEach((recipe) => {
      event.recipes.create
        .milling(recipe.output, recipe.input)
        .id(`kubejs:create/milling/${recipe.id}`);
    });
  });
})();
