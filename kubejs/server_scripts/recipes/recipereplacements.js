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
        }
    ].forEach((replace) => {
        e.replaceInput(replace.filter, replace.remove, replace.replace)
    })
})