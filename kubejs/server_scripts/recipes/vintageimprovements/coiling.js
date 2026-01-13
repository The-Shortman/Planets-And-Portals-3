(function vintageimprovementsCoilingRecipes() {
  ServerEvents.recipes((event) => {
    const coilingRecipes = [
      {
        input: "vintageimprovements:cast_iron_rod",
        output: "vintageimprovements:cast_iron_spring",
        springColor: "3d3f42",
        id: "cast_iron_spring",
      },
      {
        input: "vintageimprovements:steel_rod",
        output: "vintageimprovements:steel_spring",
        springColor: "ffffff",
        id: "steel_spring",
      },
    ];

    coilingRecipes.forEach((recipe) => {
      event.recipes.vintageimprovements
        .coiling(recipe.output, recipe.input)
        .springColor(recipe.springColor ?? "ffffff")
        .id(`kubejs:vintageimprovements/coiling/${recipe.id}`);
    });
  });
})();
