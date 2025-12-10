(function mmSteelFurnaceRecipes() {
  const { BUCKET, BLOCK, INGOT, NUGGET } = global.fluids;

  // STRUCTURE:

  MMEvents.createStructures((event) => {
    event
      .create("mm:steel_furnace_structure")
      .controllerId("mm:steel_furnace_controller")
      .name("Steel Furnace")
      .layout((a) => {
        a.layer([" A ", "AEA", " A "])
          .layer(["BAB", "A A", "BAB"])
          .layer(["BAB", "A A", "BAB"])
          .layer(["BOB", "IAI", "BCB"])
          .key("A", {
            block: "tfmg:heavy_machinery_casing",
          })
          .key("B", {
            block: "tfmg:steel_casing",
          })
          .key("E", {
            port: "mm:steel_furnace_energy",
            input: true,
          })
          .key("I", {
            port: "mm:steel_furnace_item",
            input: true,
          })
          .key("O", {
            port: "mm:steel_furnace_fluid",
            input: false,
          });
      });
  });

  // RECIPES:

  MMEvents.createProcesses((event) => {
    const steelFurnaceRecipes = [
      {
        id: "mm:steel_furnace_steel",
        time: 150,
        input: "tfmg:blasting_mixture",
        inputCount: 1,
        fuel: "tfmg:coal_coke_dust",
        fuelCount: 3,
        power: 20,
        output: "tfmg:molten_steel",
        outputAmount: 112,
      },
      {
        id: "mm:steel_furnace_desh",
        time: 200,
        input: "planetsandportals:crushed_raw_desh",
        inputCount: 3,
        fuel: "mekanism:dust_osmium",
        fuelCount: 1,
        power: 20,
        output: "planetsandportals:molten_deshmium",
        outputAmount: 112,
      },
      {
        id: "mm:steel_furnace_osmium",
        time: 200,
        input: "create:crushed_raw_osmium",
        inputCount: 3,
        fuel: "planetsandportals:desh_dust",
        fuelCount: 1,
        power: 20,
        output: "planetsandportals:molten_osmish",
        outputAmount: 112,
      },
    ];

    steelFurnaceRecipes.forEach((recipe) => {
      event
        .create(recipe.id)
        .structureId("mm:steel_furnace_structure")
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
