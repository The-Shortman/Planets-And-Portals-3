(function mmCokeOvenRecipes() {
  const { BUCKET, BLOCK, INGOT, NUGGET } = global.fluids;

  // STRUCTURE:

  MMEvents.createStructures((event) => {
    event
      .create("mm:coke_oven_structure")
      .controllerId("mm:coke_oven_controller")
      .name("Coke Oven")
      .layout((a) => {
        a.layer(["I", "A", "F"])
          .layer(["A", "A", "C"])
          .layer(["A", "A", "O"])
          .key("A", {
            block: "mm:coke_oven_filler",
          })
          .key("I", {
            port: "mm:coke_oven_item",
            input: true,
          })
          .key("O", {
            port: "mm:coke_oven_item",
            input: false,
          })
          .key("F", {
            port: "mm:coke_oven_fluid",
            input: false,
          });
      });
  });

  // RECIPES:

  MMEvents.createProcesses((event) => {
    const cokeOvenRecipes = [
      {
        id: "mm:coke_oven_coke",
        time: 800,
        input: "minecraft:coal",
        inputCount: 1,
        itemOutput: "tfmg:coal_coke",
        itemOutputCount: 1,
        fluidOutput: "tfmg:creosote",
        fluidOutputAmount: 250,
        exhaust: "tfmg:carbon_dioxide",
        exhaustAmount: 1500,
      },
    ];

    cokeOvenRecipes.forEach((recipe) => {
      event
        .create(recipe.id)
        .structureId("mm:coke_oven_structure")
        .ticks(recipe.time)
        .input({
          type: "mm:input/consume",
          ingredient: {
            type: "mm:item",
            item: recipe.input,
            count: recipe.inputCount,
          },
        })
        .output({
          type: "mm:output/simple",
          ingredient: {
            type: "mm:item",
            item: recipe.itemOutput,
            count: recipe.itemOutputCount,
          },
        })
        .output({
          type: "mm:output/simple",
          ingredient: {
            type: "mm:fluid",
            fluid: recipe.fluidOutput,
            amount: recipe.fluidOutputAmount,
          },
        })
        .output({
          type: "mm:output/simple",
          ingredient: {
            type: "mm:fluid",
            fluid: recipe.exhaust,
            amount: recipe.exhaustAmount,
          },
        });
    });
  });
})();
