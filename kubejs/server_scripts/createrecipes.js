ServerEvents.recipes(e => {
//    compactingRecipes(e);
//    fillingRecipes(e);
    mixingRecipes(e);
    hauntingRecipes(e);
    deployingRecipes(e);
    mechanicalCraftingRecipes(e);
    crushingRecipes(e);
    washingRecipes(e);

    ///// Sequenced Assemblies /////

    let placehold = 'create:incomplete_precision_mechanism'

    // TFMG Heavy Plate

    e.recipes.create.sequenced_assembly([
        Item.of('tfmg:heavy_plate'), // Output
    ], 'tfmg:steel_block', [ // Input
        e.recipes.create.pressing('tfmg:unprocessed_heavy_plate', 'tfmg:unprocessed_heavy_plate'),
        e.recipes.create.deploying('tfmg:unprocessed_heavy_plate', ['tfmg:unprocessed_heavy_plate', 'create:sturdy_sheet']),
        e.recipes.create.pressing('tfmg:unprocessed_heavy_plate', 'tfmg:unprocessed_heavy_plate'),
        e.recipes.create.pressing('tfmg:unprocessed_heavy_plate', 'tfmg:unprocessed_heavy_plate')
    ]).transitionalItem('tfmg:unprocessed_heavy_plate').loops(1)

    e.recipes.create.sequenced_assembly([
        Item.of('tfmg:steel_mechanism'), // Output
    ], 'tfmg:heavy_plate', [ // Input
        e.recipes.create.pressing('tfmg:unfinished_steel_mechanism', 'tfmg:unfinished_steel_mechanism'),
        e.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'create:cogwheel']),
        e.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:screw']),
        e.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:screwdriver']).keepHeldItem()
    ]).transitionalItem('tfmg:unfinished_steel_mechanism').loops(4)
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
//            fluid: '',
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
            ]
        },
        {
            inputs: {
                fluid: 'ad_astra:oil',
                amount: 1000
            },
            outputs: {
                fluid: 'tfmg:crude_oil_fluid',
                amount: 1000
            }
        }
    ].forEach((recipe) => {
        e.recipes.create.mixing(recipe.outputs, recipe.inputs)
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
//        }
//    ].forEach((recipe) => {
//        e.recipes.create.mixing(recipe.outputs, recipe.inputs).heated()
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
        }
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
                I: 'create_new_age:reactor_casing',
                J: 'ad_astra:steel_engine'
            },
            output: 'ad_astra:tier_1_rocket'
        },
    ].forEach((recipe) => {
        e.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key)
    })
}

function crushingRecipes(e) {
    [
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
        },{
            input: 'ad_astra:raw_calorite',
            outputs: [
                'planetsandportals:crushed_calorite_ore',
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
            input: 'planetsandportals:crushed_desh_ore',
            outputs: [
                '9x ad_astra:desh_nugget',
                Item.of('ad_astra:cheese').withChance(0.1)
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