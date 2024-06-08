ItemEvents.tooltip(tooltip => {
    [
        {
            ids: [
                'ad_astra:tier_1_rocket',
                'ad_astra:tier_2_rocket',
                'ad_astra:tier_3_rocket',
                'ad_astra:tier_4_rocket'
            ],
            text: 'NASA Workbench is disabled. Use Mechanical Crafters instead to craft this.',
        },
        {
            ids: [
                'ad_astra:fuel_refinery',
                'ad_astra:etrionic_blast_furnace',
                'ad_astra:compressor',
                'ad_astra:nasa_workbench'
            ],
            text: 'Disabled - check the recipes in REI for alternatives.'
        },
        {
            ids: ['ad_astra:steel_ingot', 'mekanism:ingot_steel'],
            text: 'Disabled - use [Create: The Factory Must Grow] steel instead.'
        },
        {
            ids: 'ad_astra:coal_generator',
            text: 'Disabled - use machines from [Create: New Age] instead.'
        },
        {
            ids: [
                'mekanismgenerators:wind_generator',
                'mekanismgenerators:heat_generator',
                'mekanismgenerators:gas_burning_generator',
                'mekanismgenerators:bio_generator'
            ],
            text: "Disabled (Use [Create: New Age]'s generator coils or solar panels)"
        }
    ].forEach((field) => {
        tooltip.add(field.ids, Text.of(field.text).darkRed())
    }),
    [
        {
            ids: [
                'ad_astra:tier_1_rocket',
                'ad_astra:tier_2_rocket',
                'ad_astra:tier_3_rocket',
                'ad_astra:tier_4_rocket'
            ],
            text: "If you can't access the recipe for this, check the recipe uses for Mechanical Crafters and scroll through the Mechanical Crafting tab at the top."
        },
        {
            ids: ['ad_astra:oil', 'ad_astra:oil_bucket'],
            text: 'Needs to be "crudified" in a mixing basin.'
        },
        {
            ids: 'minecraft:rotten_flesh',
            text: 'Can be smelted/bulk blasted into leather.'
        },
        {
            ids: 'minecraft:leather',
            text: 'Can be obtained from smelting/bulk blasting rotten flesh.'
        }
    ].forEach((field) => {
        tooltip.add(field.ids, Text.of(field.text).darkGreen())
    })
})