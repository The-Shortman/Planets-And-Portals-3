(function fuelMixerPonder() {
  Ponder.registry((event) => {
    // Construction
    event
      .create("fuel_mixer_controller")
      .scene(
        "fuel_mixer_structure",
        "Building the Fuel Mixer",
        "planetsandportals:fuel_mixer_structure",
        (scene, util) => {
          scene.showBasePlate();
          scene.idle(10);

          for (let z = 0; z < 4; z++) {
            for (let x = 0; x < 4; x++) {
              scene.world.showSection([x, 1, z], Facing.DOWN);
              scene.idle(1);
            }
          }

          scene.idle(10);

          scene
            .text(40, "Controller block", [2.5, 1.5, 1])
            .colored(PonderPalette.MEDIUM);
          scene.idle(50);
          scene
            .text(40, "Fluid input", [1.5, 2, 1.5])
            .colored(PonderPalette.INPUT);
          scene.idle(50);
          scene
            .text(40, "Fluid input", [3.5, 2, 1.5])
            .colored(PonderPalette.INPUT);
          scene.idle(50);
          scene
            .text(40, "Fluid output", [2.5, 2, 3.5])
            .colored(PonderPalette.OUTPUT);
          scene.idle(50);

          for (let z = 0; z < 4; z++) {
            for (let x = 0; x < 4; x++) {
              scene.world.showSection([x, 2, z], Facing.DOWN);
              scene.idle(1);
            }
          }

          scene.idle(10);

          for (let z = 0; z < 4; z++) {
            for (let x = 0; x < 4; x++) {
              scene.world.showSection([x, 3, z], Facing.DOWN);
              scene.idle(1);
            }
          }

          scene.idle(10);

          scene
            .text(40, "Energy input", [2.5, 4, 3.5])
            .colored(PonderPalette.INPUT)
            .attachKeyFrame();

          scene.idle(50);
        }
      );
  });
})();
