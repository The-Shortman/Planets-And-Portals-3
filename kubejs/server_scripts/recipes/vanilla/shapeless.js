ServerEvents.recipes(e => {
    [
        // Vanilla

        {
            inputs: '9x planetsandportals:rough_diamond',
            output: 'planetsandportals:rough_diamond_block',
            count: 1
        },
        {
            inputs: 'planetsandportals:rough_diamond_block',
            output: 'planetsandportals:rough_diamond',
            count: 9
        },

        // Create

        {
            inputs: [
                '4x minecraft:gravel',
                '4x minecraft:sand',
                'minecraft:clay'
            ],
            output: 'planetsandportals:grout',
            count: 16
        },
        {
            inputs: [
                '4x create:shaft',
                'create:zinc_ingot'
            ],
            output: 'copycats:copycat_shaft',
            count: 16
        }
    ].forEach((recipe) => {
        e.shapeless(Item.of(recipe.output, recipe.count), recipe.inputs)
    });
})