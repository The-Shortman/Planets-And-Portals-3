ServerEvents.recipes((e) => {
	[
        {
            input: 'brewery:wooden_brewingstation',
            heldItem: 'minecraft:copper_block',
            output: 'brewery:copper_brewingstation',
			keepHeld: false
        },
        {
            input: 'brewery:silo_wood',
            heldItem: 'minecraft:copper_block',
            output: 'brewery:silo_copper',
			keepHeld: false
        },
	].forEach((r) => {
		if (r.keepHeld == true) {
			e.recipes.create.deploying(r.output, [r.input, r.heldItem]).keepHeldItem();
		} else {
			e.recipes.create.deploying(r.output, [r.input, r.heldItem]);
		}
	});
})