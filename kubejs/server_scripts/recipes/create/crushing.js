(function createCrushingRecipes() {
  ServerEvents.recipes((event) => {
    const crushingRecipes = [
      {
        input: "minecraft:andesite",
        outputs: "planetsandportals:andesite_dust",
      },
      {
        input: "ad_astra:raw_desh",
        outputs: [
          "planetsandportals:crushed_raw_desh",
          Item.of("create:experience_nugget").withChance(0.75),
        ],
      },
      {
        input: "ad_astra:raw_ostrum",
        outputs: [
          "planetsandportals:crushed_raw_ostrum",
          Item.of("create:experience_nugget").withChance(0.75),
        ],
      },
      {
        input: "ad_astra:raw_calorite",
        outputs: [
          "planetsandportals:crushed_raw_calorite",
          Item.of("create:experience_nugget").withChance(0.75),
        ],
      },
      {
        input: "create:crushed_raw_osmium",
        outputs: [
          "mekanism:dust_osmium",
          Item.of("create:experience_nugget").withChance(0.75),
        ],
      },
      {
        input: "create:crushed_raw_lead",
        outputs: [
          "mekanism:dust_lead",
          Item.of("create:experience_nugget").withChance(0.75),
        ],
      },
      {
        input: "create:crushed_raw_uranium",
        outputs: [
          "mekanism:dust_uranium",
          Item.of("create:experience_nugget").withChance(0.75),
        ],
      },
      {
        input: "planetsandportals:crushed_raw_desh",
        outputs: "planetsandportals:desh_dust",
      },
    ];

    crushingRecipes.forEach((recipe) => {
      event.recipes.create.crushing(recipe.outputs, recipe.input);
    });
  });
})();
