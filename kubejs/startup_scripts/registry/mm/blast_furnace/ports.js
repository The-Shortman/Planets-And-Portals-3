MMEvents.registerPorts(event => {
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
});