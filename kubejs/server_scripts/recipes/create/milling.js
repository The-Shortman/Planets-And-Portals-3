(function createMillingRecipes() {
  ServerEvents.recipes((event) => {
    const millingRecipes = [
      {
        input: "minecraft:raw_copper",
        output: "create:crushed_raw_copper",
        id: "crushed_raw_copper",
      },
      {
        input: "minecraft:raw_iron",
        output: "create:crushed_raw_iron",
        id: "crushed_raw_iron",
      },
      {
        input: "create:raw_zinc",
        output: "create:crushed_raw_zinc",
        id: "crushed_raw_zinc",
      },
      {
        input: "minecraft:raw_gold",
        output: "create:crushed_raw_gold",
        id: "crushed_raw_gold",
      },
      {
        input: "minecraft:andesite",
        output: "planetsandportals:andesite_dust",
        id: "andesite_dust",
      },
      {
        input: "regions_unexplored:redstone_bulb",
        output: Item.of("minecraft:redstone", 4),
        id: "redstone_dust_from_redstone_bulb",
      },
      {
        input: "minecraft:quartz",
        output: "mekanism:dust_quartz",
        id: "quartz_dust",
      },
    ];

    millingRecipes.forEach((recipe) => {
      event.recipes.create
        .milling(recipe.output, recipe.input)
        .id(`kubejs:create/milling/${recipe.id}`);
    });
  });
})();
