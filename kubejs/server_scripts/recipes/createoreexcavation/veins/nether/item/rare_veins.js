(function coeNetherRareVeins() {
  const {
    POOR_VEIN_MULTIPLIER,
    NORMAL_VEIN_MULTIPLIER,
    RICH_VEIN_MULTIPLIER,
    T1_DRILL_MULTIPLIER,
    T2_DRILL_MULTIPLIER,
    T3_DRILL_MULTIPLIER,
  } = global.server;

  ServerEvents.recipes((event) => {
    const netherRareVeins = [
      {
        // ANCIENT DEBRIS
        id: "debris_ne",
        resource: "minecraft:ancient_debris",
        name: "Ancient Debris (Nether)",
        salt: 124718,
        baseTime: 600,
      },
    ];

    netherRareVeins.forEach((vein) => {
      // Generate poor grade veins
      event.recipes.createoreexcavation
        .vein(`Poor ${vein.name}`, vein.resource)
        .placement(135, 110, vein.salt)
        .biomeWhitelist("minecraft:is_nether")
        .id(`createoreexcavation:ore_vein_type/lo_${vein.id}`);

      event.recipes.createoreexcavation
        .drilling(
          Item.of(vein.resource, POOR_VEIN_MULTIPLIER),
          `createoreexcavation:ore_vein_type/lo_${vein.id}`,
          vein.baseTime / T1_DRILL_MULTIPLIER
        )
        .drill("#createoreexcavation:tier_1_drill")
        .id(`createoreexcavation:lo_${vein.id}/t1`);

      event.recipes.createoreexcavation
        .drilling(
          Item.of(vein.resource, POOR_VEIN_MULTIPLIER),
          `createoreexcavation:ore_vein_type/lo_${vein.id}`,
          vein.baseTime / T2_DRILL_MULTIPLIER
        )
        .drill("#createoreexcavation:tier_2_drill")
        .id(`createoreexcavation:lo_${vein.id}/t2`);

      event.recipes.createoreexcavation
        .drilling(
          Item.of(vein.resource, POOR_VEIN_MULTIPLIER),
          `createoreexcavation:ore_vein_type/lo_${vein.id}`,
          vein.baseTime / T3_DRILL_MULTIPLIER
        )
        .drill("#createoreexcavation:tier_3_drill")
        .id(`createoreexcavation:lo_${vein.id}/t3`);
    });
  });
})();
