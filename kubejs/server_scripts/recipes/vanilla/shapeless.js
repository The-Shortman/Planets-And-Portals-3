ServerEvents.recipes(e => {
    [
        // Create

        {
            inputs: [
                '4x minecraft:gravel',
                '4x minecraft:sand',
                'minecraft:clay'
            ],
            output: 'planetsandportals:grout',
            count: 16
        },
        
        // Blast Furnace
        
        {
            inputs: [
                'tfmg:fireproof_bricks',
                'create:andesite_funnel'
            ],
            output: 'mm:blast_furnace_item_input',
            count: 1
        },
        {
            inputs: [
                'tfmg:fireproof_bricks',
                'create:fluid_valve'
            ],
            output: 'mm:blast_furnace_fluid_output',
            count: 1
        },
        {
            inputs: [
                'tfmg:blast_furnace_output'
            ],
            output: 'mm:blast_furnace_controller',
            count: 1
        },

        // Steel Furnace

        {
            inputs: [
                'tfmg:heavy_machinery_casing',
                'create:andesite_funnel'
            ],
            output: 'mm:steel_furnace_item_input',
            count: 1
        },
        {
            inputs: [
                'tfmg:heavy_machinery_casing',
                'create:fluid_valve'
            ],
            output: 'mm:steel_furnace_fluid_output',
            count: 1
        },
        {
            inputs: [
                'tfmg:heavy_machinery_casing',
                'create_new_age:electrical_connector'
            ],
            output: 'mm:steel_furnace_energy_input',
            count: 1
        },

        // Coke Oven

        {
            inputs: [
                'mm:coke_oven_filler',
                'create:display_board'
            ],
            output: 'mm:coke_oven_controller',
            count: 1
        },
        {
            inputs: [
                'mm:coke_oven_filler',
                'create:andesite_funnel'
            ],
            output: 'mm:coke_oven_item_output',
            count: 1
        },
        {
            inputs: [
                'mm:coke_oven_filler',
                'create:brass_funnel'
            ],
            output: 'mm:coke_oven_item_input',
            count: 1
        },
        {
            inputs: [
                'mm:coke_oven_filler',
                'create:fluid_valve'
            ],
            output: 'mm:coke_oven_fluid_output',
            count: 1
        },

        // Fuel Mixer

        {
            inputs: [
                'tfmg:steel_casing',
                'create:mechanical_pump'
            ],
            output: 'mm:fuel_mixer_fluid_input'
        },
        {
            inputs: [
                'tfmg:steel_casing',
                'create:fluid_valve'
            ],
            output: 'mm:fuel_mixer_fluid_output'
        },
        {
            inputs: [
                'tfmg:steel_casing',
                'create_new_age:electrical_connector'
            ],
            output: 'mm:fuel_mixer_energy_input'
        }
    ].forEach((recipe) => {
        e.shapeless(Item.of(recipe.output, recipe.count), recipe.inputs)
    });
})