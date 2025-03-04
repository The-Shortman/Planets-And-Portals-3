ServerEvents.recipes(e => {
    [
        {
           input: 'create:andesite_alloy',
           output: '8x create:shaft' 
        },
        {
            input: 'createoreexcavation:raw_diamond',
            output: 'planetsandportals:rough_diamond' 
         }
    ].forEach(recipe => {
        e.recipes.create.cutting(recipe.output, recipe.input)
    })
})