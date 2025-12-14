(function minecraftStonecuttingRecipes() {
  ServerEvents.recipes((event) => {
    const stonecuttingRecipes = [
      {
        input: "create:framed_glass",
        output: "create:horizontal_framed_glass",
      },
      {
        input: "create:framed_glass",
        output: "create:vertical_framed_glass",
      },
      {
        input: "create:framed_glass",
        output: "create:tiled_glass",
      },
      {
        input: "create:horizontal_framed_glass",
        output: "create:framed_glass",
      },
      {
        input: "create:horizontal_framed_glass",
        output: "create:vertical_framed_glass",
      },
      {
        input: "create:horizontal_framed_glass",
        output: "create:tiled_glass",
      },
      {
        input: "create:vertical_framed_glass",
        output: "create:horizontal_framed_glass",
      },
      {
        input: "create:vertical_framed_glass",
        output: "create:framed_glass",
      },
      {
        input: "create:vertical_framed_glass",
        output: "create:tiled_glass",
      },
      {
        input: "create:tiled_glass",
        output: "create:horizontal_framed_glass",
      },
      {
        input: "create:tiled_glass",
        output: "create:vertical_framed_glass",
      },
      {
        input: "create:tiled_glass",
        output: "create:framed_glass",
      },
    ];

    stonecuttingRecipes.forEach((recipe) => {
      event.stonecutting(recipe.output, recipe.input);
    });
  });
})();
