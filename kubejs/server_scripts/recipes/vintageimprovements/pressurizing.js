(function vintageimprovementsPressurizingRecipes() {
  ServerEvents.recipes((event) => {
    const { BUCKET, BLOCK, INGOT, NUGGET } = global.fluids;
    /**
     * Ok this is a weird one so it needs some documentation.
     * There are two odd values, secondaryFluidInput and secondaryFluidOutput.
     * These only take integers and they depend on recipe input and recipe output respectively.
     * The integer you put in these refer to the order of items in the list of the input/output.
     *
     * For example:
     * event.recipes.vintageimprovements
     *   .pressurizing("minecraft:obsidian", [{ fluid: "minecraft:water", amount: 1000 }, { fluid: "minecraft:lava", amount: 1000 }])
     *
     * If secondaryFluidInput = 0, Water will be treated as the secondary input.
     * If secondaryFluidInput = 1, the recipe will treat Lava as the secondary input.
     *
     * Because these fields cannot take a null value it is difficult to build a helper function for this recipe.
     *
     * Syntax can be found on the wiki: https://kubejs.com/wiki/addons/vintage-kubejs#pressurizing
     */
    //TODO: Make this less painful to build recipes for

    const vintageRecipe = event.recipes.vintageimprovements;
  });
})();
