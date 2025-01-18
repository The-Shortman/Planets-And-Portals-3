ServerEvents.recipes((e) => {
	[
		{
            pattern: [
                'AAA',
                'BCB',
                'BDB'
            ],
            key: {
                A: 'create:framed_glass',
                B: 'create_new_age:overcharged_iron',
                C: 'create_new_age:basic_solar_heating_plate',
                D: 'create_new_age:heat_pipe'
            },
            output: 'ad_astra:launch_pad'
        },
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
                'EC '
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
                B: 'mekanism:basic_bin',
                C: 'ad_astra:oxygen_loader',
                D: 'mekanism:basic_fluid_tank',
                E: 'mekanism:structural_glass',
                F: 'ad_astra:desh_plateblock',
                G: 'create:white_seat',
                H: 'ad_astra:rocket_fin',
                I: 'ad_astra:gravity_normalizer',
                J: 'ad_astra:desh_engine'
            },
            output: 'ad_astra:tier_2_rocket'
        },
	].forEach((r) => {
		e.recipes.create.mechanical_crafting(r.output, r.pattern, r.key);
	});
});