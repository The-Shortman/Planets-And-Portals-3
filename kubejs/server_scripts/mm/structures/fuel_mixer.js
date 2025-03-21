MMEvents.createStructures(event => {
    event.create("mm:fuel_mixer_structure")
        .controllerId("mm:fuel_mixer_controller")
        .name("Rocket Fuel Mixer")
        .layout(a => {
            a.layer([
                "AEA",
                "ABA",
                "AAA"
            ]).layer([
                "D D",
                " B ",
                "D D"
            ]).layer([
                "AOA",
                "ABA",
                "ICI"
            ]).key("A", {
                block: "tfmg:steel_casing"
            }).key("B", {
                block: "tfmg:steel_fluid_tank"
            }).key("D", {
                block: "tfmg:industrial_pipe"
            }).key("E", {
                port: "mm:fuel_mixer_energy",
                input: true
            }).key("I", {
                port: "mm:fuel_mixer_fluid",
                input: true
            }).key("O", {
                port: "mm:fuel_mixer_fluid",
                input: false
            })
        });
})