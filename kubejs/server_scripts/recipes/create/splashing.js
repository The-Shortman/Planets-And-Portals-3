(function createSplashingRecipes() {
  ServerEvents.recipes((event) => {
    const splashingRecipes = [
      {
        input: "planetsandportals:lavaberries",
        output: "planetsandportals:soaked_lavaberries",
        id: "soaked_lavaberries",
      },
      {
        input: "planetsandportals:rose_quartz_dust",
        output: "create:rose_quartz",
        id: "rose_quartz",
      },
      {
        input: "mekanism:dirty_dust_iron",
        output: "mekanism:dust_iron",
        id: "iron_dust_from_dirty_dust",
      },
      {
        input: "mekanism:dirty_dust_gold",
        output: "mekanism:dust_gold",
        id: "gold_dust_from_dirty_dust",
      },
      {
        input: "mekanism:dirty_dust_copper",
        output: "mekanism:dust_copper",
        id: "copper_dust_from_dirty_dust",
      },
      {
        input: "planetsandportals:dirty_zinc_dust",
        output: "planetsandportals:zinc_dust",
        id: "zinc_dust_from_dirty_dust",
      },
      {
        input: "minecraft:gravel",
        output: Item.of("minecraft:flint").withChance(0.25),
        id: "flint_from_gravel",
      },
    ];

    splashingRecipes.forEach((recipe) => {
      event.recipes.create
        .splashing(recipe.output, recipe.input)
        .id(`kubejs:create/splashing/${recipe.id}`);
    });
  });
})();
