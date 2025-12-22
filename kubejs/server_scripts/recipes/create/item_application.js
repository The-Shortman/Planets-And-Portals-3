(function createItemApplicationRecipes() {
  ServerEvents.recipes((event) => {
    const itemApplicationRecipes = [
      {
        block: "minecraft:sand",
        item: "minecraft:egg",
        output: "planetsandportals:sand_encased_egg",
        id: "sand_encased_egg",
      },
    ];

    itemApplicationRecipes.forEach((recipe) => {
      event
        .custom({
          type: "create:item_application",
          ingredients: [recipe.block, recipe.item],
          results: [{ item: recipe.output }],
        })
        .id(`kubejs:create/item_application/${recipe.id}`);
    });
  });
})();
