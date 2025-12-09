MMEvents.createStructures(event => {
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
});

MMEvents.createProcesses(event => {
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
});