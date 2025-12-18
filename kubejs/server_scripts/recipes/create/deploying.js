(function createDeployingRecipes() {
  ServerEvents.recipes((event) => {
    const deployingRecipes = [
      {
        input: "create:railway_casing",
        heldItem: "tfmg:cast_iron_ingot",
        output: "mm:coke_oven_filler",
        keepHeld: false,
        id: "coke_oven_filler",
      },
      {
        input: "brewery:wooden_brewingstation",
        heldItem: "minecraft:copper_block",
        output: "brewery:copper_brewingstation",
        keepHeld: false,
        id: "copper_brewingstation",
      },
      {
        input: "brewery:silo_wood",
        heldItem: "minecraft:copper_block",
        output: "brewery:silo_copper",
        keepHeld: false,
        id: "silo_copper",
      },
    ];

    deployingRecipes.forEach((recipe) => {
      if (recipe.keepHeld == true) {
        event.recipes.create
          .deploying(recipe.output, [recipe.input, recipe.heldItem])
          .keepHeldItem()
          .id(`kubejs:create/deploying/${recipe.id}`);
      } else {
        event.recipes.create
          .deploying(recipe.output, [recipe.input, recipe.heldItem])
          .id(`kubejs:create/deploying/${recipe.id}`);
      }
    });
  });
})();
