ServerEvents.recipes((e) => {
	[
        {
            inputs: {
                fluid: 'ad_astra:oil',
                amount: 1000
            },
            outputs: {
                fluid: 'tfmg:crude_oil',
                amount: 1000
            },
			heat: 0
        },
        {
            inputs: [
                {
                    fluid: 'minecraft:water',
                    amount: 1000
                },
                'create:powdered_obsidian'
            ],
            outputs: {
                fluid: 'planetsandportals:obsidian_solution',
                amount: 1000
            },
			heat: 0
        },
        {
            inputs: [
                'planetsandportals:grout',
                'planetsandportals:andesite_dust'
            ],
            outputs: 'create:andesite_alloy',
			heat: 0
        },
		{
            outputs: [
                'mekanism:ingot_lead',
            ],
            inputs: [
                'mekanism:dust_lead',
            ],
			heat: 1
        },
        {
            outputs: [
                'mekanism:dust_refined_obsidian',
            ],
            inputs: [
                'mekanism:dust_obsidian',
                'ad_astra:ostrum_nugget'
            ],
			heat: 1
        },
        {
            outputs: [
                'mekanism:ingot_uranium',
            ],
            inputs: [
                'mekanism:dust_uranium',
            ],
			heat: 1
        },
        {
            outputs: [
                'mekanism:alloy_infused'
            ],
            inputs: [
                'create:andesite_alloy',
                'mekanism:enriched_redstone'
            ],
			heat: 1
        }
	].forEach((r) => {
		if (r.heat == 1) {
			e.recipes.create.mixing(r.outputs, r.inputs).processingTime(r.time ?? 100).heated();
		} else if (r.heat == 2) {
			e.recipes.create.mixing(r.outputs, r.inputs).processingTime(r.time ?? 100).superHeated();
		} else {
			e.recipes.create.mixing(r.outputs, r.inputs).processingTime(r.time ?? 100);
		}
	})
})