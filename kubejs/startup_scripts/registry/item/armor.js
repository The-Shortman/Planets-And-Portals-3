// Armour tier registry

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

// Armour item registry

StartupEvents.registry('item', e => {
	e.create('planetsandportals:the_badge', 'chestplate').tier('the_badge');
})