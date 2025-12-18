(function coeMoonCommonVeins() {
  const {
    POOR_VEIN_MULTIPLIER,
    NORMAL_VEIN_MULTIPLIER,
    RICH_VEIN_MULTIPLIER,
    T1_DRILL_MULTIPLIER,
    T2_DRILL_MULTIPLIER,
    T3_DRILL_MULTIPLIER,
  } = global.server;

  ServerEvents.recipes((event) => {
    const moonCommonVeins = [
      {
        // OSMIUM
        id: "osmium_mo",
        resource: "mekanism:raw_osmium",
        name: "Raw Osmium (Moon)",
        salt: 465271,
        baseTime: 600,
      },
      {
        // DESH
        id: "desh_mo",
        resource: "ad_astra:raw_desh",
        name: "Raw Desh (Moon)",
        salt: 146084,
        baseTime: 600,
      },
    ];

    moonCommonVeins.forEach((vein) => {
      // Generate poor grade veins
      event.recipes.createoreexcavation
        .vein(`Poor ${vein.name}`, vein.resource)
        .placement(30, 15, vein.salt)
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

      // Generate normal grade veins
      event.recipes.createoreexcavation
        .vein(`Normal ${vein.name}`, vein.resource)
        .placement(45, 30, vein.salt + 1)
        .biomeWhitelist("planetsandportals:is_moon")
        .id(`createoreexcavation:ore_vein_type/mi_${vein.id}`);

      event.recipes.createoreexcavation
        .drilling(
          Item.of(vein.resource, NORMAL_VEIN_MULTIPLIER),
          `createoreexcavation:ore_vein_type/mi_${vein.id}`,
          vein.baseTime / T1_DRILL_MULTIPLIER
        )
        .drill("#createoreexcavation:tier_1_drill")
        .id(`createoreexcavation:mi_${vein.id}/t1`);

      event.recipes.createoreexcavation
        .drilling(
          Item.of(vein.resource, NORMAL_VEIN_MULTIPLIER),
          `createoreexcavation:ore_vein_type/mi_${vein.id}`,
          vein.baseTime / T2_DRILL_MULTIPLIER
        )
        .drill("#createoreexcavation:tier_2_drill")
        .id(`createoreexcavation:mi_${vein.id}/t2`);

      event.recipes.createoreexcavation
        .drilling(
          Item.of(vein.resource, NORMAL_VEIN_MULTIPLIER),
          `createoreexcavation:ore_vein_type/mi_${vein.id}`,
          vein.baseTime / T3_DRILL_MULTIPLIER
        )
        .drill("#createoreexcavation:tier_3_drill")
        .id(`createoreexcavation:mi_${vein.id}/t3`);

      // Generate rich grade veins
      event.recipes.createoreexcavation
        .vein(`Rich ${vein.name}`, vein.resource)
        .placement(60, 45, vein.salt - 1)
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
