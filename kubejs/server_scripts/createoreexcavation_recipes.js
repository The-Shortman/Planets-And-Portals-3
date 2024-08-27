// This script took way too many braincells from me what the hell was I thinking 'oh yeah lets make it easier to add more veins in the future' WRONG!!!!

ServerEvents.recipes(e => {

    [
        { // OVERWORLD IRON
            id: 'iron_ov',
            resource: 'minecraft:raw_iron',
            name: 'Raw Iron (Earth)',
            biomes: 'minecraft:is_overworld',
            losalt: 407720,
            misalt: 486194,
            hisalt: 533846,
            rarity: 0,
            baseTime: 600,
            type: 'item'
        },
        { // OVERWORLD COPPER
            id: 'copper_ov',
            resource: 'minecraft:raw_copper',
            name: 'Raw Copper (Earth)',
            biomes: 'minecraft:is_overworld',
            losalt: 209828,
            misalt: 724748,
            hisalt: 370228,
            rarity: 0,
            baseTime: 600,
            type: 'item'
        },
        { // OVERWORLD ZINC
            id: 'zinc_ov',
            resource: 'create:raw_zinc',
            name: 'Raw Zinc (Earth)',
            biomes: 'minecraft:is_overworld',
            losalt: 504545,
            misalt: 655133,
            hisalt: 750387,
            rarity: 0,
            baseTime: 600,
            type: 'item'
        },
        { // OVERWORLD LAPIS
            id: 'lapis_ov',
            resource: 'minecraft:lapis_lazuli',
            name: 'Lapis Lazuli (Earth)',
            biomes: 'minecraft:is_overworld',
            losalt: 230999,
            misalt: 304411,
            hisalt: 252036,
            rarity: 0,
            baseTime: 600,
            type: 'item'
        },
        { // OVERWORLD TIN
            id: 'tin_ov',
            resource: 'mekanism:raw_tin',
            name: 'Raw Tin (Earth)',
            biomes: 'minecraft:is_overworld',
            losalt: 481244,
            hisalt: 576278,
            rarity: 1,
            baseTime: 600,
            type: 'item'
        },
        { // OVERWORLD LAVA
            id: 'lava_ov',
            resource: 'minecraft:lava_bucket',
            fluidoutput: 'minecraft:lava 2000',
            name: 'Magma Chamber (Earth)',
            biomes: 'minecraft:is_overworld',
            losalt: 437535,
            hisalt: 444854,
            rarity: 1,
            baseTime: 600,
            type: 'fluid'
        },
        { // OVERWORLD THORIUM
            id: 'thorium_ov',
            resource: 'create_new_age:thorium',
            name: 'Raw Thorium (Earth)',
            biomes: 'minecraft:is_overworld',
            losalt: 552261,
            hisalt: 276506,
            rarity: 1,
            baseTime: 600,
            type: 'item'
        },
        { // OVERWORLD REDSTONE
            id: 'redstone_ov',
            resource: 'createoreexcavation:raw_redstone',
            name: 'Raw Redstone (Earth)',
            biomes: 'minecraft:is_overworld',
            losalt: 379394,
            hisalt: 348505,
            rarity: 1,
            baseTime: 600,
            type: 'item'
        },
        { // OVERWORLD GOLD
            id: 'gold_ov',
            resource: 'minecraft:raw_gold',
            name: 'Raw Gold (Earth)',
            biomes: 'minecraft:is_overworld',
            losalt: 269327,
            hisalt: 893052,
            rarity: 1,
            baseTime: 600,
            type: 'item'
        },
        { // OVERWORLD DIAMOND
            id: 'diamond_ov',
            resource: 'createoreexcavation:raw_diamond',
            name: 'Raw Diamond (Earth)',
            biomes: 'minecraft:is_overworld',
            salt: 676350,
            rarity: 2,
            baseTime: 600,
            type: 'item'
        },
        { // OVERWORLD EMERALD
            id: 'emerald_ov',
            resource: 'createoreexcavation:raw_emerald',
            name: 'Raw Emerald (Earth)',
            biomes: 'minecraft:is_overworld',
            salt: 850406,
            rarity: 2,
            baseTime: 600,
            type: 'item'
        },
        { // NETHER QUARTZ
            id: 'quartz_ne',
            resource: 'minecraft:quartz',
            name: 'Quartz (Nether)',
            biomes: 'minecraft:is_nether',
            losalt: 526412,
            misalt: 216785,
            hisalt: 630955,
            rarity: 0,
            baseTime: 600,
            type: 'item'
        },
        { // NETHER GOLD
            id: 'gold_ne',
            resource: 'minecraft:raw_gold',
            name: 'Raw Gold (Nether)',
            biomes: 'minecraft:is_nether',
            losalt: 378142,
            misalt: 408092,
            hisalt: 379763,
            rarity: 0,
            baseTime: 600,
            type: 'item'
        },
        { // NETHER ANCIENT DEBRIS
            id: 'debris_ne',
            resource: 'minecraft:ancient_debris',
            name: 'Ancient Debris (Nether)',
            biomes: 'minecraft:is_nether',
            salt: 124718,
            rarity: 2,
            baseTime: 600,
            type: 'item'
        },
        { // MOON OSMIUM
            id: 'osmium_mo',
            resource: 'mekanism:raw_osmium',
            name: 'Raw Osmium (Moon)',
            biomes: 'planetsandportals:is_moon',
            losalt: 465271,
            misalt: 818887,
            hisalt: 254828,
            rarity: 0,
            baseTime: 600,
            type: 'item'
        },
        { // MOON DESH
            id: 'desh_mo',
            resource: 'ad_astra:raw_desh',
            name: 'Raw Desh (Moon)',
            biomes: 'planetsandportals:is_moon',
            losalt: 146084,
            misalt: 611237,
            hisalt: 945009,
            rarity: 0,
            baseTime: 600,
            type: 'item'
        },
        { // MOON CHEESE
            id: 'cheese_mo',
            resource: 'ad_astra:cheese',
            name: 'Cheese (Moon)',
            biomes: 'planetsandportals:is_moon',
            losalt: 847807,
            hisalt: 105175,
            rarity: 1,
            baseTime: 600,
            type: 'item'
        },
        { // MOON IRON
            id: 'iron_mo',
            resource: 'minecraft:raw_iron',
            name: 'Raw Iron (Moon)',
            biomes: 'planetsandportals:is_moon',
            losalt: 261284,
            hisalt: 140315,
            rarity: 1,
            baseTime: 600,
            type: 'item'
        },
        { // MOON LAVA
            id: 'lava_mo',
            resource: 'minecraft:lava_bucket',
            fluidoutput: 'minecraft:lava 2000',
            name: 'Magma Chamber (Moon)',
            biomes: 'planetsandportals:is_moon',
            salt: 914450,
            rarity: 2,
            baseTime: 600,
            type: 'fluid'
        },
        { // MOON IRON
            id: 'iron_mo',
            resource: 'minecraft:raw_iron',
            name: 'Raw Iron (Moon)',
            biomes: 'planetsandportals:is_moon',
            losalt: 261284,
            hisalt: 140315,
            rarity: 2,
            baseTime: 600,
            type: 'item'
        },
        { // MOON IRON
            id: 'etrium_mo',
            resource: 'ad_astra:etrium_nugget',
            name: ' (Moon)',
            biomes: 'planetsandportals:is_moon',
            salt: 549806,
            rarity: 3,
            baseTime: 2400,
            type: 'item'
        },
        { // MARS LEAD
            id: 'lead_ma',
            resource: 'mekanism:raw_lead',
            name: 'Raw Lead (Mars)',
            biomes: 'planetsandportals:is_mars',
            losalt: 194580,
            misalt: 953183,
            hisalt: 798537,
            rarity: 0,
            baseTime: 600,
            type: 'item'
        },
        { // MARS OSTRUM
            id: 'ostrum_ma',
            resource: 'ad_astra:raw_ostrum',
            name: 'Raw Ostrum (Mars)',
            biomes: 'planetsandportals:is_mars',
            losalt: 918093,
            misalt: 758988,
            hisalt: 231409,
            rarity: 0,
            baseTime: 600,
            type: 'item'
        },
        { // MARS IRON
            id: 'iron_ma',
            resource: 'minecraft:raw_iron',
            name: 'Raw Iron (Mars)',
            biomes: 'planetsandportals:is_mars',
            losalt: 583576,
            hisalt: 981308,
            rarity: 1,
            baseTime: 600,
            type: 'item'
        },
        { // MARS WATER
            id: 'water_ma',
            resource: 'minecraft:water_bucket',
            fluidoutput: 'minecraft:water 2000',
            name: 'Water Aquifer (Mars)',
            biomes: 'planetsandportals:is_mars',
            salt: 295362,
            rarity: 2,
            baseTime: 600,
            type: 'fluid'
        },

    ].forEach((vein) => {
        if (vein.rarity == 0) {

            //LOWGRADE//
            e.recipes.createoreexcavation.vein(`Lowgrade ${vein.name}`, vein.resource)
                .placement(30, 15, vein.losalt)
                .biomeWhitelist(vein.biomes)
                .id(`createoreexcavation:ore_vein_type/lo_${vein.id}`)

            //MIDGRADE//
            e.recipes.createoreexcavation.vein(`Midgrade ${vein.name}`, vein.resource)
                .placement(45, 30, vein.misalt)
                .biomeWhitelist(vein.biomes)
                .id(`createoreexcavation:ore_vein_type/mi_${vein.id}`)

            //HIGHGRADE//
            e.recipes.createoreexcavation.vein(`Highgrade ${vein.name}`, vein.resource)
                .placement(60, 45, vein.hisalt)
                .biomeWhitelist(vein.biomes)
                .id(`createoreexcavation:ore_vein_type/hi_${vein.id}`)
            
            if (vein.type == 'item') {
                //LOWGRADE//
                e.recipes.createoreexcavation.drilling(vein.resource, `createoreexcavation:ore_vein_type/lo_${vein.id}`, vein.baseTime)
                    .drill('createoreexcavation:drill')
                    .id(`createoreexcavation:lo_${vein.id}/iron`)
                e.recipes.createoreexcavation.drilling(vein.resource, `createoreexcavation:ore_vein_type/lo_${vein.id}`, vein.baseTime/(5/3))
                    .drill('createoreexcavation:diamond_drill')
                    .id(`createoreexcavation:lo_${vein.id}/diamond`)
                e.recipes.createoreexcavation.drilling(vein.resource, `createoreexcavation:ore_vein_type/lo_${vein.id}`, vein.baseTime/5)
                    .drill('createoreexcavation:netherite_drill')
                    .id(`createoreexcavation:lo_${vein.id}/netherite`)

                //MIDGRADE//
                e.recipes.createoreexcavation.drilling(vein.resource, `createoreexcavation:ore_vein_type/mi_${vein.id}`, vein.baseTime/(25/9))
                    .drill('createoreexcavation:diamond_drill')
                    .id(`createoreexcavation:mi_${vein.id}/diamond`)
                e.recipes.createoreexcavation.drilling(vein.resource, `createoreexcavation:ore_vein_type/mi_${vein.id}`, vein.baseTime/(25/3))
                    .drill('createoreexcavation:netherite_drill')
                    .id(`createoreexcavation:mi_${vein.id}/netherite`)

                //HIGHGRADE//
                e.recipes.createoreexcavation.drilling(vein.resource, `createoreexcavation:ore_vein_type/hi_${vein.id}`, vein.baseTime/12.5)
                    .drill('createoreexcavation:netherite_drill')
                    .id(`createoreexcavation:hi_${vein.id}/netherite`)

            } else if (vein.type == 'fluid') {
                //LOWGRADE//
                e.recipes.createoreexcavation.extracting(vein.fluidoutput, `createoreexcavation:ore_vein_type/lo_${vein.id}`, vein.baseTime)
                    .drill('createoreexcavation:drill')
                    .id(`createoreexcavation:lo_${vein.id}/iron`)
                e.recipes.createoreexcavation.extracting(item.fluidoutput, `createoreexcavation:ore_vein_type/lo_${vein.id}`, vein.baseTime/(5/3))
                    .drill('createoreexcavation:diamond_drill')
                    .id(`createoreexcavation:lo_${vein.id}/diamond`)
                e.recipes.createoreexcavation.extracting(vein.fluidoutput, `createoreexcavation:ore_vein_type/lo_${vein.id}`, vein.baseTime/5)
                    .drill('createoreexcavation:netherite_drill')
                    .id(`createoreexcavation:lo_${vein.id}/netherite`)

                //MIDGRADE//
                e.recipes.createoreexcavation.extracting(vein.fluidoutput, `createoreexcavation:ore_vein_type/mi_${vein.id}`, vein.baseTime/(25/9))
                    .drill('createoreexcavation:diamond_drill')
                    .id(`createoreexcavation:mi_${vein.id}/diamond`)
                e.recipes.createoreexcavation.extracting(vein.fluidoutput, `createoreexcavation:ore_vein_type/mi_${vein.id}`, vein.baseTime/(25/3))
                    .drill('createoreexcavation:netherite_drill')
                    .id(`createoreexcavation:mi_${vein.id}/netherite`)

                //HIGHGRADE//
                e.recipes.createoreexcavation.extracting(vein.fluidoutput, `createoreexcavation:ore_vein_type/hi_${vein.id}`, vein.baseTime/12.5)
                    .drill('createoreexcavation:netherite_drill')
                    .id(`createoreexcavation:hi_${vein.id}/netherite`)
            }

        } else if (vein.rarity == 1) {

            //LOWGRADE//
            e.recipes.createoreexcavation.vein(`Lowgrade ${vein.name}`, vein.resource)
                .placement(75, 45, vein.losalt) // Old lowgrade distribution
                .biomeWhitelist(vein.biomes)
                .id(`createoreexcavation:ore_vein_type/lo_${vein.id}`)

            //HIGHGRADE//
            e.recipes.createoreexcavation.vein(`Highgrade ${vein.name}`, vein.resource)
                .placement(105, 75, vein.hisalt) // Old midgrade distribution
                .biomeWhitelist(vein.biomes)
                .id(`createoreexcavation:ore_vein_type/hi_${vein.id}`)
            
            if (vein.type == 'item') {
                //LOWGRADE//
                e.recipes.createoreexcavation.drilling(vein.resource, `createoreexcavation:ore_vein_type/lo_${vein.id}`, vein.baseTime)
                    .drill('createoreexcavation:diamond_drill')
                    .id(`createoreexcavation:lo_${vein.id}/diamond`)
                e.recipes.createoreexcavation.drilling(vein.resource, `createoreexcavation:ore_vein_type/lo_${vein.id}`, vein.baseTime/(5/3))
                    .drill('createoreexcavation:netherite_drill')
                    .id(`createoreexcavation:lo_${vein.id}/netherite`)

                //HIGHGRADE//
                e.recipes.createoreexcavation.drilling(vein.resource, `createoreexcavation:ore_vein_type/hi_${vein.id}`, vein.baseTime/5)
                    .drill('createoreexcavation:netherite_drill')
                    .id(`createoreexcavation:hi_${vein.id}/netherite`)
            } else if (vein.type == 'fluid') {
                //LOWGRADE//
                e.recipes.createoreexcavation.extracting(vein.fluidoutput, `createoreexcavation:ore_vein_type/lo_${vein.id}`, vein.baseTime)
                    .drill('createoreexcavation:diamond_drill')
                    .id(`createoreexcavation:lo_${vein.id}/diamond`)
                e.recipes.createoreexcavation.extracting(vein.fluidoutput, `createoreexcavation:ore_vein_type/lo_${vein.id}`, vein.baseTime/(5/3))
                    .drill('createoreexcavation:netherite_drill')
                    .id(`createoreexcavation:lo_${vein.id}/netherite`)

                //HIGHGRADE//
                e.recipes.createoreexcavation.extracting(vein.fluidoutput, `createoreexcavation:ore_vein_type/hi_${vein.id}`, vein.baseTime/5)
                    .drill('createoreexcavation:netherite_drill')
                    .id(`createoreexcavation:hi_${vein.id}/netherite`)
            }

        } else if (vein.rarity == 2) {

            //NOGRADE//
            e.recipes.createoreexcavation.vein(vein.name, vein.resource)
                .placement(135, 110, vein.salt) // Old midgrade distribution
                .biomeWhitelist(vein.biomes)
                .id(`createoreexcavation:ore_vein_type/${vein.id}`)
            
            if (vein.type == 'item') {
                //NOGRADE//
                e.recipes.createoreexcavation.drilling(vein.resource, `createoreexcavation:ore_vein_type/${vein.id}`, vein.baseTime)
                    .drill('createoreexcavation:netherite_drill')
                    .id(`createoreexcavation:${vein.id}/netherite`)
        
            } else if (vein.type == 'fluid') {
                //NOGRADE//
                e.recipes.createoreexcavation.extracting(vein.fluidoutput, `createoreexcavation:ore_vein_type/${vein.id}`, vein.baseTime)
                    .drill('createoreexcavation:netherite_drill')
                    .id(`createoreexcavation:${vein.id}/netherite`)
            }
            
        } else if (vein.rarity == 3) {

            //NOGRADE//
            e.recipes.createoreexcavation.vein(vein.name, vein.resource)
                .placement(135, 110, vein.salt) // Old midgrade distribution
                .biomeWhitelist(vein.biomes)
                .id(`createoreexcavation:ore_vein_type/${vein.id}`)
            
            if (vein.type == 'item') {
                //NOGRADE//
                e.recipes.createoreexcavation.drilling(vein.resource, `createoreexcavation:ore_vein_type/lo_${vein.id}`, vein.baseTime)
                    .drill('createoreexcavation:diamond_drill')
                    .id(`createoreexcavation:lo_${vein.id}/diamond`)
                e.recipes.createoreexcavation.drilling(vein.resource, `createoreexcavation:ore_vein_type/lo_${vein.id}`, vein.baseTime/(5/3))
                    .drill('createoreexcavation:netherite_drill')
                    .id(`createoreexcavation:lo_${vein.id}/netherite`)
        
            } else if (vein.type == 'fluid') {
                //NOGRADE//
                e.recipes.createoreexcavation.extracting(vein.fluidoutput, `createoreexcavation:ore_vein_type/${vein.id}`, vein.baseTime)
                    .drill('createoreexcavation:diamond_drill')
                    .id(`createoreexcavation:${vein.id}/diamond`)
                e.recipes.createoreexcavation.extracting(vein.fluidoutput, `createoreexcavation:ore_vein_type/${vein.id}`, vein.baseTime/(5/3))
                    .drill('createoreexcavation:netherite_drill')
                    .id(`createoreexcavation:${vein.id}/netherite`)
            }
            
        }
    });
})