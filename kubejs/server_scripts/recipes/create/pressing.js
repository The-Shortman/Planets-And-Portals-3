(function createPressingRecipes() {
  ServerEvents.recipes((event) => {
    const pressingRecipes = [
      {
        input: "mobsandfamiliars:plump_mossie",
        output: "mobsandfamiliars:flattened_mossie",
        id: "flattened_mossie",
      },
      {
        input: "ppfmg:cast_iron_ingot",
        output: "ppfmg:cast_iron_sheet",
        id: "cast_iron_sheet",
      },
    ];

    pressingRecipes.forEach((recipe) => {
      event.recipes.create
        .pressing(recipe.output, recipe.input)
        .id(`kubejs:create/pressing/${recipe.id}`);
    });
  });
})();
