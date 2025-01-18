ServerEvents.recipes((e) => {
	[
		{
            input: 'minecraft:glass',
            output: 'create:framed_glass'
        },
        {
            input: 'minecraft:charcoal',
            output: 'minecraft:coal'
        },
        {
            input: 'minecraft:blackstone',
            output: 'minecraft:netherrack'
        },
	].forEach((r) => {
		e.recipes.create.haunting(r.output, r.input);
	});
});