(function createCompactingRecipes() {
  const { BUCKET, BLOCK, INGOT, NUGGET } = global.fluids;

  ServerEvents.recipes((event) => {
    const compactingRecipes = [
      {
        input: "minecraft:nether_wart",
        output: { fluid: "planetsandportals:wart_juice", amount: 100 },
        heat: "heated",
        id: "wart_juice",
      },
      {
        input: [
          { fluid: "planetsandportals:wart_juice", amount: BUCKET / 2 },
          { fluid: "create:honey", amount: 50 },
        ],
        output: Item.of("planetsandportals:sticky_wart", 5),
        id: "sticky_wart",
      },
      {
        input: "planetsandportals:stony_wart",
        output: { fluid: "minecraft:lava", amount: BUCKET / 2 },
        heat: "heated",
        id: "lava_from_stony_wart",
      },
      {
        input: { fluid: "minecraft:lava", amount: BUCKET },
        output: "minecraft:andesite",
        id: "andesite_from_lava",
      },
      {
        input: ["create:empty_blaze_burner", "mobsandfamiliars:mossie"],
        output: "create:blaze_burner",
        heat: "heated",
        id: "blaze_burner_from_mossie",
      },
    ];

    compactingRecipes.forEach((recipe) => {
      // kube throws a fit if you give heatRequirement an empty value unlike in 1.18.2
      if (recipe.heat != null) {
        event.recipes.create
          .compacting(recipe.output, recipe.input)
          .heatRequirement(recipe.heat)
          .id(`kubejs:create/compacting/${recipe.id}`);
      } else {
        event.recipes.create
          .compacting(recipe.output, recipe.input)
          .id(`kubejs:create/compacting/${recipe.id}`);
      }
    });
  });
})();
