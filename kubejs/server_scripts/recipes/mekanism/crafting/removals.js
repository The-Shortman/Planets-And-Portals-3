ServerEvents.recipes((e) => {
	[
		// Mekanism
		{output: 'mekanism:ingot_steel'},
		{output: 'mekanism:block_steel'},
		{output: 'mekanism:enriched_iron'},
		{output: 'mekanism:dust_steel'},
		{output: 'mekainsm:nugget_steel'},
		{output: 'mekanism:dust_refined_obsidian'},
		{output: 'mekanism:alloy_infused'},
		{output: 'mekanism:alloy_reinforced'},
		{output: 'mekanism:alloy_atomic'},
		{output: 'mekanism:diamond'},
		{output: 'mekanism:refined_obsidian'},
		{output: 'mekanism:teleportation_core'},

		{output: 'mekanism:oredictionificator'},

		{output: 'mekanism:basic_universal_cable'},
		{output: 'mekanism:basic_mechanical_pipe'},
		{output: 'mekanism:basic_pressurized_tube'},
		{output: 'mekanism:basic_thermodynamic_conductor'},
		{output: 'mekanism:diversion_transporter'},
		{output: 'mekanism:restrictive_transporter'},

		{output: 'mekanism:advanced_control_circuit'},
		{output: 'mekanism:advanced_energy_cube'},
		{output: 'mekanism:advanced_fluid_tank'},
		{output: 'mekanism:advanced_chemical_tank'},
		{output: 'mekanism:advanced_universal_cable'},
		{output: 'mekanism:advanced_mechanical_pipe'},
		{output: 'mekanism:advanced_pressurized_tube'},
		{output: 'mekanism:advanced_logistical_transporter'},
		{output: 'mekanism:advanced_thermodynamic_conductor'},

		{output: 'mekanism:upgrade_anchor'},

		{output: 'mekanism:qio_drive_array'},
		{output: 'mekanism:qio_dashboard'},
		{output: 'mekanism:qio_exporter'},
		{output: 'mekanism:qio_importer'},
		{output: 'mekanism:qio_redstone_adapter'},

		{output: 'mekanism:cardboard_box'},

		{output: 'mekanism:ingot_osmium', input: [
			'mekanism:raw_osmium',
			'mekanism:osmium_ore',
			'mekanism:dust_osmium',
			'mekanism:deepslate_osmium_ore',
			'create:crushed_raw_osmium',
		]},
		{output: 'mekanism:dust_osmium', input: 'mekanism:ingot_osmium'},
		{output: 'mekanism:nugget_osmium', input: 'create:crushed_raw_osmium'},

		{output: 'mekanism:ingot_lead', input: [
			'mekanism:raw_lead',
			'mekanism:lead_ore',
			'mekanism:dust_lead',
			'mekanism:deepslate_lead_ore',
			'create:crushed_raw_lead',
		]},
		{output: 'mekanism:dust_osmium', input: 'mekanism:ingot_osmium'},
		{output: 'mekanism:nugget_lead', input: 'create:crushed_raw_lead'},

		{output: 'mekanism:ingot_uranium', input: [
			'mekanism:raw_uranium',
			'mekanism:uranium_ore',
			'mekanism:dust_uranium',
			'mekanism:deepslate_uranium_ore',
			'create:crushed_raw_uranium',
		]},
		{output: 'mekanism:dust_uranium', input: 'mekanism:ingot_uranium'},
		{output: 'mekanism:nugget_uranium', input: 'create:crushed_raw_uranium'},

		{output: 'mekanism:enriched_redstone'},

		// Mekanism Generators
		{output: 'mekanismgenerators:wind_generator'},
		{output: 'mekanismgenerators:heat_generator'},
		{output: 'mekanismgenerators:gas_burning_generator'},
		{output: 'mekanismgenerators:bio_generator'},
		{output: 'mekanismgenerators:advanced_solar_generator'},
		
	].forEach((recipe) => {
		e.remove(recipe)
	})
})