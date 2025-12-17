(function mekanismEnrichingRecipes() {
  ServerEvents.recipes((event) => {
    const enrichingRecipes = [
      {
        input: "minecraft:redstone",
        inputVol: 8,
        output: "mekanism:enriched_redstone",
        outputVol: 1,
        id: "enriched_redstone",
      },
    ];

    enrichingRecipes.forEach((recipe) => {
      event
        .custom({
          type: "mekanism:enriching",
          input: {
            amount: recipe.inputVol,
            ingredient: { item: recipe.input },
          },
          output: { count: recipe.outputVol, item: recipe.output },
        })
        .id(`kubejs:mekanism/enriching/${recipe.id}`);
    });
  });
})();
