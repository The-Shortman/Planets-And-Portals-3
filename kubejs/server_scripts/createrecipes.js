ServerEvents.recipes(e => {
//    compactingRecipes(e);
//    fillingRecipes(e);
    mixingRecipes(e);
    hauntingRecipes(e);
    deployingRecipes(e);
    mechanicalCraftingRecipes(e);
    millingRecipes(e);
    crushingRecipes(e);
    washingRecipes(e);
    energisingRecipes(e);

    ///// Sequenced Assemblies /////

    let placehold = 'create:incomplete_precision_mechanism'
    let hplate = 'tfmg:unprocessed_heavy_plate'
    let steelmech = 'tfmg:unfinished_steel_mechanism'
    let obsheet = 'create:unprocessed_obsidian_sheet'

    // TFMG Heavy Plate

    e.recipes.create.sequenced_assembly([
        Item.of('tfmg:heavy_plate'), // Output
    ], 'tfmg:steel_block', [ // Input
        e.recipes.create.pressing(hplate, hplate),
        e.recipes.create.deploying(hplate, [hplate, 'create:sturdy_sheet']),
        e.recipes.create.pressing(hplate, hplate),
        e.recipes.create.pressing(hplate, hplate)
    ]).transitionalItem(hplate).loops(1)

    // Post-moon TFMG heavy plate

    e.recipes.create.sequenced_assembly([
        Item.of('tfmg:heavy_plate'), // Output
    ], 'planetsandportals:steel_electrode', [ // Input
        e.recipes.create.filling(hplate, [hplate, Fluid.of('planetsandportals:obsidian_solution', 500)]),
        e.recipes.create.pressing(hplate, hplate)
    ]).transitionalItem(hplate).loops(1)

    // TFMG Steel Mechanism

    e.recipes.create.sequenced_assembly([
        Item.of('tfmg:steel_mechanism'), // Output
    ], 'tfmg:heavy_plate', [ // Input
        e.recipes.create.cutting(steelmech, steelmech),
        e.recipes.create.deploying(steelmech, [steelmech, 'create:cogwheel']),
        e.recipes.create.deploying(steelmech, [steelmech, 'tfmg:screw']),
        e.recipes.create.deploying(steelmech, [steelmech, 'tfmg:screwdriver']).keepHeldItem()
    ]).transitionalItem(steelmech).loops(4),

    // Early game sturdy sheet (40% chance of failiure)

    e.recipes.create.sequenced_assembly([
        Item.of('create:sturdy_sheet').withChance(0.6),
        Item.of('minecraft:iron_nugget').withChance(0.4) // Output
    ], 'create:powdered_obsidian', [ // Input
        e.recipes.create.deploying(obsheet, [obsheet, 'minecraft:iron_nugget']),
        e.recipes.create.pressing(obsheet, obsheet),
        e.recipes.create.pressing(obsheet, obsheet),
    ]).transitionalItem(obsheet).loops(5)

    // Ad Astra Desh Plate

    e.recipes.create.sequenced_assembly([
        Item.of('ad_astra:desh_plate'), // Output
    ], 'ad_astra:desh_block', [ // Input
        e.recipes.create.pressing(placehold, placehold),
        e.recipes.create.deploying(placehold, [placehold, 'tfmg:heavy_plate']),
        e.recipes.create.pressing(placehold, placehold),
        e.recipes.create.pressing(placehold, placehold)
    ]).transitionalItem(placehold).loops(1)
})

//function compactingRecipes(e) {
//    [
//        {
//            outputs: [
//                '',
//            ],
//            inputs: [
//                '',
//            ]
//        }
//    ].forEach((recipe) => {
//        e.recipes.create.compacting(recipe.outputs, recipe.inputs)
//    }),
//
//    [
//        {
//            outputs: [
//                '',
//            ],
//            inputs: [
//                '',
//            ]
//        }
//   ].forEach((recipe) => {
//        e.recipes.create.compacting(recipe.outputs, recipe.inputs).heated()
//    }),
//
//    [
//        {
//            outputs: [
//                '',
//            ],
//            inputs: [
//                '',
//            ]
//        }
//    ].forEach((recipe) => {
//       e.recipes.create.compacting(recipe.outputs, recipe.inputs).superheated()
//    })
//}

//function fillingRecipes(e) {
//    [
//        {
//            output: '',
//            fluid: Fluid.of('', 1000),
//            input: ''
//        }
//    ].forEach((recipe) => {
//        e.recipes.create.filling(recipe.output, [recipe.fluid, recipe.input])
//    })
//}

function mixingRecipes(e) {
    [
        {
            inputs: [
                {
                    fluid: 'tfmg:gasoline',
                    amount: 500
                },
                {
                    fluid: 'tfmg:kerosene',
                    amount: 500
                }
            ],
            outputs: [
                {
                    fluid: 'ad_astra:fuel',
                    amount: 1000
                }
            ],
            time: 1000
        },
        {
            inputs: {
                fluid: 'ad_astra:oil',
                amount: 1000
            },
            outputs: {
                fluid: 'tfmg:crude_oil',
                amount: 1000
            }
        },
        {
            inputs: [
                {
                    fluid: 'minecraft:water',
                    amount: 1000
                },
                'create:powdered_obsidian'
            ],
            outputs: {
                fluid: 'planetsandportals:obsidian_solution',
                amount: 1000
            }
        },
        {
            inputs: [
                'planetsandportals:grout',
                'planetsandportals:andesite_dust'
            ],
            outputs: 'create:andesite_alloy'
        }
    ].forEach((recipe) => {
        e.recipes.create.mixing(recipe.outputs, recipe.inputs).processingTime(recipe.time ?? 100)
    }),

    [
        {
            outputs: [
                'mekanism:ingot_lead',
            ],
            inputs: [
                'mekanism:dust_lead',
            ]
        },
        {
            outputs: [
                'mekanism:dust_refined_obsidian',
            ],
            inputs: [
                'mekanism:dust_obsidian',
                'ad_astra:ostrum_nugget'
            ]
        },
        {
            outputs: [
                'mekanism:ingot_uranium',
            ],
            inputs: [
                'mekanism:dust_uranium',
            ]
        },
        {
            outputs: [
                'mekanism:alloy_infused'
            ],
            inputs: [
                'create:andesite_alloy',
                'mekanism:enriched_redstone'
            ]
        },
        {
            inputs: [
                {
                    fluid: 'minecraft:water',
                    amount: 100
                },
                'create:crushed_raw_copper'
            ],
            outputs: {
                fluid: 'planetsandportals:copper_slurry',
                amount: 100
            }
        }
    ].forEach((recipe) => {
        e.recipes.create.mixing(recipe.outputs, recipe.inputs).heated().processingTime(recipe.time ?? 100)
    })
//
//    [
//        {
//            outputs: [
//                '',
//            ],
//            inputs: [
//                '',
//            ]
//       }
//    ].forEach((recipe) => {
//        e.recipes.create.mixing(recipe.outputs, recipe.inputs).superheated()
//   })
}

function hauntingRecipes(e) {
    [
        {
            input: 'minecraft:glass',
            output: 'create:framed_glass'
        },
        {
            input: 'minecraft:charcoal',
            output: 'minecraft:coal'
        },
        {
            input: 'minecraft:blackstone',
            output: 'minecraft:netherrack'
        },
    ].forEach((recipe) => {
        e.recipes.create.haunting(recipe.output, recipe.input)
    })
}

function deployingRecipes(e) {
    [
        {
            input: 'create:railway_casing',
            heldItem: 'tfmg:cast_iron_ingot',
            output: 'tfmg:coke_oven'
        },
        {
            input: 'brewery:wooden_brewingstation',
            heldItem: 'minecraft:copper_block',
            output: 'brewery:copper_brewingstation'
        },
        {
            input: 'brewery:silo_wood',
            heldItem: 'minecraft:copper_block',
            output: 'brewery:silo_copper'
        },
    ].forEach((recipe) => {
        e.recipes.create.deploying(recipe.output, [recipe.input, recipe.heldItem])
    })

//    [
//        {
//            input: '',
//            heldItem: '',
//            output: ''
//        }
//    ].forEach((recipe) => {
//        e.recipes.create.deploying(recipe.output, [recipe.input, recipe.heldItem]).keepHeldItem()
//    })
}

function mechanicalCraftingRecipes(e) {
    [
        {
            pattern: [
                'ABA',
                'BAB',
                'ABA'
            ],
            key: {
                A: 'tfmg:heavy_plate',
                B: 'tfmg:cast_iron_ingot'
            },
            output: 'ad_astra:launch_pad'
        },
        {
            pattern: [
                'ABA',
                'BCB',
                'ABA'
            ],
            key: {
                A: 'tfmg:steel_ingot',
                B: 'tfmg:steel_pipe',
                C: 'tfmg:steel_fluid_tank'
            },
            output: 'tfmg:steel_distillation_output'
        },
        {
            pattern: [
                ' AB',
                'CDA',
                'EC'
            ],
            key: {
                A: 'mekanism:ingot_osmium',
                B: 'mekanism:block_osmium',
                C: 'mekanism:dust_diamond',
                D: 'createoreexcavation:drill',
                E: 'create_new_age:overcharged_diamond'
            },
            output: 'createoreexcavation:diamond_drill'
        },
        {
            pattern: [
                '  A  ',
                ' BCB ',
                ' DED ',
                ' FGF ',
                'HFIFH',
                'H J H'
            ],
            key: {
                A: 'ad_astra:rocket_nose_cone',
                B: 'create:item_vault',
                C: 'ad_astra:oxygen_loader',
                D: 'railways:fuel_tank',
                E: 'mekanism:structural_glass',
                F: 'tfmg:heavy_machinery_casing',
                G: 'create:white_seat',
                H: 'ad_astra:rocket_fin',
                I: 'immersive_aircraft:steel_boiler',
                J: 'ad_astra:steel_engine'
            },
            output: 'ad_astra:tier_1_rocket'
        },
        {
            pattern: [
                '  A  ',
                ' BCB ',
                ' DED ',
                ' FGF ',
                'HFIFH',
                'H J H'
            ],
            key: {
                A: 'ad_astra:rocket_nose_cone',
                B: 'mekanism:advanced_bin',
                C: 'ad_astra:oxygen_loader',
                D: 'mekanism:advanced_fluid_tank',
                E: 'mekanism:structural_glass',
                F: 'ad_astra:desh_plateblock',
                G: 'create:white_seat',
                H: 'ad_astra:rocket_fin',
                I: 'ad_astra:gravity_normalizer',
                J: 'ad_astra:desh_engine'
            },
            output: 'ad_astra:tier_2_rocket'
        },
    ].forEach((recipe) => {
        e.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key)
    })
}

function millingRecipes (e) {
    [
        {
            input: 'minecraft:raw_copper',
            output: 'create:crushed_raw_copper'
        },
        {
            input: 'minecraft:raw_iron',
            output: 'create:crushed_raw_iron'
        },
        {
            input: 'create:raw_zinc',
            output: 'create:crushed_raw_zinc'
        },
    ].forEach((recipe) => {
        e.recipes.create.milling(recipe.output, recipe.input)
    })
}

function crushingRecipes(e) {
    [
        {
            input: 'minecraft:raw_copper',
            outputs: [
                'create:crushed_raw_copper',
                Item.of('create:crushed_raw_copper').withChance(0.5),
                Item.of('create:crushed_raw_copper').withChance(0.05),
                Item.of('create:experience_nugget').withChance(0.75)
            ]
        },
        {
            input: 'minecraft:andesite',
            outputs: 'planetsandportals:andesite_dust'
        },
        {
            input: 'ad_astra:raw_desh',
            outputs: [
                'planetsandportals:crushed_desh_ore',
                Item.of('create:experience_nugget').withChance(0.75)
            ]
        },
        {
            input: 'ad_astra:raw_ostrum',
            outputs: [
                'planetsandportals:crushed_ostrum_ore',
                Item.of('create:experience_nugget').withChance(0.75)
            ]
        },
        {
            input: 'ad_astra:raw_calorite',
            outputs: [
                'planetsandportals:crushed_calorite_ore',
                Item.of('create:experience_nugget').withChance(0.75)
            ]
        },
        {
            input: 'create:crushed_raw_osmium',
            outputs: [
                'mekanism:dust_osmium',
                Item.of('create:experience_nugget').withChance(0.75)
            ]
        },
        {
            input: 'create:crushed_raw_lead',
            outputs: [
                'mekanism:dust_lead',
                Item.of('create:experience_nugget').withChance(0.75)
            ]
        },
        {
            input: 'create:crushed_raw_uranium',
            outputs: [
                'mekanism:dust_uranium',
                Item.of('create:experience_nugget').withChance(0.75)
            ]
        },
    ].forEach((recipe) => {
        e.recipes.create.crushing(recipe.outputs, recipe.input)
    })
}

function washingRecipes (e) {
    [
        {
            input: 'create:crushed_raw_copper',
            outputs: [
                '3x create:copper_nugget',
                Item.of('minecraft:clay').withChance(0.2)
            ]
        },
        {
            input: 'planetsandportals:crushed_ostrum_ore',
            outputs: [
                '9x ad_astra:ostrum_nugget',
                Item.of('ad_astra:ice_shard').withChance(0.1)
            ]
        },
        {
            input: 'planetsandportals:crushed_calorite_ore',
            outputs: [
                '9x ad_astra:calorite_nugget',
                Item.of('ae2:certus_quartz_dust').withChance(0.1)
            ]
        },
    ].forEach((recipe) => {
        e.recipes.create.splashing(recipe.outputs, recipe.input)
    })
}

function energisingRecipes(e) {
    [
        {
            input: 'tfmg:steel_ingot',
            output: 'planetsandportals:steel_electrode',
            energy: 5000
        },
    ].forEach((recipe) => {
        e.custom({
            "type": "create_new_age:energising",
            "energy_needed": recipe.energy,
            "ingredients": [
                {
                  "item": recipe.input
                }
            ],
            "results": [
              {
                "item": recipe.output
              }
            ]
        })
    })
}