// Armour registry

ItemEvents.armorTierRegistry(e => {
    e.add('the_badge', tier => {
        tier.durabilityMultiplier = 500
        tier.slotProtections = [0, 0, 0, 0]
        tier.enchantmentValue = 9
        tier.equipSound = 'minecraft:item.armor.equip_leather'
        tier.repairIngredient = 'minecraft:leather'
        tier.toughness = 0.0
        tier.knockbackResistance = 0.0
    })
});

// Item registry

StartupEvents.registry('item', e => {
    [
        // Crushed Ad Astra Ores
        {
            id: 'planetsandportals:crushed_desh_ore', // Texture from Create Ad Astra Compat
            type: 'basic',
            name: 'Crushed Desh Ore',
            stackSize: 64
        },
        {
            id: 'planetsandportals:desh_dust',
            type: 'basic',
            name: 'Desh Dust',
            stackSize: 64
        },
        {
            id: 'planetsandportals:crushed_ostrum_ore', // Texture from Create Ad Astra Compat
            type: 'basic',
            name: 'Crushed Ostrum Ore',
            stackSize: 64
        },
        {
            id: 'planetsandportals:crushed_calorite_ore', // Texture from Create Ad Astra Compat
            type: 'basic',
            name: 'Crushed Calorite Ore',
            stackSize: 64
        },

        // Ingredient items
        {
            id: 'planetsandportals:steel_electrode',
            type: 'basic',
            name: 'Steel Electrode',
            stackSize: 64
        },
        {
            id: 'planetsandportals:andesite_dust', // Texture from Create: Astral
            type: 'basic',
            name: 'Powdered Andesite',
            stackSize: 64
        }
    ].forEach((item) => {
        e.create(item.id, item.type).displayName(item.name).maxStackSize(item.stackSize).rarity(item.rarity ?? 'common')
    })

    e.create('planetsandportals:the_badge', 'chestplate').tier('the_badge')
})