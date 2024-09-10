Ponder.tags((e) => {
	[
		{
			id: "planetsandportals:tier_1_machines",
			icon: "minecraft:paper",
			name: "Book 1 Multiblocks",
			desc: "Placeholder",
			items: "minecraft:paper"
		},
		{
			id: "planetsandportals:tier_2_machines",
			icon: "mm:coke_oven_controller",
			name: "Book 2 Multiblocks",
			desc: "Machines designed for early industry",
			items: [
				"mm:coke_oven_controller",
				"mm:blast_furnace_controller",
				"mm:steel_furnace_controller"
			]
		},
	].forEach((ponder) => {
		e.createTag(ponder.id, ponder.icon, ponder.name, ponder.desc, ponder.items)
	})
})