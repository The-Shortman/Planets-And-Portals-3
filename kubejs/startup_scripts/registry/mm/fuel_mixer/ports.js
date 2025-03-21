MMEvents.registerPorts(event => {
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