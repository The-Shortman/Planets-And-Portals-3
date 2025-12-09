ServerEvents.recipes((e) => {
	[
		{
            input: 'tfmg:steel_ingot',
            output: 'planetsandportals:steel_electrode',
            energy: 5000
        },
	].forEach((r) => {
		e.custom({
            type: "create_new_age:energising",
            energy_needed: r.energy,
            ingredients: [
                {
                  item: r.input
                }
            ],
            results: [
              {
                item: r.output
              }
            ]
        });
	});
})