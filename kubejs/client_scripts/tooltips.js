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
                'tfmg:coke_oven'
            ],
            text: "Recipe disabled. Use the Masterful Machinery coke oven rework instead."
        },
        {
            ids: [
                'ad_astra:nasa_workbench',
                'ad_astra:tier_1_rocket',
                'ad_astra:tier_2_rocket'
            ],
            text: 'NASA Workbench is disabled. Use Mechanical Crafters instead to craft the tier 1 and 2 rockets.',
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
        },
        {
            ids: [
                "mm:blast_furnace_fluid_input",
                "mm:blast_furnace_item_output",
                "mm:coke_oven_fluid_input",
                "mm:steel_furnace_fluid_input",
                "mm:steel_furnace_item_output",
                "mm:steel_furnace_energy_output",
                "mm:fuel_mixer_energy_output"
            ],
            text: "Unused machinery port - no crafting recipe."
        },
        {
            ids: ['ad_astra:oil', 'ad_astra:oil_bucket'],
            text: 'Use the crude oil from [Create: TFMG] instead.'
        },
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
        },
        {
            ids: [
                'railways:wooden_headstock',
                'railways:wooden_headstock_buffer',
                'railways:wooden_headstock_link_and_pin_linkless',
                'railways:wooden_headstock_knuckle_coupler',
                'railways:wooden_headstock_split_knuckle_coupler',
                'railways:wooden_headstock_screwlink_coupler'
            ],
            text: "Craft the [Wooden Headstock (Link 'n Pin)] item and hold [ALT] while in main hand to get this item."
        },
        {
            ids: [
                'railways:copycat_headstock',
                'railways:copycat_headstock_buffer',
                'railways:copycat_headstock_link_and_pin_linkless',
                'railways:copycat_headstock_knuckle_coupler',
                'railways:copycat_headstock_split_knuckle_coupler',
                'railways:copycat_headstock_screwlink_coupler'
            ],
            text: "Craft the [Copycat Headstock (Link 'n Pin)] item and hold [ALT] while in main hand to get this item."
        },
        {
            ids: [
                'railways:smokestack_long_brass_cap_steel',
                'railways:smokestack_long_copper_cap_steel',
                'railways:smokestack_long_brass',
                'railways:smokestack_long_copper_cap_brass',
                'railways:smokestack_long_copper',
                'railways:smokestack_long_brass_cap_copper'
            ],
            text: "Craft the [Double Smokestack] item and hold [ALT] while in main hand to get this item."
        },
        {
            ids: [
                'railways:smokestack_coalburner_brass_cap_steel',
                'railways:smokestack_coalburner_copper_cap_steel',
                'railways:smokestack_coalburner_brass',
                'railways:smokestack_coalburner_copper_cap_brass',
                'railways:smokestack_coalburner_copper',
                'railways:smokestack_coalburner_brass_cap_copper'
            ],
            text: "Craft the [Coalburner Smokestack] item and hold [ALT] while in main hand to get this item."
        },
        {
            ids: [
                'railways:smokestack_oilburner_brass_cap_steel',
                'railways:smokestack_oilburner_copper_cap_steel',
                'railways:smokestack_oilburner_brass',
                'railways:smokestack_oilburner_copper_cap_brass',
                'railways:smokestack_oilburner_copper',
                'railways:smokestack_oilburner_brass_cap_copper'
            ],
            text: "Craft the [Oilburner Smokestack] item and hold [ALT] while in main hand to get this item."
        },
        {
            ids: [
                'railways:smokestack_streamlined_brass_cap_steel',
                'railways:smokestack_streamlined_copper_cap_steel',
                'railways:smokestack_streamlined_brass',
                'railways:smokestack_streamlined_copper_cap_brass',
                'railways:smokestack_streamlined_copper',
                'railways:smokestack_streamlined_brass_cap_copper'
            ],
            text: "Craft the [Streamlined Smokestack] item and hold [ALT] while in main hand to get this item."
        },
        {
            ids: [
                'railways:smokestack_woodburner_brass_cap_steel',
                'railways:smokestack_woodburner_copper_cap_steel',
                'railways:smokestack_woodburner_brass',
                'railways:smokestack_woodburner_copper_cap_brass',
                'railways:smokestack_woodburner_copper',
                'railways:smokestack_woodburner_brass_cap_copper'
            ],
            text: "Craft the [Woodburner Smokestack] item and hold [ALT] while in main hand to get this item."
        },
        {
            ids: [
                'railways:slashed_locometal',
                'railways:locometal_pillar',
                'railways:locometal_smokebox',
                'railways:plated_locometal',
                'railways:flat_slashed_locometal',
                'railways:flat_riveted_locometal'
            ],
            text: "Craft the [Riveted Locometal] item and hold [ALT] while in main hand, or use a stonecutter to get this item."
        }
    ].forEach((field) => {
        tooltip.add(field.ids, Text.of(field.text).darkGreen())
    });
})