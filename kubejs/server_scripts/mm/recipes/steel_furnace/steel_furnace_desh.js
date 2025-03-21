MMEvents.createProcesses(event => {
    event.create("mm:steel_furnace_desh")
        .structureId("mm:steel_furnace_structure")
        .ticks(200)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "mekanism:dust_osmium",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "planetsandportals:crushed_raw_desh",
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
                fluid: "planetsandportals:molten_deshmium",
                amount: 112
            }
        });
})