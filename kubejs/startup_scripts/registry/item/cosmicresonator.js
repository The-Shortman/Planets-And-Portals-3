StartupEvents.registry('item', e => {
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