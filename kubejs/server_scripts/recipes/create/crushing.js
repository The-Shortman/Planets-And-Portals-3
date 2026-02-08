(function createCrushingRecipes() {
  ServerEvents.recipes((event) => {
    const crushingRecipes = [
      {
        input: "minecraft:coal",
        output: ["mekanism:dust_coal"],
        id: "coal_dust",
      },
      {
        input: "minecraft:raw_iron",
        output: [Item.of("mekanism:dirty_dust_iron").withChance(0.5)],
        id: "dirty_iron_dust_from_raw",
      },
      {
        input: "create:crushed_raw_iron",
        output: [Item.of("mekanism:dirty_dust_iron", 2)],
        id: "dirty_iron_dust_from_crushed",
      },
      {
        input: "minecraft:raw_gold",
        output: [Item.of("mekanism:dirty_dust_gold").withChance(0.5)],
        id: "dirty_gold_dust_from_raw",
      },
      {
        input: "create:crushed_raw_gold",
        output: [Item.of("mekanism:dirty_dust_gold", 2)],
        id: "dirty_gold_dust_from_crushed",
      },
      {
        input: "minecraft:raw_copper",
        output: [Item.of("mekanism:dirty_dust_copper").withChance(0.5)],
        id: "dirty_copper_dust_from_raw",
      },
      {
        input: "create:crushed_raw_copper",
        output: [Item.of("mekanism:dirty_dust_copper", 2)],
        id: "dirty_copper_dust_from_crushed",
      },
      {
        input: "create:raw_zinc",
        output: [Item.of("planetsandportals:dirty_zinc_dust").withChance(0.5)],
        id: "dirty_zinc_dust_from_raw",
      },
      {
        input: "create:crushed_raw_zinc",
        output: [Item.of("planetsandportals:dirty_zinc_dust", 2)],
        id: "dirty_zinc_dust_from_crushed",
      },
      {
        input: "ppfmg:slag_block",
        output: [Item.of("ppfmg:slag", 9)],
        id: "slag_from_slag_block",
      },
      {
        input: "ppfmg:slag_bricks",
        output: [Item.of("ppfmg:slag", 9)],
        id: "slag_from_slag_bricks",
      },
      {
        input: "ppfmg:coal_coke",
        output: "ppfmg:coal_coke_dust",
        id: "coal_coke_dust",
      },
      {
        input: "create:limestone",
        output: Item.of("ppfmg:limesand", 2),
        id: "limesand",
      },
    ];

    crushingRecipes.forEach((recipe) => {
      event.recipes.create
        .crushing(recipe.output, recipe.input)
        .id(`kubejs:create/crushing/${recipe.id}`);
    });
  });
})();
