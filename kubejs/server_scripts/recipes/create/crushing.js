(function createCrushingRecipes() {
  ServerEvents.recipes((event) => {
    const crushingRecipes = [
      {
        input: "minecraft:andesite",
        outputs: "planetsandportals:andesite_dust",
        id: "andesite",
      },
      {
        input: "ad_astra:raw_desh",
        outputs: [
          "planetsandportals:crushed_raw_desh",
          Item.of("create:experience_nugget").withChance(0.75),
        ],
        id: "raw_desh",
      },
      {
        input: "ad_astra:raw_ostrum",
        outputs: [
          "planetsandportals:crushed_raw_ostrum",
          Item.of("create:experience_nugget").withChance(0.75),
        ],
        id: "raw_ostrum",
      },
      {
        input: "ad_astra:raw_calorite",
        outputs: [
          "planetsandportals:crushed_raw_calorite",
          Item.of("create:experience_nugget").withChance(0.75),
        ],
        id: "raw_calorite",
      },
      {
        input: "create:crushed_raw_osmium",
        outputs: [
          "mekanism:dust_osmium",
          Item.of("create:experience_nugget").withChance(0.75),
        ],
        id: "crushed_raw_osmium",
      },
      {
        input: "create:crushed_raw_lead",
        outputs: [
          "mekanism:dust_lead",
          Item.of("create:experience_nugget").withChance(0.75),
        ],
        id: "crushed_raw_lead",
      },
      {
        input: "create:crushed_raw_uranium",
        outputs: [
          "mekanism:dust_uranium",
          Item.of("create:experience_nugget").withChance(0.75),
        ],
        id: "crushed_raw_uranium",
      },
      {
        input: "planetsandportals:crushed_raw_desh",
        outputs: "planetsandportals:desh_dust",
        id: "crushed_raw_desh",
      },
    ];

    crushingRecipes.forEach((recipe) => {
      event.recipes.create
        .crushing(recipe.outputs, recipe.input)
        .id(`kubejs:create/crushing/${recipe.id}`);
    });
  });
})();
