ServerEvents.recipes(e => {
	[
		// Minecraft
		{output: 'minecraft:stone_sword'},
		{output: 'minecraft:iron_sword'},
		{output: 'minecraft:golden_sword'},
		{output: 'minecraft:diamond_sword'},
		{output: 'minecraft:netherite_sword'},
		{output: 'minecraft:stone_pickaxe'},
		{output: 'minecraft:iron_pickaxe'},
		{output: 'minecraft:golden_pickaxe'},
		{output: 'minecraft:diamond_pickaxe'},
		{output: 'minecraft:netherite_pickaxe'},
		{output: 'minecraft:stone_axe'},
		{output: 'minecraft:iron_axe'},
		{output: 'minecraft:golden_axe'},
		{output: 'minecraft:diamond_axe'},
		{output: 'minecraft:netherite_axe'},
		{output: 'minecraft:stone_shovel'},
		{output: 'minecraft:iron_shovel'},
		{output: 'minecraft:golden_shovel'},
		{output: 'minecraft:diamond_shovel'},
		{output: 'minecraft:netherite_shovel'},
		{output: 'minecraft:stone_hoe'},
		{output: 'minecraft:iron_hoe'},
		{output: 'minecraft:golden_hoe'},
		{output: 'minecraft:diamond_hoe'},
		{output: 'minecraft:netherite_hoe'},
		{output: 'minecraft:ladder'},

		// Create
		{output: 'create:framed_glass'},
		{output: 'create:horizontal_framed_glass'},
		{output: 'create:vertical_framed_glass'},
		{output: 'create:tiled_glass'},

		// Create: TFMG
		{output: 'tfmg:coke_oven'},
		{output: 'tfmg:heavy_plate'},

		// Create: New Age
		{output: 'create_new_age:thorium'},

		// Create Ore Excavation
		{id: 'createoreexcavation:ore_vein_type/water'},
		{mod: 'createoreexcavation', output: Fluid.of('minecraft:water')},
		{id: 'createoreexcavation:ore_vein_type/nether_gold'},
		{mod: 'createoreexcavation', output: 'minecraft:gold_nugget'},


		// AE2
		{output: 'ae2:inscriber'},

		//Mekanism
		{output: 'mekanism:ingot_steel'},
		{output: 'mekanism:block_steel'},
		{output: 'mekainsm:nugget_steel'},
		{output: 'mekanism:dust_refined_obsidian'},

		{output: 'mekanism:ingot_osmium', input: [
			'mekanism:raw_osmium',
			'mekanism:osmium_ore',
			'mekanism:dust_osmium',
			'mekanism:deepslate_osmium_ore',
			'create:crushed_raw_osmium',
		]},
		{output: 'mekanism:dust_osmium', input: 'mekanism:ingot_osmium'},
		{output: 'mekanism:nugget_osmium', input: 'create:crushed_osmium'},

		{output: 'mekanism:ingot_lead', input: [
			'mekanism:raw_lead',
			'mekanism:lead_ore',
			'mekanism:dust_lead',
			'mekanism:deepslate_lead_ore',
			'create:crushed_raw_lead',
		]},
		{output: 'mekanism:dust_osmium', input: 'mekanism:ingot_osmium'},
		{output: 'mekanism:nugget_lead', input: 'create:crushed_lead'},

		{output: 'mekanism:ingot_uranium', input: [
			'mekanism:raw_uranium',
			'mekanism:uranium_ore',
			'mekanism:dust_uranium',
			'mekanism:deepslate_uranium_ore',
			'create:crushed_raw_uranium',
		]},
		{output: 'mekanism:dust_uranium', input: 'mekanism:ingot_uranium'},
		{output: 'mekanism:nugget_uranium', input: 'create:crushed_uranium'},

		// Mekanism Generators
		{output: 'mekanismgenerators:wind_generator'},

		// Ad Astra
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

		// Tempad
		{mod: 'tempad'},

		// Brewery
		{output: 'brewery:copper_brewingstation'},
		{output: 'brewery:silo_copper'}

	].forEach((recipe => {
		e.remove(recipe)
	}))
})