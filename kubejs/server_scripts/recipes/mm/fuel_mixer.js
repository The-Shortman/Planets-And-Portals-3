(function mmFuelMixerRecipes() {
  const { BUCKET, BLOCK, INGOT, NUGGET } = global.fluids;

  // STRUCTURE:

  MMEvents.createStructures((event) => {
    event
      .create("mm:fuel_mixer_structure")
      .controllerId("mm:fuel_mixer_controller")
      .name("Rocket Fuel Mixer")
      .layout((a) => {
        a.layer(["AEA", "ABA", "AAA"])
          .layer(["D D", " B ", "D D"])
          .layer(["AOA", "ABA", "ICI"])
          .key("A", {
            block: "tfmg:steel_casing",
          })
          .key("B", {
            block: "tfmg:steel_fluid_tank",
          })
          .key("D", {
            block: "tfmg:industrial_pipe",
          })
          .key("E", {
            port: "mm:fuel_mixer_energy",
            input: true,
          })
          .key("I", {
            port: "mm:fuel_mixer_fluid",
            input: true,
          })
          .key("O", {
            port: "mm:fuel_mixer_fluid",
            input: false,
          });
      });
  });

  // RECIPES:

  MMEvents.createProcesses((event) => {
    const fuelMixerRecipes = [
      {
        id: "mm:fuel_mixer_fuel",
        time: 100,
        input1: "tfmg:kerosene",
        input1Amount: 500,
        input2: "tfmg:gasoline",
        input2Amount: 500,
        power: 20,
        output: "planetsandportals:hydrocarbon_fuel",
        outputAmount: 1000,
      },
    ];

    fuelMixerRecipes.forEach((recipe) => {
      event
        .create(recipe.id)
        .structureId("mm:fuel_mixer_structure")
        .ticks(recipe.time)
        .input({
          type: "mm:input/consume",
          ingredient: {
            type: "mm:fluid",
            fluid: recipe.input1,
            amount: recipe.input1Amount,
          },
        })
        .input({
          type: "mm:input/consume",
          ingredient: {
            type: "mm:fluid",
            fluid: recipe.input2,
            amount: recipe.input2Amount,
          },
        })
        .input({
          type: "mm:input/consume",
          per_tick: true,
          ingredient: {
            type: "mm:energy",
            amount: recipe.power,
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
