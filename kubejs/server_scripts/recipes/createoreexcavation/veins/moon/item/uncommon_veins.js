(function coeMoonUncommonVeins() {
  const {
    POOR_VEIN_MULTIPLIER,
    NORMAL_VEIN_MULTIPLIER,
    RICH_VEIN_MULTIPLIER,
    T1_DRILL_MULTIPLIER,
    T2_DRILL_MULTIPLIER,
    T3_DRILL_MULTIPLIER,
  } = global.server;

  ServerEvents.recipes((event) => {
    const moonUncommonVeins = [
      {
        // CHEESE
        id: "cheese_mo",
        resource: "ad_astra:cheese",
        name: "Cheese (Moon)",
        salt: 847807,
        baseTime: 600,
      },
      {
        // IRON
        id: "iron_mo",
        resource: "minecraft:raw_iron",
        name: "Raw Iron (Moon)",
        salt: 261284,
        baseTime: 600,
      },
    ];

    moonUncommonVeins.forEach((vein) => {
      // Generate poor grade veins
      event.recipes.createoreexcavation
        .vein(`Poor ${vein.name}`, vein.resource)
        .placement(75, 45, vein.salt)
        .biomeWhitelist("planetsandportals:is_moon")
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
        .biomeWhitelist("planetsandportals:is_moon")
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
