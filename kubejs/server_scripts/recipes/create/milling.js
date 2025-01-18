ServerEvents.recipes((e) => {
	[
		{
            input: 'minecraft:raw_copper',
            output: 'create:crushed_raw_copper'
        },
        {
            input: 'minecraft:raw_iron',
            output: 'create:crushed_raw_iron'
        },
        {
            input: 'create:raw_zinc',
            output: 'create:crushed_raw_zinc'
        },
	].forEach((r) => {
		e.recipes.create.milling(r.output, r.input);
	});
});