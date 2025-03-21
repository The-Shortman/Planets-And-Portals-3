MMEvents.createProcesses(event => {
    event.create("mm:steel_furnace_steel")
        .structureId("mm:steel_furnace_structure")
        .ticks(150)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "tfmg:blasting_mixture",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "tfmg:coal_coke_dust",
                count: 3
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
                fluid: "tfmg:molten_steel",
                amount: 112
            }
        });
})