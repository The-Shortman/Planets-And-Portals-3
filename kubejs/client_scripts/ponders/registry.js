Ponder.registry((e) => {
	e.create("mm:coke_oven_controller")
		.scene(
			"coke_oven_structure",
			"Building the Coke Oven",
			"planetsandportals:coke_oven_structure",
			(scene, util) => {
				const machineBlockPos = [1, 1, 3];
				const multiBlockRange = [
					[1, 1, 1],
					[1, 3, 3]
				]
				const ponderSize = [
					[0, 0, 0],
					[2, 4, 4]
				]
				scene.world.showSection(ponderSize, facing.DOWN);

			}
		);

	e.create("mm:coke_oven_controller")
		.scene(
			"coke_oven_usage",
			"Using the Coke Oven",
			"planetsandportals:coke_oven_usage",
			(scene, util) => {
				scene.showStructure();

			}
		);
	
	e.create("mm:blast_furnace_controller")
		.scene(
			"blast_furnace_structure",
			"Building the Blast Furnace",
			"planetsandportals:blast_furnace_structure",
			(scene, util) => {
				scene.showStructure();

			}
		);

	e.create("mm:blast_furnace_controller")
		.scene(
			"blast_furnace_usage",
			"Using the Blast Furnace",
			"planetsandportals:blast_furnace_usage",
			(scene, util) => {
				scene.showStructure();

			}
		);
	
	e.create("mm:steel_furnace_controller")
		.scene(
			"steel_furnace_structure",
			"Building the Steel Furnace",
			"planetsandportals:steel_furnace_structure",
			(scene, util) => {
				scene.showStructure();

			}
		);

	e.create("mm:steel_furnace_controller")
		.scene(
			"steel_furnace_usage",
			"Using the Steel Furnace",
			"planetsandportals:steel_furnace_usage",
			(scene, util) => {
				scene.showStructure();

			}
		);
})