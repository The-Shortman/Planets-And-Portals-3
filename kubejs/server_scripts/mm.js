MMEvents.createStructures(e => {
    e.create("mm:blast_furnace")
        .controllerId("mm:blast_furnace_controller")
        .name("Blast Furnace")
        .layout(a => {
            a.layer([
                "1O1",
                "I2I",
                "1C1"
            ]).layer([
                "121",
                "2 2",
                "121"
            ]).layer([
                "121",
                "2 2",
                "1O1"
            ]).layer([
                " 2 ",
                "2 2",
                " 2 "
            ]).key("1", {
                block: "tfmg:fireproof_brick_reinforcement"
            }).key("2", {
                block: "tfmg:fireproof_bricks"
            }).key("I", {
                port: "mm:blast_furnace_input",
                input: true
            }).key("O", {
                port: "mm:blast_furnace_output",
                input: false
            })
        })
});

MMEvents.createProcesses(e => {
    e.create("mm:blast_furnace/steel")
        .structureId("planetsandportals:blast_furnace")
        .ticks(200)
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
                amount: 3
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:fluid",
                fluid: "tfmg:molten_steel",
                amount: 112
            }
        })
})