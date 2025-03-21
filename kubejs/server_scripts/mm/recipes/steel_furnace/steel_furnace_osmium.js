MMEvents.createProcesses(event => {
    event.create("mm:steel_furnace_osmium")
        .structureId("mm:steel_furnace_structure")
        .ticks(200)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "planetsandportals:desh_dust",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "create:crushed_raw_osmium",
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
                fluid: "planetsandportals:molten_osmish",
                amount: 112
            }
        });
})