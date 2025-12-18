(function createNewAgeEnergisingRecipes() {
  ServerEvents.recipes((event) => {
    const energisingRecipes = [
      {
        input: "tfmg:steel_ingot",
        output: "planetsandportals:steel_electrode",
        energy: 5000,
        id: "steel_electrode",
      },
    ];

    energisingRecipes.forEach((recipe) => {
      event
        .custom({
          type: "create_new_age:energising",
          energy_needed: recipe.energy,
          ingredients: [{ item: recipe.input }],
          results: [{ item: recipe.output }],
        })
        .id(`kubejs:create_new_age/energising/${recipe.id}`);
    });
  });
})();
