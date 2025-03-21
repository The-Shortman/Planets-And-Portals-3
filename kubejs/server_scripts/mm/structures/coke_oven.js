MMEvents.createStructures (event => {
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
})