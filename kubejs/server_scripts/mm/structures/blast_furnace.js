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
})