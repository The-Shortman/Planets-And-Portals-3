StartupEvents.registry('item', e => {
    [
        // Crushed Ad Astra Ores
        {
            id: 'planetsandportals:crushed_desh_ore',
            type: 'basic',
            name: 'Crushed Desh Ore'
        },
        {
            id: 'planetsandportals:crushed_ostrum_ore',
            type: 'basic',
            name: 'Crushed Ostrum Ore'
        },
        {
            id: 'planetsandportals:crushed_calorite_ore',
            type: 'basic',
            name: 'Crushed Calorite Ore'
        },

        // Playtester items
        {
            id: 'planetsandportals:the_badge',
            type: 'helmet',
            name: 'The Badge',
            stackSize: '1',
            rarity: 'uncommon'
        },
    ].forEach((item) => {
        e.create(item.id, item.type).displayName(item.name).maxStackSize(item.stackSize ?? 64).rarity(item.rarity ?? 'common')
    })
})