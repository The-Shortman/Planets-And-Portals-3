MMEvents.registerControllers(event => {
    event.create("coke_oven_controller")
        .name("Coke Oven Controller")
        .type("mm:machine");
    
    event.create("blast_furnace_controller")
        .name("Blast Furnace Controller")
        .type("mm:machine");

    event.create("steel_furnace_controller")
        .name("Steel Furnace Controller")
        .type("mm:machine");

    event.create("fuel_mixer_controller")
        .name("Fuel Mixer Controller")
        .type("mm:machine");
});

MMEvents.registerPorts(event => {

    // Coke oven

    event.create("coke_oven_item")
        .name("Coke Oven Item")
        .controllerId("mm:coke_oven_controller")
        .config("mm:item", c => {
            c.rows(1)
                .columns(1)
        });

    event.create("coke_oven_fluid")
        .name("Coke Oven Byproduct")
        .controllerId("mm:coke_oven_controller")
        .config("mm:fluid", c => {
            c.rows(1)
            .columns(2)
            .slotCapacity(2000)
        });

    // Blast furnace

    event.create("blast_furnace_item")
        .name("Blast Furnace Item")
        .controllerId("mm:blast_furnace_controller")
        .config("mm:item", c => {
            c.rows(1)
                .columns(1)
        });
    
    event.create("blast_furnace_fluid")
        .name("Blast Furnace Fluid")
        .controllerId("mm:blast_furnace_controller")
        .config("mm:fluid", c => {
            c.rows(1)
            .columns(1)
            .slotCapacity(2000)
        });

    // Steel furnace

    event.create("steel_furnace_item")
        .name("Steel Furnace Item")
        .controllerId("mm:steel_furnace_controller")
        .config("mm:item", c => {
            c.rows(1)
                .columns(1)
        });
    
    event.create("steel_furnace_fluid")
        .name("Steel Furnace Fluid")
        .controllerId("mm:steel_furnace_controller")
        .config("mm:fluid", c => {
            c.rows(1)
            .columns(1)
            .slotCapacity(2000)
        });

    event.create("steel_furnace_energy")
        .name("Steel Furnace Energy")
        .controllerId("mm:steel_furnace_controller")
        .config("mm:energy", c => {
            c.capacity(10000)
                .maxReceive(1000)
                .maxExtract(1000)
        });

    // Fuel mixer

    event.create("fuel_mixer_fluid")
        .name("Fuel Mixer Fluid")
        .controllerId("mm:fuel_mixer_controller")
        .config("mm:fluid", c => {
            c.rows(1)
                .columns(1)
                .slotCapacity(1000)
        });

    event.create("fuel_mixer_energy")
        .name("Fuel Mixer Energy")
        .controllerId("mm:fuel_mixer_controller")
        .config("mm:energy", c => {
            c.capacity(10000)
                .maxReceive(1000)
                .maxExtract(1000)
        });
});