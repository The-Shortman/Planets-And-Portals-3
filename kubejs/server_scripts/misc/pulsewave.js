// Controls the pulse wave sent out by the ore vein scanner

global.onLivingSwapItemsEvent = function(event) {
    const player = event.getEntity();
    const hand = player.getMainHandItem();
} // unused event to detect when a player swaps main hand item

function pulse(event) {
    const {server, player, item} = event;

    if (!player.cooldowns.isOnCooldown(item)) {
        player.cooldowns.addCooldown(item, 20);
        for (let r = 0; r < 360; r++) {
            let rad = (r * 0.017453)
            let x = Math.cos(rad)
            let z = Math.sin(rad)
            server.runCommandSilent(`/execute at ${player.uuid} run particle minecraft:snowflake ~ ~1 ~ ${x} 0 ${z} 1 0`)
        }
        server.runCommandSilent(`/execute at _Shortman run playsound minecraft:block.large_amethyst_bud.place player @a ~ ~ ~ 100 0.1`)
        server.runCommandSilent(`/execute at _Shortman run playsound exposure:item.camera.flash player @a ~ ~ ~ 100 0.1`)
    }
}

// This is super inefficient because it runs ALL THE TIME, if anybody can make this more efficient I would really appreciate it :3

PlayerEvents.tick(event => {

    if(event.player.age % 20 != 0) {
        return;
    }

    const {player} = event
    if(player.mainHandItem && player.mainHandItem.id == "createoreexcavation:vein_finder") {
        player.runCommandSilent(`scale set pehkui:reach 0 ${player.uuid}`);
    } else {
        player.runCommandSilent(`scale reset pehkui:reach ${player.uuid}`);
    }
});

ItemEvents.rightClicked("createoreexcavation:vein_finder", (event) => {
    pulse(event)
})

/* BlockEvents.rightClicked((event => {
    if (player.getMainHandItem().id == "createoreexcavation:vein_finder") {
        pulse(event)
    }
}))
    */