ItemEvents.tooltip(tooltip => {
    [
        {
            ids: [
                'tfmg:electric_casing',
                'tfmg:copper_wire',
                'tfmg:aluminium_wire',
                'tfmg:copper_coil',
                'tfmg:copper_cable',
                'tfmg:cable_connector',
                'tfmg:firebox',
                'tfmg:voltmeter',
                'tfmg:energy_meter',
                'tfmg:lead_ingot',
                'tfmg:lead_sword',
                'tfmg:lead_shovel',
                'tfmg:lead_pickaxe',
                'tfmg:lead_hoe',
                'tfmg:lead_block',
                'ae2:inscriber',
                'grapplemod:repeller',
                'grapplemod:forcefieldupgradeitem'
            ],
            text: "Disabled. This does not have a recipe likely due to balancing reasons!"
        },
        {
            ids: [
                'tfmg:blast_furnace_output'
            ],
            text: 'Recipe disabled. Replaced by the Masterful Machinery blast furnace rework.'
        },
        {
            ids: [
                'ad_astra:tier_1_rocket',
                'ad_astra:tier_2_rocket'
            ],
            text: 'NASA Workbench is disabled. Use Mechanical Crafters instead to craft this.',
        },
        {
            ids: [
                'ad_astra:tier_3_rocket',
                'ad_astra:tier_4_rocket'
            ],
            text: 'NASA Workbench is disabled. This currently does NOT have a recipe!',
        },
        {
            ids: [
                'ad_astra:fuel_refinery',
                'ad_astra:etrionic_blast_furnace',
                'ad_astra:compressor',
                'ad_astra:nasa_workbench',
                'ad_astra:cryo_freezer'
            ],
            text: 'Disabled - check the recipes in EMI for alternatives.'
        },
        {
            ids: ['ad_astra:steel_ingot', 'mekanism:ingot_steel'],
            text: 'Disabled - use [Create: The Factory Must Grow] steel instead.'
        },
        {
            ids: [
                'ad_astra:coal_generator',
                'mekanismgenerators:wind_generator',
                'mekanismgenerators:heat_generator',
                'mekanismgenerators:gas_burning_generator',
                'mekanismgenerators:bio_generator'
            ],
            text: 'Disabled - use generator coils from [Create: New Age] instead, or solar panels.'
        }
    ].forEach((field) => {
        tooltip.add(field.ids, Text.of(field.text).darkRed())
    });

    [
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
        },
        {
            ids: ['createoreexcavation:drilling_machine', 'createoreexcavation:extractor'],
            text: 'All drilling recipes have a stress impact of 256x RPM.'
        }
    ].forEach((field) => {
        tooltip.add(field.ids, Text.of(field.text).darkGreen())
    });
})