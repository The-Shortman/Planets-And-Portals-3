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
        {
            input: 'minecraft:andesite',
            output: 'planetsandportals:andesite_dust'
        },
	].forEach((recipe) => {
		e.recipes.create.milling(recipe.output, recipe.input);
	});
});