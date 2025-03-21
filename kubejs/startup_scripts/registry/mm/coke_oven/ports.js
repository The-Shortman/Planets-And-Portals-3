MMEvents.registerPorts(event => {
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
});