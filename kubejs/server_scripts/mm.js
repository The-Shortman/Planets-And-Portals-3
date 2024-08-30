MMEvents.createStructures(event => {
    event.create("mm:blast_furnace_structure")
        .controllerId("mm:blast_furnace")
        .name("Blast Furnace")
        .layout(a => {
            a.layer([
                " A ",
                "A A",
                " A "
                
            ]).layer([
                "BAB",
                "A A",
                "BAB"
            ]).layer([
                "BAB",
                "A A",
                "BAB"
            ]).layer([
                "BOB",
                "IAI",
                "BCB"
            ]).key("B", {
                block: "tfmg:fireproof_brick_reinforcement"
            }).key("A", {
                block: "tfmg:fireproof_bricks"
            }).key("I", {
                port: "mm:blast_furnace_item",
                input: true
            }).key("O", {
                port: "mm:blast_furnace_fluid",
                input: false
            });
        });
});

MMEvents.createProcesses(event => {
    event.create("mm:blast_furnace_steel")
        .structureId("mm:blast_furnace_structure")
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
                count: 3
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

    event.create("mm:blast_furnace_desh")
        .structureId("mm:blast_furnace_structure")
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
                item: "planetsandportals:crushed_desh_ore",
                count: 3
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

    event.create("mm:blast_furnace_osmium")
        .structureId("mm:blast_furnace_structure")
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
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:fluid",
                fluid: "planetsandportals:molten_osmish",
                amount: 112
            }
        });
});