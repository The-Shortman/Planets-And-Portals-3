ServerEvents.recipes(e => {
    [
        {
            resource: 'ad_astra:raw_desh',
            name: '{"text": "Desh Deposits"}',
            spacing: 1024,
            separation: 128,
            salt: 31659134,
            id: "planetsandportals:desh_deposit",
            biomes: 'ad_astra:has_structure/lunarian_village'
        },
        {
            resource: 'ad_astra:raw_ostrum',
            name: '{"text": "Ostrum Deposits"}',
            spacing: 1024,
            separation: 128,
            salt: 82457028,
            id: "planetsandportals:ostrum_deposit",
            biomes: 'ad_astra:has_structure/mars_temple'
        },
        {
            resource: 'ad_astra:raw_calorite',
            name: '{"text": "Calorite Deposits"}',
            spacing: 2048,
            separation: 256,
            salt: 83520831,
            id: "planetsandportals:calorite_deposit",
            biomes: 'ad_astra:has_structure/venus_bullet'
        },
    ].forEach((vein) => {
        e.recipes.createoreexcavation.vein(vein.name, vein.resource).placement(vein.spacing, vein.separation, vein.salt).biomeWhitelist(vein.biomes).id(vein.id)
    }),

    [
        {
            resources: 'ad_astra:raw_desh',
            veinId: 'planetsandportals:desh_deposit',
            time: 3000,
            drillId: 'planetsandportals:desh_drilling'
        },
        {
            resources: 'ad_astra:raw_ostrum',
            veinId: 'planetsandportals:ostrum_deposit',
            time: 5000,
            requiredDrill: 'createoreexcavation:diamond_drill',
            drillId: 'planetsandportals:ostrum_drilling'
        },
        {
            resources: 'ad_astra:raw_calorite',
            veinId: 'planetsandportals:calorite_deposit',
            time: 10000,
            requiredDrill: 'createoreexcavation:netherite_drill',
            drillId: 'planetsandportals:calorite_drilling'
        },
    ].forEach((drilling) => {
        e.recipes.createoreexcavation.drilling(drilling.resources, drilling.veinId, drilling.time).id(drilling.drillId).drill(drilling.requiredDrill ?? '#createoreexcavation:drills')
    })
})