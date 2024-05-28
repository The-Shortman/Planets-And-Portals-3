ServerEvents.recipes(e => {
    shapedRecipes(e);
//    shapelessRecipes(e);
    smeltingRecipes(e);
    blastingRecipes(e);
    stonecuttingRecipes(e);
    inputReplacements(e);
})

function shapedRecipes(e) {
    [
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
    ].forEach((recipe) => {
        e.shaped(recipe.output, recipe.pattern, recipe.key)
    })
}

//function shapelessRecipes(e) {
//    [
//        {
//            inputs: [
//                'minecraft:lightning_rod',
//                'tfmg:heavy_machinery_casing'
//            ],
//            output: 'create_new_age:energiser_t1'
//        }
//    ].forEach((recipe) => {
//        e.shapeless(recipe.output, recipe.inputs)
//    })
//}

function smeltingRecipes(e) {
    [
        {
            input: 'planetsandportals:crushed_desh_ore',
            output: 'ad_astra:desh_ingot'
        },
        {
            input: 'planetsandportals:crushed_ostrum_ore',
            output: 'ad_astra:ostrum_ingot'
        },
        {
            input: 'planetsandportals:crushed_calorite_ore',
            output: 'ad_astra:calorite_ingot'
        },
    ].forEach((recipe) => {
        e.smelting(recipe.output, recipe.input)
    })
}

function blastingRecipes(e) {
    [
        {
            input: 'planetsandportals:crushed_desh_ore',
            output: 'ad_astra:desh_ingot'
        },
        {
            input: 'planetsandportals:crushed_ostrum_ore',
            output: 'ad_astra:ostrum_ingot'
        },
        {
            input: 'planetsandportals:crushed_calorite_ore',
            output: 'ad_astra:calorite_ingot'
        },
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
    ].forEach((replace) => {
        e.replaceInput(replace.filter, replace.init, replace.replacement)
    })
}