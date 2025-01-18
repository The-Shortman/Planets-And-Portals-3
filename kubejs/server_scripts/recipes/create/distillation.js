ServerEvents.recipes((e) => {
	[
		{
			input: {
				fluid: "planetsandportals:xeolum",
				amount: 300
			},
			output: [
				{
					fluid: "planetsandportals:ilene",
					amount: 50
				},
				{
					fluid: "planetsandportals:ferrosine",
					amount: 50
				},
				{
					fluid: "planetsandportals:olivelle",
					amount: 50
				},
				{
					fluid: "planetsandportals:ilene",
					amount: 50
				},
				{
					fluid: "planetsandportals:orthosilene",
					amount: 50
				},
				{
					fluid: "planetsandportals:anorline",
					amount: 50
				},
				{
					fluid: "planetsandportals:light_helium",
					amount: 50
				}
			]
		}
	].forEach((r) => {
		e.custom({
			type: "tfmg:distillation",
			ingredients: [r.input],
			results: r.output
		})
	});
});