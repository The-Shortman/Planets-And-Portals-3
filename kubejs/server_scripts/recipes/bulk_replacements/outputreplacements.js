ServerEvents.recipes (e => {
    [
        {
            filter: {output: 'mekanism:sawdust'},
            remove: 'mekanism:sawdust',
            replace: 'create:cardboard'
        }
    ].forEach(replace => {
        e.replaceOutput(replace.filter, replace.remove, replace.replace)
    })
})