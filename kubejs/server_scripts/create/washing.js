ServerEvents.recipes((e) => {
	[
		{
            input: 'create:crushed_raw_copper',
            outputs: [
                '9x create:copper_nugget',
                Item.of('minecraft:clay_ball').withChance(0.2)
            ]
        },
        {
            input: 'create:crushed_raw_zinc',
            outputs: [
                '9x create:zinc_nugget',
                Item.of('minecraft:gunpowder').withChance(0.2)
            ]
        },
        {
            input: 'planetsandportals:crushed_raw_ostrum',
            outputs: [
                '9x ad_astra:ostrum_nugget',
                Item.of('ad_astra:ice_shard').withChance(0.1)
            ]
        },
        {
            input: 'planetsandportals:crushed_raw_calorite',
            outputs: [
                '9x ad_astra:calorite_nugget',
                Item.of('ae2:certus_quartz_dust').withChance(0.1)
            ]
        }
	].forEach((r) => {
		e.recipes.create.splashing(r.outputs, r.input);
	});
});