// This script took way too many braincells from me what the hell was I thinking 'oh yeah lets make it easier to add more veins in the future' WRONG!!!!

//TODO: Clean this up holy hell

(function coeVeins() {
  ServerEvents.recipes((event) => {
    const veins = [
      {
        // OVERWORLD IRON
        id: "iron_ov",
        resource: "minecraft:raw_iron",
        name: "Raw Iron (Earth)",
        biomes: "minecraft:is_overworld",
        losalt: 407720,
        misalt: 486194,
        hisalt: 533846,
        rarity: 0,
        baseTime: 600,
        type: "item",
      },
      {
        // OVERWORLD COPPER
        id: "copper_ov",
        resource: "minecraft:raw_copper",
        name: "Raw Copper (Earth)",
        biomes: "minecraft:is_overworld",
        losalt: 209828,
        misalt: 724748,
        hisalt: 370228,
        rarity: 0,
        baseTime: 600,
        type: "item",
      },
      {
        // OVERWORLD ZINC
        id: "zinc_ov",
        resource: "create:raw_zinc",
        name: "Raw Zinc (Earth)",
        biomes: "minecraft:is_overworld",
        losalt: 504545,
        misalt: 655133,
        hisalt: 750387,
        rarity: 0,
        baseTime: 600,
        type: "item",
      },
      {
        // OVERWORLD LAPIS
        id: "lapis_ov",
        resource: "minecraft:lapis_lazuli",
        name: "Lapis Lazuli (Earth)",
        biomes: "minecraft:is_overworld",
        losalt: 230999,
        misalt: 304411,
        hisalt: 252036,
        rarity: 0,
        baseTime: 600,
        type: "item",
      },
      {
        // OVERWORLD TIN
        id: "tin_ov",
        resource: "mekanism:raw_tin",
        name: "Raw Tin (Earth)",
        biomes: "minecraft:is_overworld",
        losalt: 481244,
        hisalt: 576278,
        rarity: 1,
        baseTime: 600,
        type: "item",
      },
      {
        // OVERWORLD LAVA
        id: "lava_ov",
        resource: "minecraft:lava_bucket",
        fluidoutput: "minecraft:lava 2000",
        name: "Magma Chamber (Earth)",
        biomes: "minecraft:is_overworld",
        losalt: 437535,
        hisalt: 444854,
        rarity: 1,
        baseTime: 600,
        type: "fluid",
      },
      {
        // OVERWORLD THORIUM
        id: "thorium_ov",
        resource: "create_new_age:thorium",
        name: "Raw Thorium (Earth)",
        biomes: "minecraft:is_overworld",
        losalt: 552261,
        hisalt: 276506,
        rarity: 1,
        baseTime: 600,
        type: "item",
      },
      {
        // OVERWORLD REDSTONE
        id: "redstone_ov",
        resource: "createoreexcavation:raw_redstone",
        name: "Raw Redstone (Earth)",
        biomes: "minecraft:is_overworld",
        losalt: 379394,
        hisalt: 348505,
        rarity: 1,
        baseTime: 600,
        type: "item",
      },
      {
        // OVERWORLD GOLD
        id: "gold_ov",
        resource: "minecraft:raw_gold",
        name: "Raw Gold (Earth)",
        biomes: "minecraft:is_overworld",
        losalt: 269327,
        hisalt: 893052,
        rarity: 1,
        baseTime: 600,
        type: "item",
      },
      {
        // OVERWORLD DIAMOND
        id: "diamond_ov",
        resource: "createoreexcavation:raw_diamond",
        name: "Raw Diamond (Earth)",
        biomes: "minecraft:is_overworld",
        salt: 676350,
        rarity: 2,
        baseTime: 600,
        type: "item",
      },
      {
        // OVERWORLD EMERALD
        id: "emerald_ov",
        resource: "createoreexcavation:raw_emerald",
        name: "Raw Emerald (Earth)",
        biomes: "minecraft:is_overworld",
        salt: 850406,
        rarity: 2,
        baseTime: 600,
        type: "item",
      },
      {
        // NETHER QUARTZ
        id: "quartz_ne",
        resource: "minecraft:quartz",
        name: "Quartz (Nether)",
        biomes: "minecraft:is_nether",
        losalt: 526412,
        misalt: 216785,
        hisalt: 630955,
        rarity: 0,
        baseTime: 600,
        type: "item",
      },
      {
        // NETHER GOLD
        id: "gold_ne",
        resource: "minecraft:raw_gold",
        name: "Raw Gold (Nether)",
        biomes: "minecraft:is_nether",
        losalt: 378142,
        misalt: 408092,
        hisalt: 379763,
        rarity: 0,
        baseTime: 600,
        type: "item",
      },
      {
        // NETHER ANCIENT DEBRIS
        id: "debris_ne",
        resource: "minecraft:ancient_debris",
        name: "Ancient Debris (Nether)",
        biomes: "minecraft:is_nether",
        salt: 124718,
        rarity: 2,
        baseTime: 600,
        type: "item",
      },
      {
        // MOON OSMIUM
        id: "osmium_mo",
        resource: "mekanism:raw_osmium",
        name: "Raw Osmium (Moon)",
        biomes: "planetsandportals:is_moon",
        losalt: 465271,
        misalt: 818887,
        hisalt: 254828,
        rarity: 0,
        baseTime: 600,
        type: "item",
      },
      {
        // MOON DESH
        id: "desh_mo",
        resource: "ad_astra:raw_desh",
        name: "Raw Desh (Moon)",
        biomes: "planetsandportals:is_moon",
        losalt: 146084,
        misalt: 611237,
        hisalt: 945009,
        rarity: 0,
        baseTime: 600,
        type: "item",
      },
      {
        // MOON CHEESE
        id: "cheese_mo",
        resource: "ad_astra:cheese",
        name: "Cheese (Moon)",
        biomes: "planetsandportals:is_moon",
        losalt: 847807,
        hisalt: 105175,
        rarity: 1,
        baseTime: 600,
        type: "item",
      },
      {
        // MOON IRON
        id: "iron_mo",
        resource: "minecraft:raw_iron",
        name: "Raw Iron (Moon)",
        biomes: "planetsandportals:is_moon",
        losalt: 261284,
        hisalt: 140315,
        rarity: 1,
        baseTime: 600,
        type: "item",
      },
      {
        // MOON LAVA
        id: "lava_mo",
        resource: "minecraft:lava_bucket",
        fluidoutput: "minecraft:lava 2000",
        name: "Magma Chamber (Moon)",
        biomes: "planetsandportals:is_moon",
        salt: 914450,
        rarity: 2,
        baseTime: 600,
        type: "fluid",
      },
      {
        // MOON ETRIUM
        id: "etrium_mo",
        resource: "ad_astra:etrium_nugget",
        name: "High Unknown Energy Density (Moon)",
        biomes: "planetsandportals:is_moon",
        salt: 549806,
        rarity: 3,
        baseTime: 2400,
        type: "item",
      },
      {
        // MARS LEAD
        id: "lead_ma",
        resource: "mekanism:raw_lead",
        name: "Raw Lead (Mars)",
        biomes: "planetsandportals:is_mars",
        losalt: 194580,
        misalt: 953183,
        hisalt: 798537,
        rarity: 0,
        baseTime: 600,
        type: "item",
      },
      {
        // MARS OSTRUM
        id: "ostrum_ma",
        resource: "ad_astra:raw_ostrum",
        name: "Raw Ostrum (Mars)",
        biomes: "planetsandportals:is_mars",
        losalt: 918093,
        misalt: 758988,
        hisalt: 231409,
        rarity: 0,
        baseTime: 600,
        type: "item",
      },
      {
        // MARS IRON
        id: "iron_ma",
        resource: "minecraft:raw_iron",
        name: "Raw Iron (Mars)",
        biomes: "planetsandportals:is_mars",
        losalt: 583576,
        hisalt: 981308,
        rarity: 1,
        baseTime: 600,
        type: "item",
      },
      {
        // MARS WATER
        id: "water_ma",
        resource: "minecraft:water_bucket",
        fluidoutput: "minecraft:water 2000",
        name: "Water Aquifer (Mars)",
        biomes: "planetsandportals:is_mars",
        salt: 295362,
        rarity: 2,
        baseTime: 600,
        type: "fluid",
      },
    ];

    veins.forEach((recipe) => {
      if (recipe.rarity == 0) {
        //LOWGRADE//
        event.recipes.createoreexcavation
          .vein(`Lowgrade ${recipe.name}`, recipe.resource)
          .placement(30, 15, recipe.losalt)
          .biomeWhitelist(recipe.biomes)
          .id(`createoreexcavation:ore_vein_type/lo_${recipe.id}`);

        //MIDGRADE//
        event.recipes.createoreexcavation
          .vein(`Midgrade ${recipe.name}`, recipe.resource)
          .placement(45, 30, recipe.misalt)
          .biomeWhitelist(recipe.biomes)
          .id(`createoreexcavation:ore_vein_type/mi_${recipe.id}`);

        //HIGHGRADE//
        event.recipes.createoreexcavation
          .vein(`Highgrade ${recipe.name}`, recipe.resource)
          .placement(60, 45, recipe.hisalt)
          .biomeWhitelist(recipe.biomes)
          .id(`createoreexcavation:ore_vein_type/hi_${recipe.id}`);

        if (recipe.type == "item") {
          //LOWGRADE//
          event.recipes.createoreexcavation
            .drilling(
              recipe.resource,
              `createoreexcavation:ore_vein_type/lo_${recipe.id}`,
              recipe.baseTime
            )
            .drill("createoreexcavation:drill")
            .id(`createoreexcavation:lo_${recipe.id}/iron`);
          event.recipes.createoreexcavation
            .drilling(
              recipe.resource,
              `createoreexcavation:ore_vein_type/lo_${recipe.id}`,
              recipe.baseTime / (5 / 3)
            )
            .drill("createoreexcavation:diamond_drill")
            .id(`createoreexcavation:lo_${recipe.id}/diamond`);
          event.recipes.createoreexcavation
            .drilling(
              recipe.resource,
              `createoreexcavation:ore_vein_type/lo_${recipe.id}`,
              recipe.baseTime / 5
            )
            .drill("createoreexcavation:netherite_drill")
            .id(`createoreexcavation:lo_${recipe.id}/netherite`);

          //MIDGRADE//
          event.recipes.createoreexcavation
            .drilling(
              recipe.resource,
              `createoreexcavation:ore_vein_type/mi_${recipe.id}`,
              recipe.baseTime / (25 / 9)
            )
            .drill("createoreexcavation:diamond_drill")
            .id(`createoreexcavation:mi_${recipe.id}/diamond`);
          event.recipes.createoreexcavation
            .drilling(
              recipe.resource,
              `createoreexcavation:ore_vein_type/mi_${recipe.id}`,
              recipe.baseTime / (25 / 3)
            )
            .drill("createoreexcavation:netherite_drill")
            .id(`createoreexcavation:mi_${recipe.id}/netherite`);

          //HIGHGRADE//
          event.recipes.createoreexcavation
            .drilling(
              recipe.resource,
              `createoreexcavation:ore_vein_type/hi_${recipe.id}`,
              recipe.baseTime / 12.5
            )
            .drill("createoreexcavation:netherite_drill")
            .id(`createoreexcavation:hi_${recipe.id}/netherite`);
        } else if (recipe.type == "fluid") {
          //LOWGRADE//
          event.recipes.createoreexcavation
            .extracting(
              recipe.fluidoutput,
              `createoreexcavation:ore_vein_type/lo_${recipe.id}`,
              recipe.baseTime
            )
            .drill("createoreexcavation:drill")
            .id(`createoreexcavation:lo_${recipe.id}/iron`);
          event.recipes.createoreexcavation
            .extracting(
              item.fluidoutput,
              `createoreexcavation:ore_vein_type/lo_${recipe.id}`,
              recipe.baseTime / (5 / 3)
            )
            .drill("createoreexcavation:diamond_drill")
            .id(`createoreexcavation:lo_${recipe.id}/diamond`);
          event.recipes.createoreexcavation
            .extracting(
              recipe.fluidoutput,
              `createoreexcavation:ore_vein_type/lo_${recipe.id}`,
              recipe.baseTime / 5
            )
            .drill("createoreexcavation:netherite_drill")
            .id(`createoreexcavation:lo_${recipe.id}/netherite`);

          //MIDGRADE//
          event.recipes.createoreexcavation
            .extracting(
              recipe.fluidoutput,
              `createoreexcavation:ore_vein_type/mi_${recipe.id}`,
              recipe.baseTime / (25 / 9)
            )
            .drill("createoreexcavation:diamond_drill")
            .id(`createoreexcavation:mi_${recipe.id}/diamond`);
          event.recipes.createoreexcavation
            .extracting(
              recipe.fluidoutput,
              `createoreexcavation:ore_vein_type/mi_${recipe.id}`,
              recipe.baseTime / (25 / 3)
            )
            .drill("createoreexcavation:netherite_drill")
            .id(`createoreexcavation:mi_${recipe.id}/netherite`);

          //HIGHGRADE//
          event.recipes.createoreexcavation
            .extracting(
              recipe.fluidoutput,
              `createoreexcavation:ore_vein_type/hi_${recipe.id}`,
              recipe.baseTime / 12.5
            )
            .drill("createoreexcavation:netherite_drill")
            .id(`createoreexcavation:hi_${recipe.id}/netherite`);
        }
      } else if (recipe.rarity == 1) {
        //LOWGRADE//
        event.recipes.createoreexcavation
          .vein(`Lowgrade ${recipe.name}`, recipe.resource)
          .placement(75, 45, recipe.losalt) // Old lowgrade distribution
          .biomeWhitelist(recipe.biomes)
          .id(`createoreexcavation:ore_vein_type/lo_${recipe.id}`);

        //HIGHGRADE//
        event.recipes.createoreexcavation
          .vein(`Highgrade ${recipe.name}`, recipe.resource)
          .placement(105, 75, recipe.hisalt) // Old midgrade distribution
          .biomeWhitelist(recipe.biomes)
          .id(`createoreexcavation:ore_vein_type/hi_${recipe.id}`);

        if (recipe.type == "item") {
          //LOWGRADE//
          event.recipes.createoreexcavation
            .drilling(
              recipe.resource,
              `createoreexcavation:ore_vein_type/lo_${recipe.id}`,
              recipe.baseTime
            )
            .drill("createoreexcavation:diamond_drill")
            .id(`createoreexcavation:lo_${recipe.id}/diamond`);
          event.recipes.createoreexcavation
            .drilling(
              recipe.resource,
              `createoreexcavation:ore_vein_type/lo_${recipe.id}`,
              recipe.baseTime / (5 / 3)
            )
            .drill("createoreexcavation:netherite_drill")
            .id(`createoreexcavation:lo_${recipe.id}/netherite`);

          //HIGHGRADE//
          event.recipes.createoreexcavation
            .drilling(
              recipe.resource,
              `createoreexcavation:ore_vein_type/hi_${recipe.id}`,
              recipe.baseTime / 5
            )
            .drill("createoreexcavation:netherite_drill")
            .id(`createoreexcavation:hi_${recipe.id}/netherite`);
        } else if (recipe.type == "fluid") {
          //LOWGRADE//
          event.recipes.createoreexcavation
            .extracting(
              recipe.fluidoutput,
              `createoreexcavation:ore_vein_type/lo_${recipe.id}`,
              recipe.baseTime
            )
            .drill("createoreexcavation:diamond_drill")
            .id(`createoreexcavation:lo_${recipe.id}/diamond`);
          event.recipes.createoreexcavation
            .extracting(
              recipe.fluidoutput,
              `createoreexcavation:ore_vein_type/lo_${recipe.id}`,
              recipe.baseTime / (5 / 3)
            )
            .drill("createoreexcavation:netherite_drill")
            .id(`createoreexcavation:lo_${recipe.id}/netherite`);

          //HIGHGRADE//
          event.recipes.createoreexcavation
            .extracting(
              recipe.fluidoutput,
              `createoreexcavation:ore_vein_type/hi_${recipe.id}`,
              recipe.baseTime / 5
            )
            .drill("createoreexcavation:netherite_drill")
            .id(`createoreexcavation:hi_${recipe.id}/netherite`);
        }
      } else if (recipe.rarity == 2) {
        //NOGRADE//
        event.recipes.createoreexcavation
          .vein(recipe.name, recipe.resource)
          .placement(135, 110, recipe.salt) // Old midgrade distribution
          .biomeWhitelist(recipe.biomes)
          .id(`createoreexcavation:ore_vein_type/${recipe.id}`);

        if (recipe.type == "item") {
          //NOGRADE//
          event.recipes.createoreexcavation
            .drilling(
              recipe.resource,
              `createoreexcavation:ore_vein_type/${recipe.id}`,
              recipe.baseTime
            )
            .drill("createoreexcavation:netherite_drill")
            .id(`createoreexcavation:${recipe.id}/netherite`);
        } else if (recipe.type == "fluid") {
          //NOGRADE//
          event.recipes.createoreexcavation
            .extracting(
              recipe.fluidoutput,
              `createoreexcavation:ore_vein_type/${recipe.id}`,
              recipe.baseTime
            )
            .drill("createoreexcavation:netherite_drill")
            .id(`createoreexcavation:${recipe.id}/netherite`);
        }
      } else if (recipe.rarity == 3) {
        //NOGRADE//
        event.recipes.createoreexcavation
          .vein(recipe.name, recipe.resource)
          .placement(135, 110, recipe.salt) // Old midgrade distribution
          .biomeWhitelist(recipe.biomes)
          .id(`createoreexcavation:ore_vein_type/${recipe.id}`);

        if (recipe.type == "item") {
          //NOGRADE//
          event.recipes.createoreexcavation
            .drilling(
              recipe.resource,
              `createoreexcavation:ore_vein_type/${recipe.id}`,
              recipe.baseTime
            )
            .drill("createoreexcavation:diamond_drill")
            .id(`createoreexcavation:lo_${recipe.id}/diamond`);
          event.recipes.createoreexcavation
            .drilling(
              recipe.resource,
              `createoreexcavation:ore_vein_type/${recipe.id}`,
              recipe.baseTime / (5 / 3)
            )
            .drill("createoreexcavation:netherite_drill")
            .id(`createoreexcavation:lo_${recipe.id}/netherite`);
        } else if (recipe.type == "fluid") {
          //NOGRADE//
          event.recipes.createoreexcavation
            .extracting(
              recipe.fluidoutput,
              `createoreexcavation:ore_vein_type/${recipe.id}`,
              recipe.baseTime
            )
            .drill("createoreexcavation:diamond_drill")
            .id(`createoreexcavation:${recipe.id}/diamond`);
          event.recipes.createoreexcavation
            .extracting(
              recipe.fluidoutput,
              `createoreexcavation:ore_vein_type/${recipe.id}`,
              recipe.baseTime / (5 / 3)
            )
            .drill("createoreexcavation:netherite_drill")
            .id(`createoreexcavation:${recipe.id}/netherite`);
        }
      }
    });
  });
})();
