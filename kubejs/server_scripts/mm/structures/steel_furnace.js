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
})