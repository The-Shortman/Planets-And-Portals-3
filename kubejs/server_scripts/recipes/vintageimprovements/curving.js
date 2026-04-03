(function vintageimprovementsCurvingRecipes() {
  ServerEvents.recipes((event) => {
    const convex = "vintageimprovements:convex_curving_head";
    const concave = "vintageimprovements:concave_curving_head";
    const wShaped = "vintageimprovements:w_shaped_curving_head";
    const vShaped = "vintageimprovements:v_shaped_curving_head";
    const cylinder = "planetsandportals:fan_curving_head";

    const curvingRecipes = [
      {
        input: "ppfmg:heavy_plate",
        output: "ppfmg:concave_heavy_plate",
        head: convex,
        id: "concave_heavy_plate",
      },
      {
        input: "ppfmg:heavy_plate",
        output: "ad_astra:fan",
        head: cylinder,
        id: "steel_fan",
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
