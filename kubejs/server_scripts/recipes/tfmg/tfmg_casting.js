(function tfmgCastingRecipes() {
  ServerEvents.recipes((event) => {
    const castingRecipes = [
      {
        inputFluid: "planetsandportals:molten_deshmium",
        time: 300,
        ingotOutput: "ad_astra:desh_ingot",
        blockOutput: "ad_astra:desh_block",
      },
      {
        inputFluid: "planetsandportals:molten_osmish",
        time: 300,
        ingotOutput: "mekanism:ingot_osmium",
        blockOutput: "mekanism:block_osmium",
      },
    ];

    castingRecipes.forEach((recipe) => {
      event.custom({
        type: "tfmg:casting",
        ingredients: [{ fluid: recipe.inputFluid, amount: 1 }],
        processingTime: recipe.time,
        results: [
          { count: 1, item: recipe.ingotOutput },
          { count: 1, item: recipe.blockOutput },
        ],
      });
    });
  });
})();
