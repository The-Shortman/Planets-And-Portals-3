ServerEvents.recipes(e => {
    e.custom({
        type: 'tfmg:casting',
        ingredients: [{
            fluid: 'planetsandportals:molten_deshmium',
            amount: 1
        }],
        processingTime: 300,
        results: [
            {
                count: 1,
                item: 'ad_astra:desh_ingot'
            },
            {
                count: 1,
                item: 'ad_astra:desh_block'
            }
        ]
    });

    e.custom({
        type: 'tfmg:casting',
        ingredients: [{
            fluid: 'planetsandportals:molten_osmish',
            amount: 1
        }],
        processingTime: 300,
        results: [
            {
                count: 1,
                item: 'mekanism:ingot_osmium'
            },
            {
                count: 1,
                item: 'mekanism:block_osmium'
            }
        ]
    });
})