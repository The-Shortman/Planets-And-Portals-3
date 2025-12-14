(function blastFurnacePonderRegistry() {
  Ponder.registry((event) => {
    // Construction
    event
      .create("mm:blast_furnace_controller")
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

          scene
            .text(40, "Controller block", [2.5, 1.5, 1])
            .colored(PonderPalette.MEDIUM);
          scene.idle(50);
          scene
            .text(40, "Item input", [1, 1.5, 2.5])
            .colored(PonderPalette.INPUT);
          scene.idle(50);
          scene
            .text(40, "Item input", [3.5, 2, 2.5])
            .colored(PonderPalette.INPUT);
          scene.idle(50);
          scene
            .text(40, "Fluid output", [2.5, 2, 3.5])
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

    // Usage
    e.create("mm:blast_furnace_controller").scene(
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

        scene
          .text(
            100,
            "Input blasting mixture in one side, and coal coke dust in the other.",
            [3.5, 2.5, 3.5]
          )
          .colored(PonderPalette.INPUT);
        scene.idle(110);

        scene.world.hideSection([4, 2, 2, 6, 5, 4], Facing.NORTH);
        scene.idle(5);
        scene.world.showSection([0, 1, 6, 10, 1, 10], Facing.DOWN);
        scene.world.showSection([2, 1, 4, 2, 1, 5], Facing.DOWN);
        scene.idle(10);

        scene.world.showSection([4, 2, 7, 5, 4, 7], Facing.NORTH);
        scene.idle(10);
        scene
          .text(
            120,
            "Output fluid can be cast into solid metal with a casting basin and casting spout.",
            [5, 4.5, 7.5]
          )
          .colored(PonderPalette.OUTPUT)
          .attachKeyFrame();
        scene.idle(130);

        scene.world.showSection([5, 2, 5, 5, 6, 6], Facing.WEST);
        scene.idle(10);
        scene
          .text(
            110,
            "Fluid can be pumped out from the rear port.",
            [5, 2.5, 5.5]
          )
          .colored(PonderPalette.OUTPUT)
          .attachKeyFrame();
        scene.idle(90);

        scene.world.showSection([4, 2, 2, 6, 5, 4], Facing.SOUTH);
      }
    );
  });
})();
