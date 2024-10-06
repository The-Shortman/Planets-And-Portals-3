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
					scene.world.showSection([2, 1, z], Facing.DOWN);
				scene.idle(3);
				}
				scene.text(40, "Item output port", [2, 1.5, 1.5])
					.colored(PonderPalette.OUTPUT)
					.attachKeyFrame();

				scene.idle(40)

				for (let z = 0; z < 5; z++) {
					scene.world.showSection([2, 2, z], Facing.DOWN);
				scene.idle(3);
				}
				scene.text(60, "Controller block", [2, 2.5, 1.5])
					.colored(PonderPalette.MEDIUM)
					.attachKeyFrame();

				scene.idle(40)

				for (let z = 0; z < 5; z++) {
					scene.world.showSection([2, 3, z], Facing.DOWN);
				scene.idle(3);
				}
				scene.text(80, "Fluid (byproduct) output port", [2, 3.5, 1.5])
					.colored(PonderPalette.OUTPUT)
					.attachKeyFrame();
				scene.text(80, "Item input port", [2, 3.5, 3.5])
					.colored(PonderPalette.INPUT);
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

				scene.text(80, "Coke ovens can be placed side by side in long production lines.", [6, 3.5, 5.5]);
				scene.idle(80);

				scene.world.showSection([6, 5, 7, 10, 6, 11], Facing.DOWN);
				scene.text(120, "Coal can be inserted from the back input port.", [6, 5.5, 7.5])
					.attachKeyFrame();
				scene.idle(10);

				scene.world.showSection([6, 1, 0, 10, 2, 4], Facing.SOUTH);
				scene.text(120, "Coke coal can be extracted from the lower output port.", [6, 2.5, 4.5]);
				scene.idle(110);

				for (let x = 1; x < 4; x++) {
					for (let z = 5; z < 8; z++) {
						for (let y = 1; y < 5; y++) {
							scene.world.showSection([x, y, z], Facing.DOWN);
							scene.idle(1);
						}
					}
				}

				scene.world.showSection([0, 5, 4, 10, 7, 5], Facing.DOWN);
				scene.text(80, "Creosote is also produced in the Ovens.", [6, 4.5, 5.5])
					.attachKeyFrame();
				scene.idle(80);
				scene.text(60, "This can be stored for usage in crafting...", [1, 3.5, 5.5]);
				scene.idle(70);
				scene.text(60, "...or burned off with a Flarestack.", [1, 7.5, 5.5]);
				scene.idle(70);

				scene.world.showSection([6, 4, 4, 10, 4, 4], Facing.SOUTH);
				scene.world.showSection([4, 4, 3, 10, 5, 3], Facing.SOUTH);
				scene.text(60, "Carbon Dioxide is a waste product.", [4, 5.5, 3.5])
					.attachKeyFrame();
				scene.idle(70);
				scene.text(80, "Best to release it into the atmosphere with an Exhaust.", [4, 5.5, 3.5]);
			}
		);
	
	e.create("mm:blast_furnace_controller")
		.scene(
			"blast_furnace_structure",
			"Building the Blast Furnace",
			"planetsandportals:blast_furnace_structure",
			(scene, util) => {
				scene.showBasePlate();
				scene.idle(10);

				for (let z = 0; z < 4; z++) {
					for (let x = 0; x < 4; x++) {
						scene.world.showSection([x, 1, z], Facing.DOWN);
						scene.idle(1);
					}
				}

				scene.text(40, "Controller block", [2.5, 1.5, 1])
					.colored(PonderPalette.MEDIUM);
				scene.idle(50);
				scene.text(40, "Item input", [1, 1.5, 2.5])
					.colored(PonderPalette.INPUT);
				scene.idle(50);
				scene.text(40, "Item input", [3.5, 2, 2.5])
					.colored(PonderPalette.INPUT);
				scene.idle(50);
				scene.text(40, "Fluid output", [2.5, 2, 3.5])
					.colored(PonderPalette.OUTPUT);
				scene.idle(50);

				for (let z = 0; z < 4; z++) {
					for (let x = 0; x < 4; x++) {
						scene.world.showSection([x, 2, z], Facing.DOWN);
					}
					scene.idle(1);
				}
				scene.idle(20);

				for (let z = 0; z < 4; z++) {
					for (let x = 0; x < 4; x++) {
						scene.world.showSection([x, 3, z], Facing.DOWN);
					}
					scene.idle(1);
				}
				scene.idle(20);

				for (let z = 0; z < 4; z++) {
					for (let x = 0; x < 4; x++) {
						scene.world.showSection([x, 4, z], Facing.DOWN);
					}
					scene.idle(1);
				}
			}
		);

	e.create("mm:blast_furnace_controller")
		.scene(
			"blast_furnace_usage",
			"Using the Blast Furnace",
			"planetsandportals:blast_furnace_usage",
			(scene, util) => {
				scene.showBasePlate();
				scene.idle(10);

				scene.world.showSection([0, 1, 0, 10, 1, 3], Facing.DOWN);
				scene.world.showSection([3, 1, 4, 7, 1, 5], Facing.DOWN);
				scene.idle(5);

				for (let x = 4; x < 7; x++) {
					for (let z = 2; z < 5; z++) {
						for (let y = 2; y < 6; y++) {
							scene.world.showSection([x, y, z], Facing.DOWN);
							scene.idle(1);
						}
					}
				}
				scene.idle(10);

				scene.world.showSection([3, 2, 3], Facing.EAST);
				scene.world.showSection([7, 2, 3], Facing.WEST);
				scene.idle(10);

				scene.text(100, "Input blasting mixture in one side, and coal coke dust in the other.", [3.5, 2.5, 3.5])
					.colored(PonderPalette.INPUT);
				scene.idle(110);

				scene.world.hideSection([4, 2, 2, 6, 5, 4], Facing.NORTH);
				scene.idle(5);
				scene.world.showSection([0, 1, 6, 10, 1, 10], Facing.DOWN);
				scene.world.showSection([2, 1, 4, 2, 1, 5], Facing.DOWN);
				scene.idle(10);

				scene.world.showSection([4, 2, 7, 5, 4, 7], Facing.NORTH);
				scene.idle(10);
				scene.text(120, "Output fluid can be cast into solid metal with a casting basin and casting spout.", [5, 4.5, 7.5])
					.colored(PonderPalette.OUTPUT)
					.attachKeyFrame();
				scene.idle(130);

				scene.world.showSection([5, 2, 5, 5, 6, 6], Facing.WEST);
				scene.idle(10);
				scene.text(110, "Fluid can be pumped out from the rear port.", [5, 2.5, 5.5])
					.colored(PonderPalette.OUTPUT)
					.attachKeyFrame();
				scene.idle(90);

				scene.world.showSection([4, 2, 2, 6, 5, 4], Facing.SOUTH);
			}
		);
	
	e.create("mm:steel_furnace_controller")
		.scene(
			"steel_furnace_structure",
			"Building the Steel Furnace",
			"planetsandportals:steel_furnace_structure",
			(scene, util) => {
				scene.world.setBlock([5, 5, 3], "mm:steel_furnace_energy_input", false);
				scene.showBasePlate();
				scene.idle(10);

				for (let z = 0; z < 4; z++) {
					for (let x = 0; x < 4; x++) {
						scene.world.showSection([x, 1, z], Facing.DOWN);
						scene.idle(1);
					}
				}

				scene.text(40, "Controller block", [2.5, 1.5, 1])
					.colored(PonderPalette.MEDIUM);
				scene.idle(50);
				scene.text(40, "Item input", [1, 1.5, 2.5])
					.colored(PonderPalette.INPUT);
				scene.idle(50);
				scene.text(40, "Item input", [3.5, 2, 2.5])
					.colored(PonderPalette.INPUT);
				scene.idle(50);
				scene.text(40, "Fluid output", [2.5, 2, 3.5])
					.colored(PonderPalette.OUTPUT);
				scene.idle(50);

				for (let z = 0; z < 4; z++) {
					for (let x = 0; x < 4; x++) {
						scene.world.showSection([x, 2, z], Facing.DOWN);
					}
					scene.idle(1);
				}
				scene.idle(20);

				for (let z = 0; z < 4; z++) {
					for (let x = 0; x < 4; x++) {
						scene.world.showSection([x, 3, z], Facing.DOWN);
					}
					scene.idle(1);
				}
				scene.idle(20);

				for (let z = 0; z < 4; z++) {
					for (let x = 0; x < 4; x++) {
						scene.world.showSection([x, 4, z], Facing.DOWN);
					}
					scene.idle(1);
				}
				scene.idle(20);

				scene.text(80, "Energy input", [5.5, 6, 3.5])
					.colored(PonderPalette.INPUT)
					.attachKeyFrame();
				scene.idle(110);
			}
		);

	e.create("mm:steel_furnace_controller")
		.scene(
			"steel_furnace_usage",
			"Using the Steel Furnace",
			"planetsandportals:steel_furnace_usage",
			(scene, util) => {
				scene.world.setBlock([5, 1, 2], "tfmg:steel_casing", false);
				scene.world.setBlock([5, 5, 3], "mm:steel_furnace_energy_input", false);
				scene.showBasePlate();
				scene.idle(10);

				scene.world.showSection([0, 1, 0, 10, 1, 3], Facing.DOWN);
				scene.world.showSection([3, 1, 4, 7, 1, 5], Facing.DOWN);
				scene.idle(5);

				for (let x = 4; x < 7; x++) {
					for (let z = 2; z < 5; z++) {
						for (let y = 2; y < 6; y++) {
							scene.world.showSection([x, y, z], Facing.DOWN);
							scene.idle(1);
						}
					}
				}
				scene.idle(10);

				scene.world.showSection([3, 2, 3], Facing.EAST);
				scene.world.showSection([7, 2, 3], Facing.WEST);
				scene.idle(10);

				scene.text(100, "Input blasting mixture in one side, and coal coke dust in the other.", [3.5, 2.5, 3.5])
					.colored(PonderPalette.INPUT);
				scene.idle(110);

				scene.text(80, "You will also need to provide power via the top port.", [5.5, 6, 3.5])
					.colored(PonderPalette.INPUT);
				scene.idle(90);

				scene.text(100, "The steel furnace is slightly faster than the blast furnace.", [3.5, 2.5, 3.5])
					.colored(PonderPalette.MEDIUM)
					.attachKeyFrame();
				scene.idle(110);

				scene.text(120, "The steel variant can also manufacture Desh and Osmium. Check EMI for their recipes.", [3.5, 2.5, 3.5])
					.colored(PonderPalette.MEDIUM)
					.attachKeyFrame();
				scene.idle(130);

				scene.world.hideSection([4, 2, 2, 6, 5, 4], Facing.NORTH);
				scene.idle(5);
				scene.world.showSection([0, 1, 6, 10, 1, 10], Facing.DOWN);
				scene.world.showSection([2, 1, 4, 2, 1, 5], Facing.DOWN);
				scene.idle(10);

				scene.world.showSection([4, 2, 7, 5, 4, 7], Facing.NORTH);
				scene.idle(10);
				scene.text(120, "Output fluid can be cast into solid metal with a casting basin and casting spout.", [5, 4.5, 7.5])
					.colored(PonderPalette.OUTPUT)
					.attachKeyFrame();
				scene.idle(130);

				scene.world.showSection([5, 2, 5, 5, 6, 6], Facing.WEST);
				scene.idle(10);
				scene.text(200, "Fluid can be pumped out from the rear port.", [5, 2.5, 5.5])
					.colored(PonderPalette.OUTPUT)
					.attachKeyFrame();
				scene.idle(90);

				scene.world.showSection([4, 2, 2, 6, 5, 4], Facing.SOUTH);
			}
		);
})