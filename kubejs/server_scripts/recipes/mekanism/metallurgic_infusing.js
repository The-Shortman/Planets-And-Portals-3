(function mekanismMetallurgicInfusingRecipes() {
  ServerEvents.recipes((event) => {
    const metallurgicInfusingRecipes = [
      //TODO: add metallurgic infusing recipes
    ];

    metallurgicInfusingRecipes.forEach((recipe) => {
      event
        .custom({
          type: "mekanism:metallurgic_infusing",
          chemicalInput: { amount: recipe.chemicalVol, tag: recipe.chemical },
          itemInput: {
            amount: recipe.inputVol,
            ingredient: { item: recipe.input },
          },
          output: { count: recipe.outputVol, item: recipe.output },
        })
        .id(`kubejs:mekanism/metallurgic_infusing/${recipe.id}`);
    });
  });
})();
