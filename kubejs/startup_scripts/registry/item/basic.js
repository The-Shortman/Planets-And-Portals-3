// Basic items that have no special behaviours

StartupEvents.registry('item', e => {
	[
        // Restricted Portals Key (end prevention)
        {
            id: 'planetsandportals:end_prevention_placeholder',
            name: 'Placeholder Item',
            stackSize: 1
        },
        
        // Crushed Ad Astra Ores
        {
            id: 'planetsandportals:crushed_raw_desh', // Texture from Create Ad Astra Compat
            name: 'Crushed Desh Ore',
            stackSize: 64
        },
        {
            id: 'planetsandportals:desh_dust',
            name: 'Desh Dust',
            stackSize: 64
        },
        {
            id: 'planetsandportals:crushed_raw_ostrum', // Texture from Create Ad Astra Compat
            name: 'Crushed Ostrum Ore',
            stackSize: 64
        },
        {
            id: 'planetsandportals:crushed_raw_calorite', // Texture from Create Ad Astra Compat
            name: 'Crushed Calorite Ore',
            stackSize: 64
        },

        // Ingredient items
        {
            id: 'planetsandportals:steel_electrode',
            name: 'Steel Electrode',
            stackSize: 64
        },
        {
            id: 'planetsandportals:andesite_dust', // Texture from Create: Astral
            name: 'Powdered Andesite',
            stackSize: 64
        },
        {
            id: 'planetsandportals:brass_mixture',
            name: 'Brass Mixture',
            stackSize: 64
        },
        {
            id: 'planetsandportals:rough_diamond',
            name: 'Rough Diamond',
            stackSize: 64
		}
    ].forEach((item) => {
        e.create(item.id, 'basic').displayName(item.name).maxStackSize(item.stackSize ?? 64).rarity(item.rarity ?? 'common')
    });
})