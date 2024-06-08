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
})

// Item registry

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

        // Intermediate items
        {
            id: 'planetsandportals:steel_electrode',
            type: 'basic',
            name: 'Steel Electrode'
        }
    ].forEach((item) => {
        e.create(item.id, item.type).displayName(item.name).maxStackSize(item.stackSize ?? 64).rarity(item.rarity ?? 'common')
    })

    e.create('planetsandportals:the_badge', 'chestplate').tier('the_badge')
})