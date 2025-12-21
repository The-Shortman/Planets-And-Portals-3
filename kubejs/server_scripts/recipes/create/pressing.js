(function createPressingRecipes() {
  ServerEvents.recipes((event) => {
    const pressingRecipes = [
      {
        input: "mobsandfamiliars:plump_mossie",
        output: "mobsandfamiliars:flattened_mossie",
        id: "flattened_mossie",
      },
    ];

    pressingRecipes.forEach((recipe) => {
      event.recipes.create
        .pressing(recipe.output, recipe.input)
        .id(`kubejs:create/pressing/${recipe.id}`);
    });
  });
})();
