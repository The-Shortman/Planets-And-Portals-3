ServerEvents.recipes(e => {
    shapedRecipes(e);
    shapelessRecipes(e);
    smeltingRecipes(e);
    blastingRecipes(e);
    stonecuttingRecipes(e);
    inputReplacements(e);
})

function shapedRecipes(e) {
    [
        
        // Minor recipe fixes
        
        {
            pattern: [
                'AAA',
                'A A',
                'AAA'
            ],
            key: {
                A: '#forge:planks'
            },
            output: 'minecraft:chest'
        },
        {
            pattern: [
                'AAA',
                'A A',
                'AAA'
            ],
            key: {
                A: '#forge:logs'
            },
            output: '4x minecraft:chest'
        },
        {
            pattern: [
                'AAA',
                'BBB',
                'AAA'
            ],
            key: {
                A: ['#forge:planks', 'minecraft:oak_planks']
            },
            output: 'minecraft:bookshelf'
        },
        {
            pattern: [
                'A A',
                'ABA',
                'A A'
            ],
            key: {
                A: 'minecraft:stick',
                B: ['#forge:planks', 'minecraft:oak_planks']
            },
            output: '4x minecraft:ladder'
        },
        {
            pattern: [
                'AA',
                'AA'
            ],
            key: {
                A: 'tfmg:fireclay_ball'
            },
            output: 'tfmg:fireclay'
        },

        // Ad Astra stuff
        
        {
            pattern: [
                'ABA',
                'CDC',
                'EFE'
            ],
            key: {
                A: 'create:sturdy_sheet',
                B: 'create:precision_mechanism',
                C: 'tfmg:steel_mechanism',
                D: 'ad_astra:engine_frame',
                E: 'tfmg:heavy_plate',
                F: 'ad_astra:fan'
            },
            output: 'ad_astra:steel_engine'
        },
        {
            pattern: [
                'ABA',
                'BBB',
                'ABA'
            ],
            key: {
                A: 'ad_astra:desh_plate',
                B: 'ad_astra:desh_ingot',
            },
            output: 'ad_astra:desh_plateblock'
        },
        {
            pattern: [
                'ABA',
                'CDC',
                ' E '
            ],
            key: {
                A: 'mekanism:block_osmium',
                B: 'create_new_age:reactor_heat_vent',
                C: 'ad_astra:desh_plate',
                D: 'ad_astra:desh_plateblock',
                E: 'ad_astra:steel_engine',
            },
            output: 'ad_astra:desh_engine'
        },
        {
            pattern: [
                'ABA',
                'BBB',
                'ABA'
            ],
            key: {
                A: 'planetsandportals:steel_electrode',
                B: 'ad_astra:etrium_nugget',
            },
            output: 'ad_astra:etrionic_core'
        },
        {
            pattern: [
                ' A ',
                'BCB',
                'DED'
            ],
            key: {
                A: 'ad_astra:etrionic_core',
                B: 'ad_astra:etrium_nugget',
                C: 'tfmg:heavy_machinery_casing',
                D: 'tfmg:steel_block',
                E: 'ad_astra:desh_plate',
            },
            output: 'ad_astra:gravity_normalizer'
        },
        {
            pattern: [
                'A',
                'A'
            ],
            key: {
                A: '#ad_astra:steel_ingots'
            },
            output: '4x ad_astra:steel_rod'
        },
        {
            pattern: [
                'AA'
            ],
            key: {
                A: '#ad_astra:steel_ingots'
            },
            output: '6x tfmg:steel_pipe'
        },
        {
            pattern: [
                ' B ',
                'ABA',
                'ABA'
            ],
            key: {
                A: '#ad_astra:steel_ingots',
                B: 'ad_astra:steel_rod'
            },
            output: 'ad_astra:oxygen_gear'
        },
        {
            pattern: [
                'AAA',
                'ABA'
            ],
            key: {
                A: '#ad_astra:steel_ingots',
                B: 'minecraft:glass_pane'
            },
            output: 'ad_astra:space_helmet'
        },
        {
            pattern: [
                'A A',
                'BCB',
                'ADA'
            ],
            key: {
                A: '#ad_astra:steel_ingots',
                B: 'ad_astra:gas_tank',
                C: 'ad_astra:oxygen_gear',
                D: '#minecraft:wool'
            },
            output: 'ad_astra:space_suit'
        },
        {
            pattern: [
                'AAA',
                'B B',
                'A A'
            ],
            key: {
                A: '#ad_astra:steel_ingots',
                B: '#minecraft:wool'
            },
            output: 'ad_astra:space_pants'
        },
        {
            pattern: [
                'B B',
                'A A'
            ],
            key: {
                A: '#ad_astra:steel_ingots',
                B: '#minecraft:wool'
            },
            output: 'ad_astra:space_boots'
        },

        // Create

        {
            pattern: [
                'AB',
                'BA'
            ],
            key: {
                A: 'planetsandportals:grout',
                B: 'minecraft:andesite'
            },
            output: 'create:andesite_alloy'
        },
        {
            pattern: [
                'A',
                'B',
                'C'
            ],
            key: {
                A: 'create:precision_mechanism',
                B: 'create:brass_casing',
                C: 'minecraft:crafting_table'
            },
            output: '5x create:mechanical_crafter'
        },

        // Masterful Machinery

        {
            pattern: [
                'AAA',
                'ABA',
                'ACA'
            ],
            key: {
                A: 'tfmg:cast_iron_ingot',
                B: 'tfmg:fireproof_bricks',
                C: 'tfmg:cast_iron_pipe'
            },
            output: 'mm:blast_furnace_controller'
        },
        {
            pattern: [
                'AAA',
                'ABA',
                'ACA'
            ],
            key: {
                A: 'tfmg:heavy_plate',
                B: 'tfmg:steel_casing',
                C: 'tfmg:steel_pipe'
            },
            output: 'mm:steel_furnace_controller'
        },
        {
            pattern: [
                'ABA',
                'ACA',
                'ADA'
            ],
            key: {
                A: 'tfmg:steel_casing',
                B: 'create_new_age:basic_motor',
                C: 'create:mechanical_mixer',
                D: 'create:basin'
            },
            output: 'mm:fuel_mixer_controller'
        },
        
        // Create New Age stuff

        {
            pattern: [
                'ABA',
                ' C ',
                ' D '
            ],
            key: {
                A: 'ad_astra:desh_cable',
                B: 'ad_astra:desh_plate',
                C: 'tfmg:steel_casing',
                D: 'minecraft:lightning_rod'
            },
            output: 'create_new_age:energiser_t1'
        },
        {
            pattern: [
                'ABA',
                'ECE',
                ' D '
            ],
            key: {
                A: 'create_new_age:overcharged_golden_sheet',
                B: 'ad_astra:ostrum_plate',
                C: 'create_new_age:energiser_t1',
                D: 'ad_astra:desh_cable',
                E: 'ad_astra:desh_nugget'
            },
            output: 'create_new_age:energiser_t2'
        },

        // Create Ore Excavation

        {
            pattern: [
                'AB ',
                'CD ',
                '  D'
            ],
            key: {
                A: 'minecraft:ender_eye',
                B: 'minecraft:amethyst_shard',
                C: 'minecraft:redstone_block',
                D: 'minecraft:stick'
            },
            output: 'createoreexcavation:vein_finder'
        },

        // Tom's Simple Storage

        {
            pattern: [
                'ABA',
                'BCB',
                'ABA'
            ],
            key: {
                A: 'minecraft:redstone',
                B: '#forge:planks',
                C: 'mekanism:steel_casing'
            },
            output: 'toms_storage:ts.inventory_connector'
        },
        {
            pattern: [
                ' A ',
                'BCD',
                ' A '
            ],
            key: {
                A: '#forge:planks',
                B: 'create:framed_glass',
                C: 'mekanism:ingot_osmium',
                D: 'minecraft:comparator'
            },
            output: 'toms_storage:ts.storage_terminal'
        },
        {
            pattern: [
                'ABA',
                'CDC',
                'AEA'
            ],
            key: {
                A: 'mekanism:enriched_redstone',
                B: 'mekanism:dust_osmium',
                C: 'ad_astra:desh_plate',
                D: 'toms_storage:ts.storage_terminal',
                E: 'minecraft:crafting_table'
            },
            output: 'toms_storage:ts.crafting_terminal'
        },
    ].forEach((recipe) => {
        e.shaped(recipe.output, recipe.pattern, recipe.key)
    })
}

function shapelessRecipes(e) {
    [
        // Create

        {
            inputs: [
                '4x minecraft:gravel',
                '4x minecraft:sand',
                'minecraft:clay'
            ],
            output: 'planetsandportals:grout',
            count: 16
        },
        
        // Blast Furnace
        
        {
            inputs: [
                'tfmg:fireproof_bricks',
                'create:andesite_funnel'
            ],
            output: 'mm:blast_furnace_item_input',
            count: 1
        },
        {
            inputs: [
                'tfmg:fireproof_bricks',
                'create:fluid_valve'
            ],
            output: 'mm:blast_furnace_fluid_output',
            count: 1
        },
        {
            inputs: [
                'tfmg:blast_furnace_output'
            ],
            output: 'mm:blast_furnace_controller',
            count: 1
        },

        // Steel Furnace

        {
            inputs: [
                'tfmg:heavy_machinery_casing',
                'create:andesite_funnel'
            ],
            output: 'mm:steel_furnace_item_input',
            count: 1
        },
        {
            inputs: [
                'tfmg:heavy_machinery_casing',
                'create:fluid_valve'
            ],
            output: 'mm:steel_furnace_fluid_output',
            count: 1
        },
        {
            inputs: [
                'tfmg:heavy_machinery_casing',
                'create_new_age:electrical_connector'
            ],
            output: 'mm:steel_furnace_energy_input',
            count: 1
        },

        // Coke Oven

        {
            inputs: [
                'mm:coke_oven_filler',
                'create:display_board'
            ],
            output: 'mm:coke_oven_controller',
            count: 1
        },
        {
            inputs: [
                'mm:coke_oven_filler',
                'create:andesite_funnel'
            ],
            output: 'mm:coke_oven_item_output',
            count: 1
        },
        {
            inputs: [
                'mm:coke_oven_filler',
                'create:brass_funnel'
            ],
            output: 'mm:coke_oven_item_input',
            count: 1
        },
        {
            inputs: [
                'mm:coke_oven_filler',
                'create:fluid_valve'
            ],
            output: 'mm:coke_oven_fluid_output',
            count: 1
        },

        // Fuel Mixer

        {
            inputs: [
                'tfmg:steel_casing',
                'create:mechanical_pump'
            ],
            output: 'mm:fuel_mixer_fluid_input'
        },
        {
            inputs: [
                'tfmg:steel_casing',
                'create:fluid_valve'
            ],
            output: 'mm:fuel_mixer_fluid_output'
        },
        {
            inputs: [
                'tfmg:steel_casing',
                'create_new_age:electrical_connector'
            ],
            output: 'mm:fuel_mixer_energy_input'
        }
    ].forEach((recipe) => {
        e.shapeless(Item.of(recipe.output, recipe.count), recipe.inputs)
    })
}

function smeltingRecipes(e) {
    [
        {
            input: 'planetsandportals:crushed_raw_ostrum',
            output: 'ad_astra:ostrum_ingot'
        },
        {
            input: 'planetsandportals:crushed_raw_calorite',
            output: 'ad_astra:calorite_ingot'
        },
        {
            input: 'minecraft:rotten_flesh',
            output: 'minecraft:leather'
        },
        {
            input: 'minecraft:copper_ingot',
            output: 'mekanism:dust_copper'
        }
    ].forEach((recipe) => {
        e.smelting(recipe.output, recipe.input)
    })
}

function blastingRecipes(e) {
    [
        {
            input: 'planetsandportals:crushed_raw_ostrum',
            output: 'ad_astra:ostrum_ingot'
        },
        {
            input: 'planetsandportals:crushed_raw_calorite',
            output: 'ad_astra:calorite_ingot'
        },
        {
            input: 'minecraft:copper_ingot',
            output: 'mekanism:dust_copper'
        }
    ].forEach((recipe) => {
        e.blasting(recipe.output, recipe.input)
    })
}

function stonecuttingRecipes(e) {
    [
        {
            input: 'create:framed_glass',
            output: 'create:horizontal_framed_glass'
        },
        {
            input: 'create:framed_glass',
            output: 'create:vertical_framed_glass'
        },
        {
            input: 'create:framed_glass',
            output: 'create:tiled_glass'
        },
        {
            input: 'create:horizontal_framed_glass',
            output: 'create:framed_glass'
        },
        {
            input: 'create:horizontal_framed_glass',
            output: 'create:vertical_framed_glass'
        },
        {
            input: 'create:horizontal_framed_glass',
            output: 'create:tiled_glass'
        },
        {
            input: 'create:vertical_framed_glass',
            output: 'create:horizontal_framed_glass'
        },
        {
            input: 'create:vertical_framed_glass',
            output: 'create:framed_glass'
        },
        {
            input: 'create:vertical_framed_glass',
            output: 'create:tiled_glass'
        },
        {
            input: 'create:tiled_glass',
            output: 'create:horizontal_framed_glass'
        },
        {
            input: 'create:tiled_glass',
            output: 'create:vertical_framed_glass'
        },
        {
            input: 'create:tiled_glass',
            output: 'create:framed_glass'
        },
    ].forEach((recipe) => {
        e.stonecutting(recipe.output, recipe.input)
    })
}

function inputReplacements(e) {
    [
        {
            filter: {mod: 'create_new_age'},
            init: 'create:andesite_casing',
            replacement: 'tfmg:steel_casing'
        },
        {
            filter: {mod: 'create_new_age'},
            init: ['create:brass_casing', 'create:andesite_alloy_block'],
            replacement: 'tfmg:heavy_machinery_casing'
        },
        {
            filter: {mod: 'mekanism'},
            init: 'minecraft:iron_ingot',
            replacement: 'mekanism:ingot_osmium'
        },
    ].forEach((replace) => {
        e.replaceInput(replace.filter, replace.init, replace.replacement)
    })
}