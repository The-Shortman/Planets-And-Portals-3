(function createMixingRecipes() {
  const { BUCKET, BLOCK, INGOT, NUGGET } = global.fluids;
  ServerEvents.recipes((event) => {
    const mixingRecipes = [
      {
        input: ["planetsandportals:grout", "planetsandportals:andesite_dust"],
        output: "2x create:andesite_alloy",
        id: "andesite_alloy_efficient",
      },
      {
        input: [
          "create:crushed_raw_zinc",
          Item.of("create:crushed_raw_copper", 2),
        ],
        output: Item.of("planetsandportals:brass_mixture", 3),
        id: "brass_mixture",
      },
      {
        input: [
          Item.of("mekanism:dust_quartz", 1),
          Item.of("minecraft:redstone", 3),
        ],
        output: Item.of("planetsandportals:rose_quartz_dust", 4),
        id: "rose_quartz_dust",
      },
      {
        input: [
          { fluid: "planetsandportals:wart_juice", amount: BUCKET / 2 },
          Item.of("minecraft:cobblestone", 8),
        ],
        output: "planetsandportals:stony_wart",
        heat: "heated",
        id: "stony_wart",
      },
      {
        input: "create:blaze_burner",
        output: [
          { fluid: "planetsandportals:blaze_blood", amount: BUCKET / 2 },
          "create:empty_blaze_burner",
        ],
        heat: "heated",
        id: "blaze_blood",
      },
      {
        input: ["minecraft:iron_ingot", Item.of("mekanism:dust_coal", 2)],
        output: "tfmg:cast_iron_ingot",
        heat: "heated",
        id: "cast_iron_ingot",
      },
    ];

    mixingRecipes.forEach((recipe) => {
      // kube throws a fit if you give heatRequirement an empty value unlike in 1.18.2
      if (recipe.heat != null) {
        event.recipes.create
          .mixing(recipe.output, recipe.input)
          .heatRequirement(recipe.heat)
          .processingTime(recipe.time ?? 100)
          .id(`kubejs:create/mixing/${recipe.id}`);
      } else {
        event.recipes.create
          .mixing(recipe.output, recipe.input)
          .processingTime(recipe.time ?? 100)
          .id(`kubejs:create/mixing/${recipe.id}`);
      }
    });
  });
})();
