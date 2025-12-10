(function mmBlastFurnaceRecipes() {
  const { BUCKET, BLOCK, INGOT, NUGGET } = global.fluids;

  // STRUCTURE:

  MMEvents.createStructures((event) => {
    event
      .create("mm:blast_furnace_structure")
      .controllerId("mm:blast_furnace_controller")
      .name("Blast Furnace")
      .layout((a) => {
        a.layer([" A ", "A A", " A "])
          .layer(["BAB", "A A", "BAB"])
          .layer(["BAB", "A A", "BAB"])
          .layer(["BOB", "IAI", "BCB"])
          .key("A", {
            block: "tfmg:fireproof_bricks",
          })
          .key("B", {
            block: "tfmg:fireproof_brick_reinforcement",
          })
          .key("I", {
            port: "mm:blast_furnace_item",
            input: true,
          })
          .key("O", {
            port: "mm:blast_furnace_fluid",
            input: false,
          });
      });
  });

  // RECIPES:

  MMEvents.createProcesses((event) => {
    const blastFurnaceRecipes = [
      {
        id: "mm:blast_furnace_steel",
        time: 200,
        input: "tfmg:blasting_mixture",
        inputCount: 1,
        fuel: "tfmg:coal_coke_dust",
        fuelCount: 3,
        output: "tfmg:molten_steel",
        outputAmount: 112,
      },
    ];

    blastFurnaceRecipes.forEach((recipe) => {
      event
        .create(recipe.id)
        .structureId("mm:blast_furnace_structure")
        .ticks(recipe.time)
        .input({
          type: "mm:input/consume",
          ingredient: {
            type: "mm:item",
            item: recipe.input,
            count: recipe.inputCount,
          },
        })
        .input({
          type: "mm:input/consume",
          ingredient: {
            type: "mm:item",
            item: recipe.fuel,
            count: recipe.fuelCount,
          },
        })
        .output({
          type: "mm:output/simple",
          ingredient: {
            type: "mm:fluid",
            fluid: recipe.output,
            amount: recipe.outputAmount,
          },
        });
    });
  });
})();
