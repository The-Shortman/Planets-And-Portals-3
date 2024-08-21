ServerEvents.recipes(e => {

    // COMMON //

    [
        // Overworld

        {
            resource: 'minecraft:raw_iron',
            name: '{"text": "Lowgrade Raw Iron"}',
            id: 'createoreexcavation:ore_vein_type/lo_iron_ov',
            salt: 711001,
            biomes: 'minecraft:is_overworld'
        },
        {
            resource: 'minecraft:raw_copper',
            name: '{"text": "Lowgrade Raw Copper"}',
            id: 'createoreexcavation:ore_vein_type/lo_copper_ov',
            salt: 711002,
            biomes: 'minecraft:is_overworld'
        },
        {
            resource: 'create:raw_zinc',
            name: '{"text": "Lowgrade Raw Zinc"}',
            id: 'createoreexcavation:ore_vein_type/lo_zinc_ov',
            salt: 711003,
            biomes: 'minecraft:is_overworld'
        },
        {
            resource: 'minecraft:lapis_lazuli',
            name: '{"text": "Lowgrade Lapis Lazuli"}',
            id: 'createoreexcavation:ore_vein_type/lo_lapis_ov',
            salt: 711004,
            biomes: 'minecraft:is_overworld'
        },

        // Nether

        {
            resource: 'minecraft:quartz',
            name: '{"text": "Lowgrade Quartz"}',
            id: 'createoreexcavation:ore_vein_type/lo_quartz_ne',
            salt: 712001,
            biomes: 'minecraft:is_nether'
        },
        {
            resource: 'minecraft:raw_gold',
            name: '{"text": "Lowgrade Nether Gold"}',
            id: 'createoreexcavation:ore_vein_type/lo_gold_ne',
            salt: 712002,
            biomes: 'minecraft:is_nether'
        },
        
        // Moon

        {
            resource: 'mekanism:raw_osmium',
            name: '{"text": "Lowgrade Raw Osmium"}',
            id: 'createoreexcavation:ore_vein_type/lo_osmium_mo',
            salt: 713001,
            biomes: 'planetsandportals:is_moon'
        },
        {
            resource: 'ad_astra:raw_desh',
            name: '{"text": "Lowgrade Raw Desh"}',
            id: 'createoreexcavation:ore_vein_type/lo_desh_mo',
            salt: 713002,
            biomes: 'planetsandportals:is_moon'
        },

        // Mars

        {
            resource: 'mekanism:raw_lead',
            name: '{"text": "Lowgrade Raw Lead"}',
            id: 'createoreexcavation:ore_vein_type/lo_lead_ma',
            salt: 714001,
            biomes: 'planetsandportals:is_mars'
        },
        {
            resource: 'ad_astra:raw_ostrum',
            name: '{"text": "Lowgrade Raw Ostrum"}',
            id: 'createoreexcavation:ore_vein_type/lo_ostrum_ma',
            salt: 714002,
            biomes: 'planetsandportals:is_mars'
        }
    ].forEach((vein) => {
        e.recipes.createoreexcavation.vein(vein.name, vein.resource).placement(30, 15, vein.salt).biomeWhitelist(vein.biomes).id(vein.id)
    }),

    // RARE

    [

        // Overworld

        {
            resource: 'mekanism:raw_tin',
            name: '{"text": "Lowgrade Raw Tin"}',
            id: 'createoreexcavation:ore_vein_type/lo_tin_ov',
            salt: 721001,
            biomes: 'minecraft:is_overworld'
        },
        {
            resource: 'minecraft:lava_bucket',
            name: '{"text": "Parched Lava Chamber"}',
            id: 'createoreexcavation:ore_vein_type/lo_lava_ov',
            salt: 721002,
            biomes: 'minecraft:is_overworld'
        },
        {
            resource: 'create_new_age:thorium',
            name: '{"text": "Lowgrade Raw Thorium"}',
            id: 'createoreexcavation:ore_vein_type/lo_thorium_ov',
            salt: 721003,
            biomes: 'minecraft:is_overworld'
        },
        {
            resource: 'minecraft:redstone',
            name: '{"text": "Lowgrade Redstone"}',
            id: 'createoreexcavation:ore_vein_type/lo_redstone_ov',
            salt: 721004,
            biomes: 'minecraft:is_overworld'
        },
        {
            resource: 'minecraft:raw_gold',
            name: '{"text": "Lowgrade Raw Gold"}',
            id: 'createoreexcavation:ore_vein_type/lo_gold_ov',
            salt: 721005,
            biomes: 'minecraft:is_overworld'
        },

        // Nether

        // Moon

        {
            resource: 'ad_astra:cheese',
            name: '{"text": "Lowgrade Cheese"}',
            id: 'createoreexcavation:ore_vein_type/lo_cheese_ne',
            salt: 723001,
            biomes: 'planetsandportals:is_moon'
        },
        {
            resource: 'minecraft:raw_iron',
            name: '{"text": "Lowgrade Raw Iron"}',
            id: 'createoreexcavation:ore_vein_type/lo_iron_mo',
            salt: 723002,
            biomes: 'planetsandportals:is_moon'
        },

        // Mars

        {
            resource: 'minecraft:raw_iron',
            name: '{"text": "Lowgrade Raw Iron"}',
            id: 'createoreexcavation:ore_vein_type/lo_iron_ma',
            salt: 724001,
            biomes: 'planetsandportals:is_mars'
        }

    ].forEach((vein) => {
        e.recipes.createoreexcavation.vein(vein.name, vein.resource).placement(75, 45, vein.salt).biomeWhitelist(vein.biomes).id(vein.id)
    }),

    // UNUSUAL

    [

        // Overworld

        {
            resource: 'createoreexcavation:raw_diamond',
            name: '{"text": "Lowgrade Raw Diamond"}',
            id: 'createoreexcavation:ore_vein_type/lo_diamond_ov',
            salt: 731001,
            biomes: 'minecraft:is_overworld'
        },
        {
            resource: 'createoreexcavation:raw_emerald',
            name: '{"text": "Lowgrade Raw Emerald"}',
            id: 'createoreexcavation:ore_vein_type/lo_emerald_ov',
            salt: 731002,
            biomes: 'minecraft:is_overworld'
        },

        // Nether

        {
            resource: 'minecraft:ancient_debris',
            name: '{"text": "Lowgrade Ancient Debris"}',
            id: 'createoreexcavation:ore_vein_type/lo_debris_ne',
            salt: 732001,
            biomes: 'minecraft:is_nether'
        },

        // Moon

        {
            resource: 'minecraft:lava_bucket',
            name: '{"text": "Parched Lava Chamber"}',
            id: 'createoreexcavation:ore_vein_type/lo_lava_mo',
            salt: 733001,
            biomes: 'planetsandportals:is_moon'
        },

        // Mars

        {
            resource: 'minecraft:water_bucket',
            name: '{"text": "Parched Water Aquifer"}',
            id: 'createoreexcavation:ore_vein_type/lo_water_ma',
            salt: 734001,
            biomes: 'planetsandportals:is_mars'
        }
        
    ].forEach((vein) => {
        e.recipes.createoreexcavation.vein(vein.name, vein.resource).placement(90, 75, vein.salt).biomeWhitelist(vein.biomes).id(vein.id)
    })
})