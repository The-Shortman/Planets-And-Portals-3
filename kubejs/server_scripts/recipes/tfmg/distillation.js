(function tfmgDistillationRecipes() {
  ServerEvents.recipes((event) => {
    const distillationRecipes = [];

    distillationRecipes.forEach((recipe) => {
      event
        .custom({
          type: "tfmg:distillation",
          ingredients: [recipe.input],
          results: recipe.output,
        })
        .id(`kubejs:tfmg/distillation/${recipe.id}`);
    });
  });
})();
