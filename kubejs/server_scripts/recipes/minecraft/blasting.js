(function minecraftBlastingRecipes() {
  ServerEvents.recipes((event) => {
    const blastingRecipes = [
      {
        input: "planetsandportals:crushed_raw_ostrum",
        output: "ad_astra:ostrum_ingot",
        id: "ostrum_ingot_from_crushed_ore",
      },
      {
        input: "planetsandportals:crushed_raw_calorite",
        output: "ad_astra:calorite_ingot",
        id: "calorite_ingot_from_crushed_ore",
      },
      {
        input: "planetsandportals:brass_mixture",
        output: "create:brass_ingot",
        id: "brass_ingot_from_mixture",
      },
    ];

    blastingRecipes.forEach((recipe) => {
      event
        .blasting(recipe.output, recipe.input)
        .id(`kubejs:minecraft/blasting/${recipe.id}`);
    });
  });
})();
