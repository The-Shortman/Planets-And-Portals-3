ServerEvents.recipes((e) => {
	[
		// Mekanism basic blocks

        {
            pattern: [
                'ABA'
            ],
            key: {
                A: 'mekanism:basic_control_circuit',
                B: 'create_new_age:copper_wire'
            },
            output: '4x mekanism:basic_universal_cable'
        },
        {
            pattern: [
                'ABA'
            ],
            key: {
                A: 'mekanism:basic_control_circuit',
                B: 'create_new_age:overcharged_iron_wire'
            },
            output: '8x mekanism:basic_universal_cable'
        },
        {
            pattern: [
                'ABA'
            ],
            key: {
                A: 'mekanism:basic_control_circuit',
                B: 'create_new_age:overcharged_golden_wire'
            },
            output: '16x mekanism:basic_universal_cable'
        },
        {
            pattern: [
                'ABA'
            ],
            key: {
                A: 'mekanism:basic_control_circuit',
                B: 'create_new_age:overcharged_diamond_wire'
            },
            output: '64x mekanism:basic_universal_cable'
        },
        {
            pattern: [
                'BBB',
                'BAB',
                'BBB'
            ],
            key: {
                A: 'mekanism:basic_control_circuit',
                B: 'create:fluid_pipe'
            },
            output: '8x mekanism:basic_mechanical_pipe'
        },
        {
            pattern: [
                'BAB'
            ],
            key: {
                A: 'mekanism:basic_control_circuit',
                B: 'create:framed_glass'
            },
            output: '8x mekanism:basic_pressurized_tube'
        },
        {
            pattern: [
                'BAB'
            ],
            key: {
                A: 'mekanism:basic_control_circuit',
                B: 'minecraft:copper_ingot'
            },
            output: '8x mekanism:basic_thermodynamic_conductor'
        },
        {
            pattern: [
                'AAA',
                'BCB',
                'AAA'
            ],
            key: {
                A: 'minecraft:redstone',
                B: 'tfmg:steel_ingot',
                C: 'mekanism:basic_logistical_transporter'
            },
            output: '2x mekanism:diversion_transporter'
        },
        {
            pattern: [
                'ABA'
            ],
            key: {
                A: 'tfmg:steel_ingot',
                B: 'mekanism:basic_logistical_transporter',
            },
            output: '2x mekanism:restrictive_transporter'
        },

        // Mekanism advanced blocks

        {
            pattern: [
                'ABA',
                'CDC',
                'ABA'
            ],
            key: {
                A: 'mekanism:advanced_control_circuit',
                B: 'mekanism:energy_tablet',
                C: 'mekanism:ingot_osmium',
                D: 'mekanism:basic_energy_cube',
            },
            output: 'mekanism:advanced_energy_cube'
        },
        {
            pattern: [
                'ABA',
                'BCB',
                'ABA'
            ],
            key: {
                A: 'mekanism:advanced_control_circuit',
                B: 'mekanism:ingot_osmium',
                C: 'mekanism:basic_fluid_tank',
            },
            output: 'mekanism:advanced_fluid_tank'
        },
        {
            pattern: [
                'ABA',
                'BCB',
                'ABA'
            ],
            key: {
                A: 'mekanism:advanced_control_circuit',
                B: 'mekanism:ingot_osmium',
                C: 'mekanism:basic_chemical_tank',
            },
            output: 'mekanism:advanced_chemical_tank'
        },
        {
            pattern: [
                'BBB',
                'BAB',
                'BBB'
            ],
            key: {
                A: 'mekanism:advanced_control_circuit',
                B: 'mekanism:basic_universal_cable',
            },
            output: 'mekanism:advanced_universal_cable'
        },
        {
            pattern: [
                'BBB',
                'BAB',
                'BBB'
            ],
            key: {
                A: 'mekanism:advanced_control_circuit',
                B: 'mekanism:basic_mechanical_pipe',
            },
            output: 'mekanism:advanced_mechanical_pipe'
        },
        {
            pattern: [
                'BBB',
                'BAB',
                'BBB'
            ],
            key: {
                A: 'mekanism:advanced_control_circuit',
                B: 'mekanism:basic_pressurized_tube',
            },
            output: 'mekanism:advanced_pressurized_tube'
        },
        {
            pattern: [
                'BBB',
                'BAB',
                'BBB'
            ],
            key: {
                A: 'mekanism:advanced_control_circuit',
                B: 'mekanism:basic_logistical_transporter',
            },
            output: 'mekanism:advanced_logistical_transporter'
        },
        {
            pattern: [
                'ABA',
                'ACA',
                'DDD'
            ],
            key: {
                A: 'mekanismgenerators:solar_generator',
                B: 'mekanism:alloy_infused',
                C: 'mekanism:advanced_control_circuit',
                D: 'mekanism:ingot_osmium'
            },
            output: 'mekanismgenerators:advanced_solar_generator'
        },
	].forEach((recipe) => {
		e.shaped(recipe.output, recipe.pattern, recipe.key)
	})
})