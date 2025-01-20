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
        // Restricted Portals Key (end prevention)
        {
            id: 'planetsandportals:end_prevention_placeholder',
            type: 'basic',
            name: 'Placeholder Item',
            stackSize: 1
        },
        
        // Crushed Ad Astra Ores
        {
            id: 'planetsandportals:crushed_raw_desh', // Texture from Create Ad Astra Compat
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
            id: 'planetsandportals:crushed_raw_ostrum', // Texture from Create Ad Astra Compat
            type: 'basic',
            name: 'Crushed Ostrum Ore',
            stackSize: 64
        },
        {
            id: 'planetsandportals:crushed_raw_calorite', // Texture from Create Ad Astra Compat
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
        },

        // Transitional items for sequence assembly
        {
            id: 'planetsandportals:unfinished_engine_frame',
            type: 'create:sequenced_assembly',
            name: 'Unfinished Engine Frame',
            stackSize: 1
        }
    ].forEach((item) => {
        e.create(item.id, item.type).displayName(item.name).maxStackSize(item.stackSize ?? 64).rarity(item.rarity ?? 'common')
    });

    e.create('planetsandportals:the_badge', 'chestplate').tier('the_badge');

    // Cosmic Resonator (basically the ""research"" system)

    [
        {id: 'alpha', stage: '1', name: 'Alpha'},
        {id: 'beta', stage: '1', name: 'Beta'},
        {id: 'gamma', stage: '1', name: 'Gamma'},
        {id: 'delta', stage: '1', name: 'Delta'},
        {id: 'epsilon', stage: '1', name: 'Epsilon'}
    ].forEach((item) => {
        e.create(`planetsandportals:cosmic_resonator_${item.id}`, 'basic')
            .displayName(`Cosmic Resonator ${item.name}`)
            .maxStackSize(1)
            .rarity('epic')
            .texture(`planetsandportals:item/cosmic_resonator/tier_${item.stage}/${item.id}`)
            .fireResistant(true)
    });
})