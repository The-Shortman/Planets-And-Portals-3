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
      {
        input: "ppfmg:rubber_sheet",
        output: "ppfmg:synthetic_leather",
        id: "synthetic_leather",
      },
    ];

    pressingRecipes.forEach((recipe) => {
      event.recipes.create
        .pressing(recipe.output, recipe.input)
        .id(`kubejs:create/pressing/${recipe.id}`);
    });
  });
})();
