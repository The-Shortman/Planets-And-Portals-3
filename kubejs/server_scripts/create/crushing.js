ServerEvents.recipes((e) => {
	[

		{
	    input: 'minecraft:dirt',
	    outputs: [
		    'minecraft:dirt',
		    'minecraft:dirt'
	    ]
		},
		
		{
            input: 'minecraft:raw_copper',
            outputs: [
                'create:crushed_raw_copper',
                Item.of('create:crushed_raw_copper').withChance(0.5),
                Item.of('create:crushed_raw_copper').withChance(0.05),
                Item.of('create:experience_nugget').withChance(0.75)
            ]
        },
        {
            input: 'minecraft:raw_zinc',
            outputs: [
                'create:crushed_raw_zinc',
                Item.of('create:crushed_raw_zinc').withChance(0.5),
                Item.of('create:crushed_raw_zinc').withChance(0.05),
                Item.of('create:experience_nugget').withChance(0.75)
            ]
        },
        {
            input: 'minecraft:andesite',
            outputs: 'planetsandportals:andesite_dust'
        },
        {
            input: 'ad_astra:raw_desh',
            outputs: [
                'planetsandportals:crushed_desh_ore',
                Item.of('create:experience_nugget').withChance(0.75)
            ]
        },
        {
            input: 'ad_astra:raw_ostrum',
            outputs: [
                'planetsandportals:crushed_ostrum_ore',
                Item.of('create:experience_nugget').withChance(0.75)
            ]
        },
        {
            input: 'ad_astra:raw_calorite',
            outputs: [
                'planetsandportals:crushed_calorite_ore',
                Item.of('create:experience_nugget').withChance(0.75)
            ]
        },
        {
            input: 'create:crushed_raw_osmium',
            outputs: [
                'mekanism:dust_osmium',
                Item.of('create:experience_nugget').withChance(0.75)
            ]
        },
        {
            input: 'create:crushed_raw_lead',
            outputs: [
                'mekanism:dust_lead',
                Item.of('create:experience_nugget').withChance(0.75)
            ]
        },
        {
            input: 'create:crushed_raw_uranium',
            outputs: [
                'mekanism:dust_uranium',
                Item.of('create:experience_nugget').withChance(0.75)
            ]
        },
        {
            input: 'planetsandportals:crushed_desh_ore',
            outputs: 'planetsandportals:desh_dust'
        }
	].forEach((r) => {
		e.recipes.create.crushing(r.outputs, r.input)
	});
})
