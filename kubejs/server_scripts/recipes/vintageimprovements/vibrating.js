(function vintageimprovementsVibratingRecipes() {
  ServerEvents.recipes((event) => {
    const vibratingRecipes = [
      {
        input: "planetsandportals:dried_pulp",
        output: "create:cardboard",
        time: 10,
      },
    ];

    vibratingRecipes.forEach((recipe) => {
      event.recipes.vintageimprovements
        .vibrating(recipe.output, recipe.input)
        .processingTime(recipe.time ?? 20)
        .id(`kubejs:vintageimprovements/vibrating/${recipe.id}`);
    });
  });
})();
