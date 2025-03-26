ServerEvents.recipes((e) => {
	[
		
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