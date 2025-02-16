PlayerEvents.inventoryChanged(event => {
    const {player} = event

    [ // Cosmic resonator unlocking stuff
        {
            item: "epsilon",
            tier: "nether",
            message: "dimensional travel"
        },
        {
            item: "epsilon",
            tier: "nether",
            message: "dimensional travel"
        }
    ].forEach((item) => {
        if(!player.stages.has(item.stage) && player.mainHandItem && player.mainHandItem.id == `planetsandportals:cosmic_resonator_${item.item}`) {
            player.stages.add(item.stage)
            player.tell(`The Cosmic Resonator empowers you with ${item.message}, DEBUG ${item.stage}`)
        } 
    });
});

/* ServerEvents.recipes(event => {
    if (event.player.stages.has('')) {

    }
}); */