(function mobsandfamiliarsEntityRegistry() {
  StartupEvents.registry("entity_type", (event) => {
    const builder = event
      .create("mobsandfamiliars:mossie", "entityjs:animal")
      .modelResource((entity) => {
        return "mobsandfamiliars:geo/entity/mossiemodel.geo.json";
      })
      .animationResource((entity) => {
        return "mobsandfamiliars:animations/entity/mossie.animation.json";
      })
      .addAnimationController("mossieController", 1, (event) => {
        if (event.entity.hurtTime > 8) {
          event.thenPlay("Scared");
        }

        if (event.isMoving()) {
          event.thenLoop("Move");
        } else {
          event.thenLoop("idle");
        }

        return true;
      });
    builder.isPushable(true);
    builder.sized(0.5, 0.3);
    builder.modelSize(1, 1);
    builder.mobCategory("ambient");
    builder.setDeathSound(
      "mobsandfamiliars:sounds/entity/mossiedeathsound.ogg"
    );
    builder.canJump(true);
    builder.setWaterSlowDown(0.6);
    builder.isFood([
      "minecraft:moss_block",
      Ingredient.of("minecraft:moss_block"),
    ]);
    builder.isSleeping((entity) => {
      // Check if the entity has a sleeping position
      // Use information about the LivingEntity provided by the context.
      //Mimics how vanilla does the isSleeping() method.
      return entity.getSleepingPos().isPresent();
    });
    builder.onSpawnChildFromBreeding((context) => {
      // Log a message when the entity breeds with another entity
      console.log(
        `${context.entity} mated with ${context.mate}! OwO what this? *blush*`
      );
    });
    builder.eggItem((item) => {
      return "mobsandfamiliars:static_mossie";
    });
    builder.canBreed((entity) => {
      // For example, check if the entity has reached maturity.
      const baby = entity.isBaby();
      // Assuming we want the entity to be able to breed only if it's an adult
      return baby;
    });
    builder.setBreedOffspring((context) => {
      const { entity, mate, level } = context;
      // Use the context to return a ResourceLocation of an entity to spawn when the entity mates
      return "mobsandfamiliars:mossie"; //Some Resourcelocation representing the entity to spawn.
    });
  });
  //Attributes for the mossies stats.
  EntityJSEvents.createAttributes((event) => {
    event.create("mobsandfamiliars:mossie", (attribute) => {
      attribute.add("minecraft:generic.max_health", 5);
      attribute.add("minecraft:generic.movement_speed", 1);
    });
  });
})();
