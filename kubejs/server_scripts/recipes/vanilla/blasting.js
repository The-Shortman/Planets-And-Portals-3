ServerEvents.recipes(e => {
    [
        {
            input: 'planetsandportals:crushed_raw_ostrum',
            output: 'ad_astra:ostrum_ingot'
        },
        {
            input: 'planetsandportals:crushed_raw_calorite',
            output: 'ad_astra:calorite_ingot'
        },
        {
            input: 'minecraft:copper_ingot',
            output: 'mekanism:dust_copper'
        },
        {
            input: 'create:crushed_raw_zinc',
            output: 'create:zinc_ingot'
        },
        {
            input: 'planetsandportals:brass_mixture',
            output: 'create:brass_ingot'
        }
    ].forEach((recipe) => {
        e.blasting(recipe.output, recipe.input)
    });
})