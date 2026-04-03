(function createItemApplicationRecipes() {
  ServerEvents.recipes((event) => {
    const itemApplicationRecipes = [
      {
        block: "minecraft:sand",
        item: "minecraft:egg",
        output: "planetsandportals:sand_encased_egg",
        id: "sand_encased_egg",
      },
      {
        block: "create:brass_casing",
        item: "ppfmg:cast_iron_ingot",
        output: "planetsandportals:incomplete_coke_oven_t1",
        id: "incomplete_coke_oven_t1",
      },
      {
        block: "ppfmg:hardened_planks",
        item: "ad_astra:steel_ingot",
        output: "ppfmg:steel_casing",
        id: "steel_casing",
      },
      {
        block: "ppfmg:steel_casing",
        item: "ppfmg:heavy_plate",
        output: "ppfmg:heavy_machinery_casing",
        id: "heavy_machinery_casing",
      },
      {
        block: "planetsandportals:incomplete_coke_oven_t1",
        item: "ppfmg:cast_iron_ingot",
        output: "planetsandportals:incomplete_coke_oven_t2",
        id: "incomplete_coke_oven_t2",
      },
      {
        block: "planetsandportals:incomplete_coke_oven_t2",
        item: "ppfmg:cast_iron_ingot",
        output: "planetsandportals:incomplete_coke_oven_t3",
        id: "incomplete_coke_oven_t3",
      },
      {
        block: "planetsandportals:incomplete_coke_oven_t3",
        item: "ppfmg:cast_iron_ingot",
        output: "mbd2:coke_oven_filler",
        id: "coke_oven_filler",
      },
    ];

    itemApplicationRecipes.forEach((recipe) => {
      event
        .custom({
          type: "create:item_application",
          ingredients: [recipe.block, recipe.item],
          results: [{ item: recipe.output }],
        })
        .id(`kubejs:create/item_application/${recipe.id}`);
    });
  });
})();
