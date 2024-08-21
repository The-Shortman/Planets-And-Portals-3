ServerEvents.recipes(e => {

    // COMMON //

    [
        // Overworld

        {
            resource: 'minecraft:raw_iron',
            name: '{"text": "Highgrade Raw Iron"}',
            id: 'createoreexcavation:ore_vein_type/hi_iron_ov',
            salt: 811001,
            biomes: 'minecraft:is_overworld'
        },
        {
            resource: 'minecraft:raw_copper',
            name: '{"text": "Highgrade Raw Copper"}',
            id: 'createoreexcavation:ore_vein_type/hi_copper_ov',
            salt: 811002,
            biomes: 'minecraft:is_overworld'
        },
        {
            resource: 'create:raw_zinc',
            name: '{"text": "Highgrade Raw Zinc"}',
            id: 'createoreexcavation:ore_vein_type/hi_zinc_ov',
            salt: 811003,
            biomes: 'minecraft:is_overworld'
        },
        {
            resource: 'minecraft:lapis_lazuli',
            name: '{"text": "Highgrade Lapis Lazuli"}',
            id: 'createoreexcavation:ore_vein_type/hi_lapis_ov',
            salt: 811004,
            biomes: 'minecraft:is_overworld'
        },

        // Nether

        {
            resource: 'minecraft:quartz',
            name: '{"text": "Highgrade Quartz"}',
            id: 'createoreexcavation:ore_vein_type/hi_quartz_ne',
            salt: 812001,
            biomes: 'minecraft:is_nether'
        },
        {
            resource: 'minecraft:raw_gold',
            name: '{"text": "Highgrade Nether Gold"}',
            id: 'createoreexcavation:ore_vein_type/hi_gold_ne',
            salt: 812002,
            biomes: 'minecraft:is_nether'
        },
        
        // Moon

        {
            resource: 'mekanism:raw_osmium',
            name: '{"text": "Highgrade Raw Osmium"}',
            id: 'createoreexcavation:ore_vein_type/hi_osmium_mo',
            salt: 813001,
            biomes: 'planetsandportals:is_moon'
        },
        {
            resource: 'ad_astra:raw_desh',
            name: '{"text": "Highgrade Raw Desh"}',
            id: 'createoreexcavation:ore_vein_type/hi_desh_mo',
            salt: 813002,
            biomes: 'planetsandportals:is_moon'
        },

        // Mars

        {
            resource: 'mekanism:raw_lead',
            name: '{"text": "Highgrade Raw Lead"}',
            id: 'createoreexcavation:ore_vein_type/hi_lead_ma',
            salt: 814001,
            biomes: 'planetsandportals:is_mars'
        },
        {
            resource: 'ad_astra:raw_ostrum',
            name: '{"text": "Highgrade Raw Ostrum"}',
            id: 'createoreexcavation:ore_vein_type/hi_ostrum_ma',
            salt: 814002,
            biomes: 'planetsandportals:is_mars'
        }
    ].forEach((vein) => {
        e.recipes.createoreexcavation.vein(vein.name, vein.resource).placement(60, 45, vein.salt).biomeWhitelist(vein.biomes).id(vein.id)
    }),

    // RARE

    [

        // Overworld

        {
            resource: 'mekanism:raw_tin',
            name: '{"text": "Highgrade Raw Tin"}',
            id: 'createoreexcavation:ore_vein_type/hi_tin_ov',
            salt: 821001,
            biomes: 'minecraft:is_overworld'
        },
        {
            resource: 'minecraft:lava_bucket',
            name: '{"text": "Concentrated Lava Chamber"}',
            id: 'createoreexcavation:ore_vein_type/hi_lava_ov',
            salt: 821002,
            biomes: 'minecraft:is_overworld'
        },
        {
            resource: 'create_new_age:thorium',
            name: '{"text": "Highgrade Raw Thorium"}',
            id: 'createoreexcavation:ore_vein_type/hi_thorium_ov',
            salt: 821003,
            biomes: 'minecraft:is_overworld'
        },
        {
            resource: 'minecraft:redstone',
            name: '{"text": "Highgrade Redstone"}',
            id: 'createoreexcavation:ore_vein_type/hi_redstone_ov',
            salt: 821004,
            biomes: 'minecraft:is_overworld'
        },
        {
            resource: 'minecraft:raw_gold',
            name: '{"text": "Highgrade Raw Gold"}',
            id: 'createoreexcavation:ore_vein_type/hi_gold_ov',
            salt: 821005,
            biomes: 'minecraft:is_overworld'
        },

        // Nether

        // Moon

        {
            resource: 'ad_astra:cheese',
            name: '{"text": "Highgrade Cheese"}',
            id: 'createoreexcavation:ore_vein_type/hi_cheese_ne',
            salt: 823001,
            biomes: 'planetsandportals:is_moon'
        },
        {
            resource: 'minecraft:raw_iron',
            name: '{"text": "Highgrade Raw Iron"}',
            id: 'createoreexcavation:ore_vein_type/hi_iron_mo',
            salt: 823002,
            biomes: 'planetsandportals:is_moon'
        },

        // Mars

        {
            resource: 'minecraft:raw_iron',
            name: '{"text": "Highgrade Raw Iron"}',
            id: 'createoreexcavation:ore_vein_type/hi_iron_ma',
            salt: 824001,
            biomes: 'planetsandportals:is_mars'
        }

    ].forEach((vein) => {
        e.recipes.createoreexcavation.vein(vein.name, vein.resource).placement(135, 105, vein.salt).biomeWhitelist(vein.biomes).id(vein.id)
    }),

    // UNUSUAL

    [

        // Overworld

        {
            resource: 'createoreexcavation:raw_diamond',
            name: '{"text": "Highgrade Raw Diamond"}',
            id: 'createoreexcavation:ore_vein_type/hi_diamond_ov',
            salt: 831001,
            biomes: 'minecraft:is_overworld'
        },
        {
            resource: 'createoreexcavation:raw_emerald',
            name: '{"text": "Highgrade Raw Emerald"}',
            id: 'createoreexcavation:ore_vein_type/hi_emerald_ov',
            salt: 831002,
            biomes: 'minecraft:is_overworld'
        },

        // Nether

        {
            resource: 'minecraft:ancient_debris',
            name: '{"text": "Highgrade Ancient Debris"}',
            id: 'createoreexcavation:ore_vein_type/hi_debris_ne',
            salt: 832001,
            biomes: 'minecraft:is_nether'
        },

        // Moon

        {
            resource: 'minecraft:lava_bucket',
            name: '{"text": "Concentrated Lava Chamber"}',
            id: 'createoreexcavation:ore_vein_type/hi_lava_mo',
            salt: 833001,
            biomes: 'planetsandportals:is_moon'
        },

        // Mars

        {
            resource: 'minecraft:water_bucket',
            name: '{"text": "Concentrated Water Aquifer"}',
            id: 'createoreexcavation:ore_vein_type/hi_water_ma',
            salt: 834001,
            biomes: 'planetsandportals:is_mars'
        }
        
    ].forEach((vein) => {
        e.recipes.createoreexcavation.vein(vein.name, vein.resource).placement(240, 225, vein.salt).biomeWhitelist(vein.biomes).id(vein.id)
    })
})