(function minecraftStonecuttingRecipes() {
  ServerEvents.recipes((event) => {
    const stonecuttingRecipes = [
      {
        input: "create:framed_glass",
        output: "create:horizontal_framed_glass",
        id: "horizontal_framed_glass_from_framed_glass",
      },
      {
        input: "create:framed_glass",
        output: "create:vertical_framed_glass",
        id: "vertical_framed_glass_from_framed_glass",
      },
      {
        input: "create:framed_glass",
        output: "create:tiled_glass",
        id: "tiled_glass_from_framed_glass",
      },
      {
        input: "create:horizontal_framed_glass",
        output: "create:framed_glass",
        id: "framed_glass_from_horizontal_framed_glass",
      },
      {
        input: "create:horizontal_framed_glass",
        output: "create:vertical_framed_glass",
        id: "vertical_framed_glass_from_horizontal_framed_glass",
      },
      {
        input: "create:horizontal_framed_glass",
        output: "create:tiled_glass",
        id: "tiled_glass_from_horizontal_framed_glass",
      },
      {
        input: "create:vertical_framed_glass",
        output: "create:horizontal_framed_glass",
        id: "horizontal_framed_glass_from_vertical_framed_glass",
      },
      {
        input: "create:vertical_framed_glass",
        output: "create:framed_glass",
        id: "framed_glass_from_vertical_framed_glass",
      },
      {
        input: "create:vertical_framed_glass",
        output: "create:tiled_glass",
        id: "tiled_glass_from_vertical_framed_glass",
      },
      {
        input: "create:tiled_glass",
        output: "create:horizontal_framed_glass",
        id: "horizontal_framed_glass_from_tiled_glass",
      },
      {
        input: "create:tiled_glass",
        output: "create:vertical_framed_glass",
        id: "vertical_framed_glass_from_tiled_glass",
      },
      {
        input: "create:tiled_glass",
        output: "create:framed_glass",
        id: "framed_glass_from_tiled_glass",
      },
    ];

    const manualStonecuttingRecipes = [
      {
        input: "create:andesite_alloy",
        output: "create:andesite_table_cloth",
        id: Item.of("andesite_table_cloth", 2),
      },
      {
        input: "create:andesite_alloy",
        output: "create:andesite_ladder",
        id: Item.of("andesite_ladder", 2),
      },
      {
        input: "create:andesite_alloy",
        output: "create:andesite_bars",
        id: Item.of("andesite_bars", 4),
      },
      {
        input: "create:andesite_alloy",
        output: "create:andesite_scaffolding",
        id: Item.of("andesite_scaffolding", 2),
      },
    ];

    stonecuttingRecipes.forEach((recipe) => {
      event
        .stonecutting(recipe.output, recipe.input)
        .id(`kubejs:minecraft/stonecutting/${recipe.id}`);
    });

    manualStonecuttingRecipes.forEach((recipe) => {
      event
        .stonecutting(recipe.output, recipe.input)
        .id(`kubejs:minecraft/stonecutting/${recipe.id}_manual_only`);
    });
  });
})();
