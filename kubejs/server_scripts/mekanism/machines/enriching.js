ServerEvents.recipes((e) => {
	[
		{
			input: 'minecraft:redstone_block',
			inputVol: 4,
			output: 'mekanism:enriched_redstone',
			outputVol: 1
		}
	].forEach((r) => {
		e.custom({
			type: 'mekanism:enriching',
			input: {
				amount: r.inputVol,
				ingredient: {
					item: r.input
				}
			},
			output: {
				count: r.outputVol,
				item: r.output
			}
		})
	})
})