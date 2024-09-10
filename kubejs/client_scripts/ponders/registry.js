Ponder.registry((e) => {
	e.create("mm:coke_oven_controller")
		.scene(
			"coke_oven_structure",
			"Building the Coke Oven",
			"planetsandportals:coke_oven_structure",
			(scene, util) => {
				scene.showBasePlate();
				scene.idle(10);

				for (let z = 0; z < 5; z++) {
					scene.world.showSection([3, 1, z], Facing.DOWN);
				scene.idle(3);
				}
				scene.text(30, "Item output port", [2, 1, 1]).colored(PonderPalette.OUTPUT).attachKeyFrame();

				scene.idle(5)

				for (let z = 0; z < 5; z++) {
					scene.world.showSection([3, 2, z], Facing.DOWN);
				scene.idle(3);
				}
				scene.text(30, "Controller block", [2, 2, 1]).colored(PonderPalette.MEDIUM).attachKeyFrame();

				scene.idle(5)

				for (let z = 0; z < 5; z++) {
					scene.world.showSection([3, 2, z], Facing.DOWN);
				scene.idle(3);
				}
				scene.text(30, "Fluid (byproduct) output port", [2, 3, 1]).colored(PonderPalette.OUTPUT).attachKeyFrame();
				scene.text(30, "Item output port", [2, 3, 3]).colored(PonderPalette.INPUT);
			}
		);

	e.create("mm:coke_oven_controller")
		.scene(
			"coke_oven_usage",
			"Using the Coke Oven",
			"planetsandportals:coke_oven_usage",
			(scene, util) => {
				scene.showBasePlate();
				scene.idle(10);

				for (let z = 5; z < 8; z++) {
					for (let x = 6; x < 11; x++) {
						for (let y = 1; y < 5; y++) {
							scene.world.showSection([x, y, z], Facing.DOWN);
							scene.idle(1)
						}
					}
				}

				scene.text(60, "Coke ovens can be placed side by side in long production lines.", [6, 3, 5]);
				scene.idle(10);

				scene.world.showSection([6, 5, 7, 10, 6, 11], Facing.DOWN);
				scene.text(40, "Coal can be inseted from the back input port.", [6, 5, 7]).attachKeyFrame();
				scene.idle(10);

				scene.world.showSection([6, 1, 0, 10, 2, 4], Facing.SOUTH);
				scene.text(40, "Coke coal can be extracted from the lower output port.", [6, 2, 4]);
				scene.idle(10);

				for (let x = 1; x < 4; z++) {
					for (let z = 5; z < 8; x++) {
						for (let y = 1; y < 5; y++) {
							scene.world.showSection([x, y, z], Facing.DOWN);
							scene.idle(1)
						}
					}
				}

				scene.world.showSection([0, 5, 4, 10, 7, 5], Facing.DOWN);
				scene.text(40, "Creosote is also produced in the Ovens.", [6, 4, 5]).attachKeyFrame();
				scene.idle(5);
				scene.text(40, "This can be stored for usage in crafting...", [1, 3, 5]);
				scene.text(40, "...or burned off with a Flarestack.", [1, 7, 5]);
				scene.idle(10);

				scene.world.showSection([6, 4, 4, 10, 4, 4], Facing.SOUTH);
				scene.world.showSection([4, 4, 3, 10, 5, 3], Facing.SOUTH);
				scene.text(30, "Carbon Dioxide is a waste product.", [4, 5, 3]).attachKeyFrame();
				scene.text(50, "Best to release it into the atmosphere with an Exhaust.", [4, 5, 3]);
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