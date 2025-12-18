(function minecraftSmokingRecipes() {
  ServerEvents.recipes((event) => {
    const smokingRecipes = [
      {
        input: "minecraft:cactus",
        output: "minecraft:green_dye",
        id: "green_dye_from_cactus",
      },
      {
        input: "regions_unexplored:barrel_cactus",
        output: "minecraft:green_dye",
        id: "green_dye_from_barrel_cactus",
      },
      {
        input: "regions_unexplored:saguaro_cactus",
        output: "minecraft:green_dye",
        id: "green_dye_from_saguaro_cactus",
      },
      {
        input: "minecraft:sea_pickle",
        output: "minecraft:lime_dye",
        id: "lime_dye_from_sea_pickle",
      },
      {
        input: "minecraft:chorus_fruit",
        output: "minecraft:popped_chorus_fruit",
        id: "popped_chorus_fruit",
      },
      {
        input: "minecraft:moss_block",
        output: "quark:moss_paste",
        id: "moss_paste",
      },
    ];

    smokingRecipes.forEach((recipe) => {
      event
        .smoking(recipe.output, recipe.input)
        .id(`kubejs:minecraft/smoking/${recipe.id}`);
    });
  });
})();
