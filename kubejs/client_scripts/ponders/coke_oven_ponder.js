(function cokeOvenPonderRegistry() {
  Ponder.registry((event) => {
    // Construction
    event
      .create("mm:coke_oven_controller")
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
          scene
            .text(40, "Item output port", [2, 1.5, 1.5])
            .colored(PonderPalette.OUTPUT)
            .attachKeyFrame();

          scene.idle(40);

          for (let z = 0; z < 5; z++) {
            scene.world.showSection([2, 2, z], Facing.DOWN);
            scene.idle(3);
          }
          scene
            .text(60, "Controller block", [2, 2.5, 1.5])
            .colored(PonderPalette.MEDIUM)
            .attachKeyFrame();

          scene.idle(40);

          for (let z = 0; z < 5; z++) {
            scene.world.showSection([2, 3, z], Facing.DOWN);
            scene.idle(3);
          }
          scene
            .text(80, "Fluid (byproduct) output port", [2, 3.5, 1.5])
            .colored(PonderPalette.OUTPUT)
            .attachKeyFrame();
          scene
            .text(80, "Item input port", [2, 3.5, 3.5])
            .colored(PonderPalette.INPUT);
        }
      );

    // Usage
    event
      .create("mm:coke_oven_controller")
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
                scene.idle(1);
              }
            }
          }

          scene.text(
            80,
            "Coke ovens can be placed side by side in long production lines.",
            [6, 3.5, 5.5]
          );
          scene.idle(80);

          scene.world.showSection([6, 5, 7, 10, 6, 11], Facing.DOWN);
          scene
            .text(
              120,
              "Coal can be inserted from the back input port.",
              [6, 5.5, 7.5]
            )
            .attachKeyFrame();
          scene.idle(10);

          scene.world.showSection([6, 1, 0, 10, 2, 4], Facing.SOUTH);
          scene.text(
            120,
            "Coke coal can be extracted from the lower output port.",
            [6, 2.5, 4.5]
          );
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
          scene
            .text(80, "Creosote is also produced in the Ovens.", [6, 4.5, 5.5])
            .attachKeyFrame();
          scene.idle(80);
          scene.text(
            60,
            "This can be stored for usage in crafting...",
            [1, 3.5, 5.5]
          );
          scene.idle(70);
          scene.text(60, "...or burned off with a Flarestack.", [1, 7.5, 5.5]);
          scene.idle(70);

          scene.world.showSection([6, 4, 4, 10, 4, 4], Facing.SOUTH);
          scene.world.showSection([4, 4, 3, 10, 5, 3], Facing.SOUTH);
          scene
            .text(60, "Carbon Dioxide is a waste product.", [4, 5.5, 3.5])
            .attachKeyFrame();
          scene.idle(70);
          scene.text(
            80,
            "Best to release it into the atmosphere with an Exhaust.",
            [4, 5.5, 3.5]
          );
        }
      );
  });
})();
