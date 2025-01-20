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
            input: 'minecraft:rotten_flesh',
            output: 'minecraft:leather'
        },
        {
            input: 'minecraft:copper_ingot',
            output: 'mekanism:dust_copper'
        }
    ].forEach((recipe) => {
        e.smelting(recipe.output, recipe.input)
    });
})