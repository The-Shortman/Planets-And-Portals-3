MMEvents.createProcesses(event => {
    event.create("mm:coke_oven_coke")
        .structureId("mm:coke_oven_structure")
        .ticks(800)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "minecraft:coal",
                count: 1
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "tfmg:coal_coke",
                count: 1
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:fluid",
                fluid: "tfmg:creosote",
                amount: 250
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:fluid",
                fluid: "tfmg:carbon_dioxide",
                amount: 1500
            }
        });
})