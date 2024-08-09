ServerEvents.recipes(e => {

    // COMMON //

    [
        // Overworld

        {
            resource: 'minecraft:raw_iron',
            name: '{"text": "Midgrade Raw Iron"}',
            id: 'createoreexcavation:ore_vein_type/mi_iron_ov',
            salt: 811001,
            biomes: 'minecraft:is_overworld'
        },
        {
            resource: 'minecraft:raw_copper',
            name: '{"text": "Midgrade Raw Copper"}',
            id: 'createoreexcavation:ore_vein_type/mi_copper_ov',
            salt: 811002,
            biomes: 'minecraft:is_overworld'
        },
        {
            resource: 'create:raw_zinc',
            name: '{"text": "Midgrade Raw Zinc"}',
            id: 'createoreexcavation:ore_vein_type/mi_zinc_ov',
            salt: 811003,
            biomes: 'minecraft:is_overworld'
        },
        {
            resource: 'minecraft:lapis_lazuli',
            name: '{"text": "Midgrade Lapis Lazuli"}',
            id: 'createoreexcavation:ore_vein_type/mi_lapis_ov',
            salt: 811004,
            biomes: 'minecraft:is_overworld'
        },

        // Nether

        {
            resource: 'minecraft:quartz',
            name: '{"text": "Midgrade Quartz"}',
            id: 'createoreexcavation:ore_vein_type/mi_quartz_ne',
            salt: 812001,
            biomes: 'minecraft:is_nether'
        },
        {
            resource: 'minecraft:raw_gold',
            name: '{"text": "Midgrade Nether Gold"}',
            id: 'createoreexcavation:ore_vein_type/mi_gold_ne',
            salt: 812002,
            biomes: 'minecraft:is_nether'
        },
        
        // Moon

        {
            resource: 'mekanism:raw_osmium',
            name: '{"text": "Midgrade Raw Osmium"}',
            id: 'createoreexcavation:ore_vein_type/mi_osmium_mo',
            salt: 813001,
            biomes: 'planetsandportals:is_moon'
        },
        {
            resource: 'ad_astra:raw_desh',
            name: '{"text": "Midgrade Raw Desh"}',
            id: 'createoreexcavation:ore_vein_type/mi_desh_mo',
            salt: 813002,
            biomes: 'planetsandportals:is_moon'
        },

        // Mars

        {
            resource: 'mekanism:raw_lead',
            name: '{"text": "Midgrade Raw Lead"}',
            id: 'createoreexcavation:ore_vein_type/mi_lead_ma',
            salt: 814001,
            biomes: 'planetsandportals:is_mars'
        },
        {
            resource: 'ad_astra:raw_ostrum',
            name: '{"text": "Midgrade Raw Ostrum"}',
            id: 'createoreexcavation:ore_vein_type/mi_ostrum_ma',
            salt: 814002,
            biomes: 'planetsandportals:is_mars'
        }
    ].forEach((vein) => {
        e.recipes.createoreexcavation.vein(vein.name, vein.resource).placement(45, 30, vein.salt).biomeWhitelist(vein.biomes).id(vein.id)
    }),

    // RARE

    [

        // Overworld

        {
            resource: 'mekanism:raw_tin',
            name: '{"text": "Midgrade Raw Tin"}',
            id: 'createoreexcavation:ore_vein_type/mi_tin_ov',
            salt: 821001,
            biomes: 'minecraft:is_overworld'
        },
        {
            resource: 'minecraft:lava_bucket',
            name: '{"text": "Porous Lava Chamber"}',
            id: 'createoreexcavation:ore_vein_type/mi_lava_ov',
            salt: 821002,
            biomes: 'minecraft:is_overworld'
        },
        {
            resource: 'create_new_age:thorium',
            name: '{"text": "Midgrade Raw Thorium"}',
            id: 'createoreexcavation:ore_vein_type/mi_thorium_ov',
            salt: 821003,
            biomes: 'minecraft:is_overworld'
        },
        {
            resource: 'minecraft:redstone',
            name: '{"text": "Midgrade Redstone"}',
            id: 'createoreexcavation:ore_vein_type/mi_redstone_ov',
            salt: 821004,
            biomes: 'minecraft:is_overworld'
        },
        {
            resource: 'minecraft:raw_gold',
            name: '{"text": "Midgrade Raw Gold"}',
            id: 'createoreexcavation:ore_vein_type/mi_gold_ov',
            salt: 821005,
            biomes: 'minecraft:is_overworld'
        },

        // Nether

        // Moon

        {
            resource: 'ad_astra:cheese',
            name: '{"text": "Midgrade Cheese"}',
            id: 'createoreexcavation:ore_vein_type/mi_cheese_ne',
            salt: 823001,
            biomes: 'planetsandportals:is_moon'
        },
        {
            resource: 'minecraft:raw_iron',
            name: '{"text": "Midgrade Raw Iron"}',
            id: 'createoreexcavation:ore_vein_type/mi_iron_mo',
            salt: 823002,
            biomes: 'planetsandportals:is_moon'
        },

        // Mars

        {
            resource: 'minecraft:raw_iron',
            name: '{"text": "Midgrade Raw Iron"}',
            id: 'createoreexcavation:ore_vein_type/mi_iron_ma',
            salt: 824001,
            biomes: 'planetsandportals:is_mars'
        }

    ].forEach((vein) => {
        e.recipes.createoreexcavation.vein(vein.name, vein.resource).placement(105, 75, vein.salt).biomeWhitelist(vein.biomes).id(vein.id)
    }),

    // UNUSUAL

    [

        // Overworld

        {
            resource: 'createoreexcavation:raw_diamond',
            name: '{"text": "Midgrade Raw Diamond"}',
            id: 'createoreexcavation:ore_vein_type/mi_diamond_ov',
            salt: 831001,
            biomes: 'minecraft:is_overworld'
        },
        {
            resource: 'createoreexcavation:raw_emerald',
            name: '{"text": "Midgrade Raw Diamond"}',
            id: 'createoreexcavation:ore_vein_type/mi_emerald_ov',
            salt: 831002,
            biomes: 'minecraft:is_overworld'
        },

        // Nether

        {
            resource: 'minecraft:ancient_debris',
            name: '{"text": "Midgrade Ancient Debris"}',
            id: 'createoreexcavation:ore_vein_type/mi_debris_ne',
            salt: 832001,
            biomes: 'minecraft:is_nether'
        },

        // Moon

        {
            resource: 'minecraft:lava_bucket',
            name: '{"text": "Porous Lava Chamber"}',
            id: 'createoreexcavation:ore_vein_type/mi_lava_mo',
            salt: 833001,
            biomes: 'planetsandportals:is_moon'
        },

        // Mars

        {
            resource: 'minecraft:water_bucket',
            name: '{"text": "Porous Water Aquifer"}',
            id: 'createoreexcavation:ore_vein_type/mi_water_ma',
            salt: 834001,
            biomes: 'planetsandportals:is_mars'
        }
        
    ].forEach((vein) => {
        e.recipes.createoreexcavation.vein(vein.name, vein.resource).placement(135, 110, vein.salt).biomeWhitelist(vein.biomes).id(vein.id)
    })
})