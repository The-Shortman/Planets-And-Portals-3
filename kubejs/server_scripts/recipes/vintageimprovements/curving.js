(function vintageimprovementsCurvingRecipes() {
  ServerEvents.recipes((event) => {
    const convex = "vintageimprovements:convex_curving_head";
    const concave = "vintageimprovements:concave_curving_head";
    const wShaped = "vintageimprovements:w_shaped_curving_head";
    const vShaped = "vintageimprovements:v_shaped_curving_head";

    const curvingRecipes = [
      {
        input: "tfmg:heavy_plate",
        output: "planetsandportals:concave_heavy_plate",
      },
    ];

    curvingRecipes.forEach((recipe) => {
      event.recipes.vintageimprovements
        .curving(recipe.output, recipe.input)
        .head(recipe.head)
        .id(`kubejs:vintageimprovements/curving/${recipe.id}`);
    });
  });
})();
