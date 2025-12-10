(function minecraftBlastingRecipes() {
  ServerEvents.recipes((event) => {
    const blastingRecipes = [
      {
        input: "planetsandportals:crushed_raw_ostrum",
        output: "ad_astra:ostrum_ingot",
      },
      {
        input: "planetsandportals:crushed_raw_calorite",
        output: "ad_astra:calorite_ingot",
      },
      {
        input: "planetsandportals:brass_mixture",
        output: "create:brass_ingot",
      },
    ];

    blastingRecipes.forEach((recipe) => {
      event.blasting(recipe.output, recipe.input);
    });
  });
})();
