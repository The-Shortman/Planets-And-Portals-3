ServerEvents.recipes(e => {
	[
		// Minecraft
		{output: 'minecraft:stone_sword'},
		{output: 'minecraft:iron_sword'},
		{output: 'minecraft:gold_sword'},
		{output: 'minecraft:diamond_sword'},
		{output: 'minecraft:netherite_sword'},
		{output: 'minecraft:stone_pickaxe'},
		{output: 'minecraft:iron_pickaxe'},
		{output: 'minecraft:gold_pickaxe'},
		{output: 'minecraft:diamond_pickaxe'},
		{output: 'minecraft:netherite_pickaxe'},
		{output: 'minecraft:stone_axe'},
		{output: 'minecraft:iron_axe'},
		{output: 'minecraft:gold_axe'},
		{output: 'minecraft:diamond_axe'},
		{output: 'minecraft:netherite_axe'},
		{output: 'minecraft:stone_shovel'},
		{output: 'minecraft:iron_shove'},
		{output: 'minecraft:gold_shovel'},
		{output: 'minecraft:diamond_shovel'},
		{output: 'minecraft:netherite_shovel'},
		{output: 'minecraft:stone_hoe'},
		{output: 'minecraft:iron_hoe'},
		{output: 'minecraft:gold_hoe'},
		{output: 'minecraft:diamond_hoe'},
		{output: 'minecraft:netherite_hoe'},

		// Create
		{output: 'create:framed_glass'},
		{output: 'create:horizontal_framed_glass'},
		{output: 'create:vertical_framed_glass'},
		{output: 'create:tiled_glass'},

		// Create: TFMG
		{output: 'tfmg:coke_oven'},
		{output: 'tfmg:heavy_plate'},

		// Create: New Age
		{output: 'create_new_age:energiser_t1'},
		{output: 'create_new_age:thorium'},

		// AE2
		{output: 'ae2:inscriber'},

		//Mekanism
		{mod: 'mekanism'},

		// Ad Astra
		{output: 'ad_astra:steel_ingot'},
		{output: 'ad_astra:etrionic_blast_furnace'},
		{output: 'ad_astra:fuel_refinery'},
		{output: 'ad_astra:compressor'},
		{output: 'ad_astra:nasa_workbench'},
		{output: 'ad_astra:tier_1_rocket'},
		{output: 'ad_astra:steel_plate'},
		{output: 'ad_astra:steel_engine'},
		{output: 'ad_astra:launch_pad'},
		{output: 'ad_astra:coal_generator'},

		// Tempad
		{mod: 'tempad'},

	].forEach((recipe => {
		e.remove(recipe)
	}))
})