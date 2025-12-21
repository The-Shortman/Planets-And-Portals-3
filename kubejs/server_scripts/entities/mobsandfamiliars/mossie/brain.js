(function mobsandfamiliarsEntityAI() {
  EntityJSEvents.addGoalSelectors("mobsandfamiliars:mossie", (event) => {
    let Player = Java.loadClass("net.minecraft.world.entity.player.Player");
    event.panic(1, 0.5);
    event.floatSwim(1);
    event.waterAvoidingRandomStroll(5, 0.4, 0.8);
    event.lookAtEntity(6, Player, 8, 0.8, false);
    event.randomLookAround(7);
  });
  EntityJSEvents.buildBrain("mobsandfamiliars:mossie", (event) => {
    const activitybehaviors = [
      event.behaviors.animalMakeLove("mobsandfamiliars:mossie", 10),
      event.behaviors.followTemptation((entity) => {
        return 1;
      }),
    ];
  });
  EntityJSEvents.buildBrainProvider("mobsandfamiliars:mossie", (event) => {
    event.addSensor("nearest_adult");
    event.addMemory("angry_at");
  });
})();
