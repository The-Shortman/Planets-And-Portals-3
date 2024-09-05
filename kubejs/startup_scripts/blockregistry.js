StartupEvents.registry('block', e => {
    [
        {
            id: 'planetsandportals:grout', // Texture from Tinkers Construct
            name: 'Grout',
            mat: 'wet_grass',
            hardness: 0.5,
            res: 1.0,
            tool: 'shovel'
        }
    ].forEach((block) => {
        if (block.tool != 0) {
            e.create(block.id)
                .displayName(block.name)
                .soundType(block.mat)
                .hardness(block.hardness)
                .resistance(block.res)
                .tagBlock(`mineable/${block.tool}`)
        } else {
            e.create(block.id)
                .displayName(block.name)
                .soundType(block.mat)
                .hardness(block.hardness)
                .resistance(block.res)
        }
    })
})