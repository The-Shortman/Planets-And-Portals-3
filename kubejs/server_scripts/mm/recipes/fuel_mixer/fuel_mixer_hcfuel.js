MMEvents.createprocesses(event => {
    event.create("fuel_mixer_hcfuel")
        .structureId("mm:fuel_mixer_structure")
        .ticks(100)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "tfmg:kerosene",
                amount: 500
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "tfmg:gasoline",
                amount: 500
            }
        })
        .input({
            type: "mm:input/consume",
            per_tick: true,
            ingredient: {
                type: "mm:energy",
                amount: 20
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:fluid",
                fluid: "planetsandportals:hydrocarbon_fuel",
                amount: 1000
            }
        });
})