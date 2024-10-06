MMEvents.createStructures(event => {

	// Coke Oven

	event.create("mm:coke_oven_structure")
		.controllerId("mm:coke_oven_controller")
		.name("Coke Oven")
		.layout(a => {
			a.layer([
				"I",
				"A",
				"F"
			]).layer([
				"A",
				"A",
				"C"
			]).layer([
				"A",
				"A",
				"O"
			]).key("A", {
				block: "mm:coke_oven_filler"
			}).key("I", {
				port: "mm:coke_oven_item",
				input: true
			}).key("O", {
				port: "mm:coke_oven_item",
				input: false
			}).key("F", {
				port: "mm:coke_oven_fluid",
				input: false
			});
		});
    
	// Blast Furnace

	event.create("mm:blast_furnace_structure")
		.controllerId("mm:blast_furnace_controller")
		.name("Blast Furnace")
		.layout(a => {
			a.layer([
				" A ",
				"A A",
				" A "  
			]).layer([
				"BAB",
				"A A",
				"BAB"
			]).layer([
				"BAB",
				"A A",
				"BAB"
			]).layer([
				"BOB",
				"IAI",
				"BCB"
			]).key("A", {
				block: "tfmg:fireproof_bricks"
			}).key("B", {
				block: "tfmg:fireproof_brick_reinforcement"
			}).key("I", {
				port: "mm:blast_furnace_item",
				input: true
			}).key("O", {
				port: "mm:blast_furnace_fluid",
				input: false
			});
		});

    // Steel Furnace

    event.create("mm:steel_furnace_structure")
        .controllerId("mm:steel_furnace_controller")
        .name("Steel Furnace")
        .layout(a => {
            a.layer([
                " A ",
                "AEA",
                " A "
            ]).layer([
                "BAB",
                "A A",
                "BAB"
            ]).layer([
                "BAB",
                "A A",
                "BAB"
            ]).layer([
                "BOB",
                "IAI",
                "BCB"
            ]).key("A", {
                block: "tfmg:heavy_machinery_casing"
            }).key("B", {
                block: "tfmg:steel_casing"
            }).key("E", {
                port: "mm:steel_furnace_energy",
                input: true
            }).key("I", {
                port: "mm:steel_furnace_item",
                input: true
            }).key("O", {
                port: "mm:steel_furnace_fluid",
                input: false
            });
        });

    // Fuel Mixer

    event.create("mm:fuel_mixer_structure")
        .controllerId("mm:fuel_mixer_controller")
        .name("Rocket Fuel Mixer")
        .layout(a => {
            a.layer([
                "AEA",
                "ABA",
                "AAA"
            ]).layer([
                "D D",
                " B ",
                "D D"
            ]).layer([
                "AOA",
                "ABA",
                "ICI"
            ]).key("A", {
                block: "tfmg:steel_casing"
            }).key("B", {
                block: "tfmg:steel_fluid_tank"
            }).key("D", {
                block: "tfmg:industrial_pipe"
            }).key("E", {
                port: "mm:fuel_mixer_energy",
                input: true
            }).key("I", {
                port: "mm:fuel_mixer_fluid",
                input: true
            }).key("O", {
                port: "mm:fuel_mixer_fluid",
                input: false
            })
        });
});

MMEvents.createProcesses(event => {

    // COKE OVEN //

    event.create("mm:coke_oven_coke")
        .structureId("mm:coke_oven_structure")
        .ticks(800)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "minecraft:coal",
                count: 1
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "tfmg:coal_coke",
                count: 112
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:fluid",
                fluid: "tfmg:creosote",
                amount: 250
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:fluid",
                fluid: "tfmg:carbon_dioxide",
                amount: 1500
            }
        });

    // BLAST FURNACE //

    event.create("mm:blast_furnace_steel")
        .structureId("mm:blast_furnace_structure")
        .ticks(200)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "tfmg:blasting_mixture",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "tfmg:coal_coke_dust",
                count: 3
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:fluid",
                fluid: "tfmg:molten_steel",
                amount: 112
            }
        });

    // STEEL FURNACE //

    event.create("mm:steel_furnace_steel")
        .structureId("mm:steel_furnace_structure")
        .ticks(150)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "tfmg:blasting_mixture",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "tfmg:coal_coke_dust",
                count: 3
            }
        })
        .input({
            type: "mm:input/consume",
            per_tick: true,
            ingredient: {
                type: "mm:energy",
                amount: 20
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:fluid",
                fluid: "tfmg:molten_steel",
                amount: 112
            }
        });

    event.create("mm:steel_furnace_desh")
        .structureId("mm:steel_furnace_structure")
        .ticks(200)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "mekanism:dust_osmium",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "planetsandportals:crushed_desh_ore",
                count: 3
            }
        })
        .input({
            type: "mm:input/consume",
            per_tick: true,
            ingredient: {
                type: "mm:energy",
                amount: 20
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:fluid",
                fluid: "planetsandportals:molten_deshmium",
                amount: 112
            }
        });

    event.create("mm:steel_furnace_osmium")
        .structureId("mm:steel_furnace_structure")
        .ticks(200)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "planetsandportals:desh_dust",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "create:crushed_raw_osmium",
                count: 3
            }
        })
        .input({
            type: "mm:input/consume",
            per_tick: true,
            ingredient: {
                type: "mm:energy",
                amount: 20
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:fluid",
                fluid: "planetsandportals:molten_osmish",
                amount: 112
            }
        });

    // FUEL MIXER //

    event.create("fuel_mixer_fuel")
        .structureId("mm:fuel_mixer_structure")
        .ticks(100)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "tfmg:kerosene",
                amount: 500
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "tfmg:gasoline",
                amount: 500
            }
        })
        .input({
            type: "mm:input/consume",
            per_tick: true,
            ingredient: {
                type: "mm:energy",
                amount: 20
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:fluid",
                fluid: "planetsandportals:hydrocarbon_fuel",
                amount: 1000
            }
        });
});