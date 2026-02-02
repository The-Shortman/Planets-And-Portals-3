(function createCuttingRecipes() {
  ServerEvents.recipes((event) => {
    const cuttingRecipes = [
      {
        input: "create:andesite_alloy",
        output: Item.of("create:shaft", 8),
        id: "shaft_from_andesite_alloy",
      },
      {
        input: "mobsandfamiliars:flattened_mossie",
        output: Item.of("mobsandfamiliars:mossie", 2),
        id: "mossie_from_flat_mossie",
      },
      {
        input: "planetsandportals:salt_bucket",
        output: [Item.of("mekanism:salt", 8), "minecraft:bucket"],
        id: "salt_from_bucket",
      },
    ];

    cuttingRecipes.forEach((recipe) => {
      event.recipes.create
        .cutting(recipe.output, recipe.input)
        .id(`kubejs:create/cutting/${recipe.id}`);
    });
  });
})();
