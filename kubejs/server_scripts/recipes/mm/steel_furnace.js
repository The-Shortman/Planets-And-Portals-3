MMEvents.createStructures(event => {
  event.create("mm:steel_furnace_structure")
        .controllerId("mm:steel_furnace_controller")
        .name("Steel Furnace")
        .layout(a => {
            a.layer([
                " A ",
                "AEA",
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
            ]).key("A", {
                block: "tfmg:heavy_machinery_casing"
            }).key("B", {
                block: "tfmg:steel_casing"
            }).key("E", {
                port: "mm:steel_furnace_energy",
                input: true
            }).key("I", {
                port: "mm:steel_furnace_item",
                input: true
            }).key("O", {
                port: "mm:steel_furnace_fluid",
                input: false
            });
        });
});

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
});