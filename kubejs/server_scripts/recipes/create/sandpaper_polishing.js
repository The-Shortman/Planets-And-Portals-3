ServerEvents.recipes((e) => {
	[
		{
            input: 'planetsandportals:rough_diamond',
            output: 'minecraft:diamond'
        }
	].forEach((recipe) => {
		e.recipes.create.sandpaper_polishing(recipe.output, recipe.input);
	});
});