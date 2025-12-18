(function createSplashingRecipes() {
  ServerEvents.recipes((event) => {
    const splashingRecipes = [
      {
        input: "create:crushed_raw_copper",
        outputs: [
          "9x create:copper_nugget",
          Item.of("minecraft:clay_ball").withChance(0.2),
        ],
        id: "crushed_raw_copper",
      },
      {
        input: "planetsandportals:crushed_raw_ostrum",
        outputs: [
          "9x ad_astra:ostrum_nugget",
          Item.of("ad_astra:ice_shard").withChance(0.1),
        ],
        id: "crushed_raw_ostrum",
      },
      {
        input: "planetsandportals:crushed_raw_calorite",
        outputs: [
          "9x ad_astra:calorite_nugget",
          Item.of("ae2:certus_quartz_dust").withChance(0.1),
        ],
        id: "crushed_raw_calorite",
      },
    ];

    splashingRecipes.forEach((recipe) => {
      event.recipes.create
        .splashing(recipe.outputs, recipe.input)
        .id(`kubejs:create/splashing/${recipe.id}`);
    });
  });
})();
