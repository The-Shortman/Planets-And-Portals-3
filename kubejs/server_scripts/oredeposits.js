ServerEvents.recipes(e => {
    [
        // Ad Astra Planetary Metals
        {
            resource: 'ad_astra:raw_desh',
            name: '{"text": "Raw Desh"}',
            spacing: 512,
            separation: 64,
            salt: 31659134,
            id: "createoreexcavation:ore_vein_type/desh",
            biomes: 'ad_astra:has_structure/lunarian_village'
        },
        {
            resource: 'ad_astra:raw_ostrum',
            name: '{"text": "Raw Ostrum"}',
            spacing: 1024,
            separation: 128,
            salt: 82457028,
            id: "createoreexcavation:ore_vein_type/ostrum",
            biomes: 'ad_astra:has_structure/mars_temple'
        },
        {
            resource: 'ad_astra:raw_calorite',
            name: '{"text": "Raw Calorite"}',
            spacing: 2048,
            separation: 256,
            salt: 83520831,
            id: "createoreexcavation:ore_vein_type/calorite",
            biomes: 'ad_astra:has_structure/venus_bullet'
        },

        // Fluids
        {
            resource: 'minecraft:lava_bucket',
            name: '{"text": "Terran Lava Wells"}',
            spacing: 512,
            separation: 64,
            salt: 38741033,
            id: "createoreexcavation:ore_vein_type/lava_overworld",
            biomes: 'minecraft:is_overworld'
        },
        {
            resource: 'minecraft:lava_bucket',
            name: '{"text": "Martian Lava Wells"}',
            spacing: 512,
            separation: 64,
            salt: 18299584,
            id: "createoreexcavation:ore_vein_type/lava_mars",
            biomes: 'ad_astra:has_structure/mars_temple'
        },
        {
            resource: 'minecraft:lava_bucket',
            name: '{"text": "Venusian Lava Wells"}',
            spacing: 256,
            separation: 32,
            salt: 12959299,
            id: "createoreexcavation:ore_vein_type/lava_venus",
            biomes: 'ad_astra:has_structure/venus_bullet'
        },
        {
            resource: 'minecraft:water_bucket',
            name: '{"text": "Martian Water Aquifers"}',
            spacing: 512,
            separation: 64,
            salt: 38538295,
            id: "createoreexcavation:ore_vein_type/water_mars",
            biomes: 'ad_astra:has_structure/mars_temple'
        },

        // Mekanism Metals
        {
            resource: 'mekanism:raw_tin',
            name: '{"text": "Raw Tin"}',
            spacing: 512,
            separation: 64,
            salt: 92857383,
            id: "createoreexcavation:ore_vein_type/tin",
            biomes: 'minecraft:is_overworld'
        },
        {
            resource: 'mekanism:raw_osmium',
            name: '{"text": "Raw Osmium"}',
            spacing: 512,
            separation: 64,
            salt: 19284930,
            id: "createoreexcavation:ore_vein_type/osmium",
            biomes: 'minecraft:is_overworld'
        },
        {
            resource: 'mekanism:raw_uranium',
            name: '{"text": "Raw Uranium"}',
            spacing: 512,
            separation: 64,
            salt: 48593048,
            id: "createoreexcavation:ore_vein_type/uranium",
            biomes: 'minecraft:is_overworld'
        },
        {
            resource: 'mekanism:raw_lead',
            name: '{"text": "Raw Lead"}',
            spacing: 512,
            separation: 64,
            salt: 39582044,
            id: "createoreexcavation:ore_vein_type/lead",
            biomes: 'minecraft:is_overworld'
        },

        // Mekanism teleportation core
        {
            resource: 'mekanism:teleportation_core',
            name: '{"text": "Possible Teleportation Core"}',
            spacing: 256,
            separation: 32,
            salt: 24352355,
            id: "createoreexcavation:ore_vein_type/tp_core",
            biomes: 'ad_astra:has_structure/mars_temple'
        },

        // Thorium
        {
            resource: 'create_new_age:thorium',
            name: '{"text": "Terran Thorium"}',
            spacing: 512,
            separation: 64,
            salt: 20394930,
            id: "createoreexcavation:ore_vein_type/earth_thorium",
            biomes: 'minecraft:is_overworld'
        },
        {
            resource: 'create_new_age:thorium',
            name: '{"text": "Lunar Thorium"}',
            spacing: 512,
            separation: 64,
            salt: 20039483,
            id: "createoreexcavation:ore_vein_type/moon_thorium",
            biomes: 'ad_astra:has_structure/lunarian_village'
        },
        {
            resource: 'create_new_age:thorium',
            name: '{"text": "Martian Thorium"}',
            spacing: 512,
            separation: 64,
            salt: 77483994,
            id: "createoreexcavation:ore_vein_type/mars_thorium",
            biomes: 'ad_astra:has_structure/mars_temple'
        },
        {
            resource: 'create_new_age:thorium',
            name: '{"text": "Venusian Thorium"}',
            spacing: 1024,
            separation: 128,
            salt: 88734776,
            id: "createoreexcavation:ore_vein_type/venus_thorium",
            biomes: 'ad_astra:has_structure/venus_bullet'
        },
    ].forEach((vein) => {
        e.recipes.createoreexcavation.vein(vein.name, vein.resource).placement(vein.spacing, vein.separation, vein.salt).biomeWhitelist(vein.biomes).id(vein.id)
    }),

    //// DRILLING RESULTS ////

    [
        // Ad Astra planetary metals
        {
            resources: [Item.of('ad_astra:raw_desh').withChance(0.99), Item.of('ad_astra:etrium_nugget').withChance(0.01)],
            veinId: 'createoreexcavation:ore_vein_type/desh',
            time: 600,
            drillId: 'planetsandportals:desh_drilling'
        },
        {
            resources: 'ad_astra:raw_ostrum',
            veinId: 'createoreexcavation:ore_vein_type/ostrum',
            time: 2400,
            requiredDrill: 'createoreexcavation:diamond_drill',
            drillId: 'planetsandportals:ostrum_drilling'
        },
        {
            resources: 'ad_astra:raw_calorite',
            veinId: 'createoreexcavation:ore_vein_type/calorite',
            time: 9600,
            requiredDrill: 'createoreexcavation:netherite_drill',
            drillId: 'planetsandportals:calorite_drilling'
        },

        // Mekanism metals
        {
            resources: 'mekanism:raw_osmium',
            veinId: 'createoreexcavation:ore_vein_type/osmium',
            time: 600,
            drillId: 'planetsandportals:osmium_drilling'
        },
        {
            resources: 'mekanism:raw_tin',
            veinId: 'createoreexcavation:ore_vein_type/tin',
            time: 400,
            drillId: 'planetsandportals:tin_drilling'
        },
        {
            resources: 'mekanism:raw_uranium',
            veinId: 'createoreexcavation:ore_vein_type/osmium',
            time: 800,
            drillId: 'planetsandportals:uranium_drilling'
        },
        {
            resources: 'mekanism:raw_lead',
            veinId: 'createoreexcavation:ore_vein_type/lead',
            time: 800,
            drillId: 'planetsandportals:lead_drilling'
        },

        // Thorium
        {
            resources: 'create_new_age:thorium',
            veinId: 'createoreexcavation:ore_vein_type/earth_thorium',
            time: 400,
            drillId: 'planetsandportals:earth_thorium_drilling'
        },
        {
            resources: 'create_new_age:thorium',
            veinId: 'createoreexcavation:ore_vein_type/moon_thorium',
            time: 400,
            drillId: 'planetsandportals:moon_thorium_drilling'
        },
        {
            resources: 'create_new_age:thorium',
            veinId: 'createoreexcavation:ore_vein_type/mars_thorium',
            time: 200,
            drillId: 'planetsandportals:mars_thorium_drilling'
        },
        {
            resources: 'create_new_age:thorium',
            veinId: 'createoreexcavation:ore_vein_type/venus_thorium',
            time: 800,
            drillId: 'planetsandportals:venus_thorium_drilling'
        },
    ].forEach((drilling) => {
        e.recipes.createoreexcavation.drilling(drilling.resources, drilling.veinId, drilling.time).id(drilling.drillId).drill(drilling.requiredDrill ?? '#createoreexcavation:drills')
    }),

    [
        // Fluids
        {
            resources: Fluid.of('minecraft:lava', 1000),
            veinId: 'createoreexcavation:ore_vein_type/lava_overworld',
            time: 40,
            drillId: 'planetsandportals:earth_lava_tapping'
        },
        {
            resources: Fluid.of('minecraft:lava', 1000),
            veinId: 'createoreexcavation:ore_vein_type/lava_mars',
            time: 80,
            drillId: 'planetsandportals:mars_lava_tapping'
        },
        {
            resources: Fluid.of('minecraft:lava', 1000),
            veinId: 'createoreexcavation:ore_vein_type/lava_venus',
            time: 20,
            drillId: 'planetsandportals:venus_lava_tapping'
        },
        {
            resources: Fluid.of('minecraft:water', 1000),
            veinId: 'createoreexcavation:ore_vein_type/water_mars',
            time: 20,
            drillId: 'planetsandportals:mars_water_tapping'
        },
    ].forEach((extracting) => {
        e.recipes.createoreexcavation.extracting(extracting.resources, extracting.veinId, extracting.time).id(extracting.drillId).drill(extracting.requiredDrill ?? '#createoreexcavation:drills')
    })
})