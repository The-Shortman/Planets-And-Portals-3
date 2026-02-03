(function vintageimprovementsTurningRecipes() {
  ServerEvents.recipes((event) => {
    const turningRecipes = [
      {
        input: "ad_astra:steel_block",
        output: "vintageimprovements:convex_curving_head",
        id: "convex_curving_head",
      },
      {
        input: "ad_astra:steel_block",
        output: "vintageimprovements:concave_curving_head",
        id: "concave_curving_head",
      },
      {
        input: "ad_astra:steel_block",
        output: "vintageimprovements:v_shaped_curving_head",
        id: "v_shaped_curving_head",
      },
      {
        input: "ad_astra:steel_block",
        output: "vintageimprovements:w_shaped_curving_head",
        id: "w_shaped_curving_head",
      },
      {
        input: "ad_astra:steel_block",
        output: "planetsandportals:fan_curving_head",
        id: "fan_curving_head",
      },
    ];

    turningRecipes.forEach((recipe) => {
      event.recipes.vintageimprovements
        .turning(recipe.output, recipe.input)
        .id(`kubejs:vintageimprovements/turning/${recipe.id}`);
    });
  });
})();
