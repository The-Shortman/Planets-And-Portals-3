(function coeEarthUncommonVeins() {
  const {
    POOR_VEIN_MULTIPLIER,
    NORMAL_VEIN_MULTIPLIER,
    RICH_VEIN_MULTIPLIER,
    T1_DRILL_MULTIPLIER,
    T2_DRILL_MULTIPLIER,
    T3_DRILL_MULTIPLIER,
  } = global.server;

  ServerEvents.recipes((event) => {
    const earthUncommonVeins = [
      {
        // TIN
        id: "tin_ov",
        resource: "mekanism:raw_tin",
        name: "Raw Tin (Earth)",
        salt: 481224,
        baseTime: 600,
      },
      {
        // THORIUM
        id: "thorium_ov",
        resource: "create_new_age:thorium",
        name: "Raw Thorium (Earth)",
        salt: 552261,
        baseTime: 600,
      },
      {
        // REDSTONE
        id: "redstone_ov",
        resource: "createoreexcavation:raw_redstone",
        name: "Raw Redstone (Earth)",
        salt: 379394,
        baseTime: 600,
      },
      {
        // GOLD
        id: "gold_ov",
        resource: "minecraft:raw_gold",
        name: "Raw Gold (Earth)",
        salt: 659543,
        baseTime: 600,
      },
    ];

    earthUncommonVeins.forEach((vein) => {
      // Generate poor grade veins
      event.recipes.createoreexcavation
        .vein(`Poor ${vein.name}`, vein.resource)
        .placement(75, 45, vein.salt)
        .biomeWhitelist("minecraft:is_overworld")
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

      // Generate rich grade veins
      event.recipes.createoreexcavation
        .vein(`Rich ${vein.name}`, vein.resource)
        .placement(105, 75, vein.salt - 1)
        .biomeWhitelist("minecraft:is_overworld")
        .id(`createoreexcavation:ore_vein_type/hi_${vein.id}`);

      event.recipes.createoreexcavation
        .drilling(
          Item.of(vein.resource, RICH_VEIN_MULTIPLIER),
          `createoreexcavation:ore_vein_type/hi_${vein.id}`,
          vein.baseTime / T1_DRILL_MULTIPLIER
        )
        .drill("#createoreexcavation:tier_1_drill")
        .id(`createoreexcavation:hi_${vein.id}/t1`);

      event.recipes.createoreexcavation
        .drilling(
          Item.of(vein.resource, RICH_VEIN_MULTIPLIER),
          `createoreexcavation:ore_vein_type/hi_${vein.id}`,
          vein.baseTime / T2_DRILL_MULTIPLIER
        )
        .drill("#createoreexcavation:tier_2_drill")
        .id(`createoreexcavation:hi_${vein.id}/t2`);

      event.recipes.createoreexcavation
        .drilling(
          Item.of(vein.resource, RICH_VEIN_MULTIPLIER),
          `createoreexcavation:ore_vein_type/hi_${vein.id}`,
          vein.baseTime / T3_DRILL_MULTIPLIER
        )
        .drill("#createoreexcavation:tier_3_drill")
        .id(`createoreexcavation:hi_${vein.id}/t3`);
    });
  });
})();
