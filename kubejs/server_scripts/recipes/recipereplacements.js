ServerEvents.recipes(e => {
    [
        {
            filter: {input: 'croptopia:cheese'},
            remove: 'croptopia:cheese',
            replace: '#planetsandportals:cheeses'
        },
        {
            filter: {input: 'ad_astra:cheese'},
            remove: 'ad_astra:cheese',
            replace: '#planetsandportals:cheeses'
        },
        {
            filter: {input: 'mekanism:dust_steel'},
            remove: 'mekanism:dust_steel',
            replace: 'tfmg:steel_ingot'
        }
    ].forEach((replace) => {
        e.replaceInput(replace.filter, replace.remove, replace.replace)
    })
})