ServerEvents.recipes((e) => {
	[
		{
			input: 'mekanism:ingot_osmium',
			inputVol: 1,
			chemical: 'mekanism:green',
			chemicalVol: 64,
			output: 'mekanism:basic_control_circuit',
			outputVol: 0
		}
	].forEach((r) => {
		e.custom({
			type: "mekanism:metallurgic_infusing",
			chemicalInput: {
				amount: r.chemicalVol,
				tag: r.chemical
			},
			itemInput: {
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