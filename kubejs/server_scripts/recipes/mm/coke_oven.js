MMEvents.createStructures(event => {
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
});

MMEvents.createProcesses(event => {
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
        count: 1
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
});

