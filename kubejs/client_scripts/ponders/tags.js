Ponder.tags((e) => {
	[
		{
			id: "planetsandportals:tier_1_machines",
			icon: "minecraft:paper",
			name: "Book 1 Multiblocks",
			desc: "Placeholder",
			items: "minecraft:paper"
		}
	].forEach((ponder) => {
		e.createTag(ponder.id, ponder.icon, ponder.name, ponder.desc, ponder.items)
	})
})