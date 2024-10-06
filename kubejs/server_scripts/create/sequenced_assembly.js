ServerEvents.recipes ((e) => {

	/// This one is basically 'can't be asked to make helper functions lmao' ///

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
    ]).transitionalItem(hplate).loops(1);

    // Post-moon TFMG heavy plate

    e.recipes.create.sequenced_assembly([
        Item.of('tfmg:heavy_plate'), // Output
    ], 'planetsandportals:steel_electrode', [ // Input
        e.recipes.create.filling(hplate, [hplate, Fluid.of('planetsandportals:obsidian_solution', 500)]),
        e.recipes.create.pressing(hplate, hplate)
    ]).transitionalItem(hplate).loops(1);

    // TFMG Steel Mechanism

    e.recipes.create.sequenced_assembly([
        Item.of('tfmg:steel_mechanism'), // Output
    ], 'tfmg:heavy_plate', [ // Input
        e.recipes.create.cutting(steelmech, steelmech),
        e.recipes.create.deploying(steelmech, [steelmech, 'create:cogwheel']),
        e.recipes.create.deploying(steelmech, [steelmech, 'tfmg:screw']),
        e.recipes.create.deploying(steelmech, [steelmech, 'tfmg:screwdriver']).keepHeldItem()
    ]).transitionalItem(steelmech).loops(4);

    // Early game sturdy sheet (40% chance of failiure)

    e.recipes.create.sequenced_assembly([
        Item.of('create:sturdy_sheet').withChance(0.6),
        Item.of('minecraft:iron_nugget').withChance(0.4) // Output
    ], 'create:powdered_obsidian', [ // Input
        e.recipes.create.deploying(obsheet, [obsheet, 'minecraft:iron_nugget']),
        e.recipes.create.pressing(obsheet, obsheet),
        e.recipes.create.pressing(obsheet, obsheet),
    ]).transitionalItem(obsheet).loops(5);

    // Ad Astra Desh Plate

    e.recipes.create.sequenced_assembly([
        Item.of('ad_astra:desh_plate'), // Output
    ], 'ad_astra:desh_block', [ // Input
        e.recipes.create.pressing(placehold, placehold),
        e.recipes.create.deploying(placehold, [placehold, 'tfmg:heavy_plate']),
        e.recipes.create.pressing(placehold, placehold),
        e.recipes.create.pressing(placehold, placehold)
    ]).transitionalItem(placehold).loops(1);

    // Ad Astra Engine Frame

    e.recipes.create.sequenced_assembly([
        Item.of('ad_astra:engine_frame'), // Output
    ], 'tfmg:heavy_machinery_casing', [ // Input
        e.recipes.create.filling(placehold, [placehold, {fluid: 'tfmg:cooling_fluid', amount: 1000}]),
        e.recipes.create.deploying(placehold, [placehold, 'tfmg:screw']),
        e.recipes.create.deploying(placehold, [placehold, 'tfmg:screwdriver']),
        e.recipes.create.deploying(placehold, [placehold, 'tfmg:steel_truss']),
        e.recipes.create.deploying(placehold, [placehold, 'tfmg:heavy_plate']),
        e.recipes.create.deploying(placehold, [placehold, 'tfmg:heavy_plate']),
        e.recipes.create.deploying(placehold, [placehold, 'tfmg:screw']),
        e.recipes.create.deploying(placehold, [placehold, 'tfmg:screwdriver']),
        e.recipes.create.pressing(placehold, placehold)
    ]).transitionalItem(placehold).loops(1);

})