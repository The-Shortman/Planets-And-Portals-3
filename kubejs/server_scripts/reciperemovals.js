ServerEvents.recipes(e => {
	[
		// Minecraft
		{output: 'minecraft:ladder'},

		// Create
		{output: 'create:framed_glass'},
		{output: 'create:horizontal_framed_glass'},
		{output: 'create:vertical_framed_glass'},
		{output: 'create:tiled_glass'},

		// Create: TFMG
		{output: 'tfmg:steel_pipe'},
		{output: 'tfmg:steel_distillation_output'},
		{output: 'tfmg:coke_oven'},
		{output: 'tfmg:blast_furnace_output'},
		{output: 'tfmg:heavy_plate'},
		{output: 'tfmg:electric_casing'},
		{input: 'tfmg:electric_casing'},
		{output: 'tfmg:copper_wire'},
		{input: 'tfmg:copper_wire'},
		{output: 'tfmg:aluminium_wire'},
		{output: Fluid.of('tfmg:neon')},
		{input: 'tfmg:copper_coil'},
		{input: 'tfmg:copper_cable'},
		{output: 'tfmg:cable_connector'},
		{output: 'tfmg:firebox'},
		{output: 'tfmg:voltmeter'},
		{output: 'tfmg:energy_meter'},
		{output: 'tfmg:lead_ingot'},
		{output: 'tfmg:lead_sword'},
		{output: 'tfmg:lead_shovel'},
		{output: 'tfmg:lead_pickaxe'},
		{output: 'tfmg:lead_hoe'},
		{output: 'tfmg:lead_axe'},
		{output: 'tfmg:lead_block'},
		{mod: 'tfmg', output: 'create:crushed_raw_lead'},

		// Create: New Age
		{output: 'create_new_age:thorium'},
		{output: 'create_new_age:energiser_t1'},
		{output: 'create_new_age:energiser_t2'},
		{output: 'create_new_age:energiser_t3'},

		// Create Ore Excavation
		{output: 'createoreexcavation:vein_finder'},
		{output: 'createoreexcavation:diamond_drill'},
		{output: 'createoreexcavation:netherite_drill'},
		{id: 'createoreexcavation:ore_vein_type/water'},
		{mod: 'createoreexcavation', output: Fluid.of('minecraft:water')},
		{id: 'createoreexcavation:ore_vein_type/nether_gold'},
		{mod: 'createoreexcavation', output: 'minecraft:gold_nugget'},
		{id: 'createoreexcavation:ore_vein_type/lapis'},
		{mod: 'createoreexcavation', output: 'minecraft:lapis_lazuli'},
		{id: 'createoreexcavation:ore_vein_type/redstone'},
		{mod: 'createoreexcavation', output: 'createoreexcavation:raw_redstone'},
		{id: 'createoreexcavation:ore_vein_type/glowstone'},
		{mod: 'createoreexcavation', output: 'minecraft:glowstone_dust'},
		{id: 'createoreexcavation:ore_vein_type/quartz'},
		{mod: 'createoreexcavation', output: 'minecraft:quartz'},
		{id: 'createoreexcavation:ore_vein_type/coal'},
		{mod: 'createoreexcavation', output: 'minecraft:coal'},
		{id: 'createoreexcavation:ore_vein_type/netherite'},
		{mod: 'createoreexcavation', output: 'minecraft:ancient_debris'},
		{id: 'createoreexcavation:ore_vein_type/diamond'},
		{id: 'createoreexcavation:ore_vein_type/hardened_diamond'},
		{mod: 'createoreexcavation', output: 'createoreexcavation:raw_diamond'},
		{mod: 'createoreexcavation', output: 'minecraft:diamond', not: {input: 'createoreexcavation:raw_diamond'}},
		{id: 'createoreexcavation:ore_vein_type/gold'},
		{mod: 'createoreexcavation', output: 'minecraft:raw_gold'},
		{id: 'createoreexcavation:ore_vein_type/copper'},
		{mod: 'createoreexcavation', output: 'minecraft:raw_copper'},
		{id: 'createoreexcavation:ore_vein_type/zinc'},
		{mod: 'createoreexcavation', output: 'create:raw_zinc'},
		{id: 'createoreexcavation:ore_vein_type/emerald'},
		{mod: 'createoreexcavation', output: 'createoreexcavation:raw_emerald'},
		{id: 'createoreexcavation:ore_vein_type/iron'},
		{mod: 'createoreexcavation', output: 'minecraft:raw_iron'},

		// AE2
		{output: 'ae2:inscriber'},

		//Mekanism
		{output: 'mekanism:ingot_steel'},
		{output: 'mekanism:block_steel'},
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

		// Mekanism Generators
		{output: 'mekanismgenerators:wind_generator'},
		{output: 'mekanismgenerators:heat_generator'},
		{output: 'mekanismgenerators:gas_burning_generator'},
		{output: 'mekanismgenerators:bio_generator'},
		{output: 'mekanismgenerators:advanced_solar_generator'},

		// Ad Astra
		{type: 'ad_astra:nasa_workbench'},
		{type: 'ad_astra:compressing'},
		{type: 'ad_astra:alloying'},
		{type: 'ad_astra:cryo_freezing'},
		{type: 'ad_astra:refining'},
		{output: 'ad_astra:steel_ingot'},
		{output: 'ad_astra:steel_block'},
		{output: 'ad_astra:steel_nugget'},
		{output: 'ad_astra:etrionic_blast_furnace'},
		{output: 'ad_astra:fuel_refinery'},
		{output: 'ad_astra:compressor'},
		{output: 'ad_astra:nasa_workbench'},
		{output: 'ad_astra:tier_1_rocket'},
		{output: 'ad_astra:steel_plate'},
		{output: 'ad_astra:steel_engine'},
		{output: 'ad_astra:launch_pad'},
		{output: 'ad_astra:coal_generator'},
		{output: 'ad_astra:desh_plate'},
		{output: 'ad_astra:desh_plateblock'},
		{output: 'ad_astra:desh_engine'},
		{output: 'ad_astra:photovoltaic_etrium_cell'},
		{output: 'ad_astra:solar_panel'},
		{output: 'ad_astra:gravity_normalizer'},
		{output: 'ad_astra:water_pump'},
		{output: 'ad_astra:desh_ingot', input: [
			'ad_astra:raw_desh',
			'ad_astra:moon_desh_ore',
			'ad_astra:deepslate_desh_ore'
		]},
		{output: 'ad_astra:ostrum_ingot', input: [
			'ad_astra:raw_ostrum',
			'ad_astra:mars_ostrum_ore',
			'ad_astra:deepslate_ostrum_ore'
		]},
		{output: 'ad_astra:steel_rod'},
		{output: 'ad_astra:oxygen_gear'},
		{output: 'ad_astra:space_helmet'},
		{output: 'ad_astra:space_suit'},
		{output: 'ad_astra:space_pants'},
		{output: 'ad_astra:space_boots'},

		// Tempad
		{mod: 'tempad'},

		// Brewery
		{output: 'brewery:copper_brewingstation'},
		{output: 'brewery:silo_copper'},

		// Regions Unexplored
		{output: 'regions_unexplored:raw_redstone_block'},

		// Tom's Simple Storage
		{mod: 'toms_storage'},

		// Grapple Mod
		{output: 'grapplemod:repeller'},
		{output: 'grapplemod:forcefieldupgraddeitem'},

	].forEach((recipe => {
		e.remove(recipe)
	}))
})