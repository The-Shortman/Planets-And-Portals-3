ServerEvents.recipes(e => {
	[
		// Minecraft
		{output: 'minecraft:ladder'},
		{output: 'minecraft:bookshelf'},
		{output: 'minecraft:copper_ingot', type: 'minecraft:smelting'},
		{output: 'minecraft:copper_ingot', type: 'minecraft:blasting'},
		{output: 'minecraft:copper_ingot', type: 'create:fan_blasting'},
		{output: 'minecraft:copper_nugget', input: 'create:crushed_raw_copper'},
		{output: 'minecraft:iron_ingot', input: 'minecraft:raw_iron'},
		{input: 'minecraft:andesite', type: 'create:crushing'},

		// Create
		{output: 'create:framed_glass'},
		{output: 'create:horizontal_framed_glass'},
		{output: 'create:vertical_framed_glass'},
		{output: 'create:tiled_glass'},
		{output: 'create:andesite_alloy', input: 'minecraft:andesite'},
		{output: 'create:zinc_ingot', type: 'minecraft:smelting'},
		{output: 'create:zinc_ingot', type: 'minecraft:blasting'},
		{output: 'create:zinc_ingot', type: 'create:fan_blasting'},
		{output: 'create:copper_nugget', type: 'create:fan_washing'},
		{output: 'create:zinc_nugget', type: 'create:fan_washing'},
		{output: 'create:crushed_raw_copper'},
		{output: 'create:crushed_raw_zinc'},
		{output: 'create:mechanical_crafter'},

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
		{output: 'create_new_age:advanced_solar_heating_plate'},

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
		{output: 'ad_astra:engine_frame'},
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
		{output: 'grapplemod:forcefieldupgradeitem'},

	].forEach((recipe => {
		e.remove(recipe)
	}))
})