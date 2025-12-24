(function minecraftShapedRecipes() {
  ServerEvents.recipes((event) => {
    const shapedRecipes = [
      // Minor recipe fixes

      {
        pattern: ["AAA", "A A", "AAA"],
        key: {
          A: "#forge:planks",
        },
        output: "minecraft:chest",
        id: "chest_mod_compat",
      },
      {
        pattern: ["AAA", " B ", "AAA"],
        key: {
          A: ["#forge:planks", "minecraft:oak_planks"],
          B: "#forge:chests/wooden",
        },
        output: "storagedrawers:oak_full_drawers_1",
        id: "full_drawers_1_mod_compat",
      },
      {
        pattern: ["ABA", "AAA", "ABA"],
        key: {
          A: ["#forge:planks", "minecraft:oak_planks"],
          B: "#forge:chests/wooden",
        },
        output: Item.of("storagedrawers:oak_full_drawers_2", 2),
        id: "full_drawers_2_mod_compat",
      },
      {
        pattern: ["BAB", "AAA", "BAB"],
        key: {
          A: ["#forge:planks", "minecraft:oak_planks"],
          B: "#forge:chests/wooden",
        },
        output: Item.of("storagedrawers:oak_full_drawers_4", 4),
        id: "full_drawers_4_mod_compat",
      },
      {
        pattern: ["AAA", " B ", "AAA"],
        key: {
          A: ["#forge:slabs/wooden", "minecraft:slab"],
          B: "#forge:chests/wooden",
        },
        output: "storagedrawers:oak_half_drawers_1",
        id: "half_drawers_1_mod_compat",
      },
      {
        pattern: ["ABA", "AAA", "ABA"],
        key: {
          A: ["#forge:slabs/wooden", "minecraft:oak_slab"],
          B: "#forge:chests/wooden",
        },
        output: Item.of("storagedrawers:oak_half_drawers_2", 2),
        id: "half_drawers_2_mod_compat",
      },
      {
        pattern: ["BAB", "AAA", "BAB"],
        key: {
          A: ["#forge:slabs/wooden", "minecraft:oak_slab"],
          B: "#forge:chests/wooden",
        },
        output: Item.of("storagedrawers:oak_half_drawers_4", 4),
        id: "half_drawers_4_mod_compat",
      },
      {
        pattern: ["AAA", "A A", "AAA"],
        key: {
          A: "#forge:logs",
        },
        output: Item.of("minecraft:chest", 4),
        id: "chests_from_logs",
      },
      {
        pattern: ["AAA", "BBB", "AAA"],
        key: {
          A: ["#forge:planks"],
          B: "minecraft:book",
        },
        output: "minecraft:bookshelf",
        id: "bookshelf_mod_compat",
      },
      {
        pattern: ["A A", "ABA", "A A"],
        key: {
          A: "minecraft:stick",
          B: ["#forge:planks", "minecraft:oak_planks"],
        },
        output: Item.of("minecraft:ladder", 4),
        id: "ladder_mod_compat",
      },
      {
        pattern: ["AA", "AA"],
        key: {
          A: "tfmg:fireclay_ball",
        },
        output: "tfmg:fireclay",
        id: "fireclay_from_fireclay_ball",
      },
      {
        pattern: ["AA", "AA"],
        key: {
          A: "tfmg:synthetic_sting",
        },
        output: "minecraft:white_wool",
        id: "wool_from_synthetic_string",
      },

      // Vanilla

      {
        pattern: ["ABA", "B B", "ABA"],
        key: {
          A: "#forge:cobblestone",
          B: "#minecraft:logs",
        },
        output: "minecraft:smoker",
        id: "smoker",
      },
      {
        pattern: ["ABA", "B B", "ABA"],
        key: {
          A: "#forge:cobblestone",
          B: "#forge:raw_materials",
        },
        output: "minecraft:blast_furnace",
        id: "blast_furnace",
      },

      // Ad Astra stuff

      {
        pattern: ["ABA", "CDC", "EFE"],
        key: {
          A: "create:sturdy_sheet",
          B: "create:precision_mechanism",
          C: "tfmg:steel_mechanism",
          D: "ad_astra:engine_frame",
          E: "tfmg:heavy_plate",
          F: "ad_astra:fan",
        },
        output: "ad_astra:steel_engine",
        id: "steel_engine",
      },
      {
        pattern: ["ABA", "BBB", "ABA"],
        key: {
          A: "ad_astra:desh_plate",
          B: "ad_astra:desh_ingot",
        },
        output: "ad_astra:desh_plateblock",
        id: "desh_plateblock",
      },
      {
        pattern: ["ABA", "CDC", " E "],
        key: {
          A: "mekanism:block_osmium",
          B: "create_new_age:reactor_heat_vent",
          C: "ad_astra:desh_plate",
          D: "ad_astra:desh_plateblock",
          E: "ad_astra:steel_engine",
        },
        output: "ad_astra:desh_engine",
        id: "desh_engine",
      },
      {
        pattern: ["ABA", "BBB", "ABA"],
        key: {
          A: "planetsandportals:steel_electrode",
          B: "ad_astra:etrium_nugget",
        },
        output: "ad_astra:etrionic_core",
        id: "etrionic_core",
      },
      {
        pattern: [" A ", "BCB", "DED"],
        key: {
          A: "ad_astra:etrionic_core",
          B: "ad_astra:etrium_nugget",
          C: "tfmg:heavy_machinery_casing",
          D: "tfmg:steel_block",
          E: "ad_astra:desh_plate",
        },
        output: "ad_astra:gravity_normalizer",
        id: "gravity_normalizer",
      },
      {
        pattern: ["A", "A"],
        key: {
          A: "#ad_astra:steel_ingots",
        },
        output: Item.of("ad_astra:steel_rod", 4),
        id: "steel_rod",
      },
      {
        pattern: ["AA"],
        key: {
          A: "#ad_astra:steel_ingots",
        },
        output: Item.of("tfmg:steel_pipe", 6),
        id: "steel_pipe",
      },
      {
        pattern: [" B ", "ABA", "ABA"],
        key: {
          A: "#ad_astra:steel_ingots",
          B: "ad_astra:steel_rod",
        },
        output: "ad_astra:oxygen_gear",
        id: "oxygen_gear",
      },
      {
        pattern: ["AAA", "ABA"],
        key: {
          A: "#ad_astra:steel_ingots",
          B: "minecraft:glass_pane",
        },
        output: "ad_astra:space_helmet",
        id: "space_helmet",
      },
      {
        pattern: ["A A", "BCB", "ADA"],
        key: {
          A: "#ad_astra:steel_ingots",
          B: "ad_astra:gas_tank",
          C: "ad_astra:oxygen_gear",
          D: "#minecraft:wool",
        },
        output: "ad_astra:space_suit",
        id: "space_suit",
      },
      {
        pattern: ["AAA", "B B", "A A"],
        key: {
          A: "#ad_astra:steel_ingots",
          B: "#minecraft:wool",
        },
        output: "ad_astra:space_pants",
        id: "space_pants",
      },
      {
        pattern: ["B B", "A A"],
        key: {
          A: "#ad_astra:steel_ingots",
          B: "#minecraft:wool",
        },
        output: "ad_astra:space_boots",
        id: "space_boots",
      },

      // Create

      {
        pattern: ["AB", "BA"],
        key: {
          A: "planetsandportals:grout",
          B: "minecraft:andesite",
        },
        output: Item.of("create:andesite_alloy", 2),
        id: "andesite_alloy_inefficient",
      },
      {
        pattern: ["A", "B", "C"],
        key: {
          A: "create:precision_mechanism",
          B: "create:brass_casing",
          C: "minecraft:crafting_table",
        },
        output: Item.of("create:mechanical_crafter", 5),
        id: "mechanical_crafter",
      },
      {
        pattern: ["A", "B", "C"],
        key: {
          A: "create:andesite_alloy",
          B: "create:andesite_casing",
          C: "#forge:stone",
        },
        output: "create:millstone",
        id: "millstone",
      },
      {
        pattern: ["A", "B", "C"],
        key: {
          A: "create:andesite_alloy",
          B: "create:andesite_casing",
          C: "minecraft:iron_block",
        },
        output: "create:mechanical_press",
        id: "mechanical_press",
      },
      {
        pattern: ["A", "B", "C"],
        key: {
          A: "create:copper_casing",
          B: "minecraft:dried_kelp",
          C: "create:brass_sheet",
        },
        output: "create:spout",
        id: "spout",
      },
      {
        pattern: ["A", "B", "C"],
        key: {
          A: "create:shaft",
          B: "create:brass_casing",
          C: "create:propeller",
        },
        output: "create:encased_fan",
        id: "encased_fan",
      },
      {
        pattern: [" A ", "ABA", " A "],
        key: {
          A: "create:brass_sheet",
          B: "create:andesite_alloy",
        },
        output: "create:propeller",
        id: "fan_propeller",
      },
      {
        pattern: ["ABA", "BCB", "ABA"],
        key: {
          A: "create:brass_nugget",
          B: "#minecraft:planks",
          C: "create:water_wheel",
        },
        output: "create:large_water_wheel",
        id: "large_water_wheel",
      },
      {
        pattern: ["A", "B", "C"],
        key: {
          A: "create:polished_rose_quartz",
          B: "tfmg:rubber_sheet",
          C: "create:iron_sheet",
        },
        output: "create:electron_tube",
        id: "electron_tube",
      },
      {
        pattern: [" A ", "BCB", " D "],
        key: {
          A: "create:brass_casing",
          B: "minecraft:dried_kelp_block",
          C: "create:precision_mechanism",
          D: "create:iron_sheet",
        },
        output: "create:elevator_pulley",
        id: "elevator_pulley",
      },
      {
        pattern: ["A", "B", "C"],
        key: {
          A: "#minecraft:wooden_slabs",
          B: "create:brass_casing",
          C: "create:precision_mechanism",
        },
        output: "create:clockwork_bearing",
        id: "clockwork_bearing",
      },
      {
        pattern: ["A", "B", "C"],
        key: {
          A: "tfmg:rubber_sheet",
          B: "#forge:stone",
          C: "create:shaft",
        },
        output: "create:windmill_bearing",
        id: "windmill_bearing",
      },

      // Masterful Machinery

      {
        pattern: ["AAA", "ABA", "ACA"],
        key: {
          A: "tfmg:cast_iron_ingot",
          B: "tfmg:fireproof_bricks",
          C: "tfmg:cast_iron_pipe",
        },
        output: "mm:blast_furnace_controller",
        id: "blast_furnace_controller",
      },
      {
        pattern: ["AAA", "ABA", "ACA"],
        key: {
          A: "tfmg:heavy_plate",
          B: "tfmg:steel_casing",
          C: "tfmg:steel_pipe",
        },
        output: "mm:steel_furnace_controller",
        id: "steel_furnace_controller",
      },
      {
        pattern: ["ABA", "ACA", "ADA"],
        key: {
          A: "tfmg:steel_casing",
          B: "create_new_age:basic_motor",
          C: "create:mechanical_mixer",
          D: "create:basin",
        },
        output: "mm:fuel_mixer_controller",
        id: "fuel_mixer_controller",
      },

      // Create New Age stuff

      {
        pattern: ["ABA", " C ", " D "],
        key: {
          A: "ad_astra:desh_cable",
          B: "ad_astra:desh_plate",
          C: "tfmg:steel_casing",
          D: "minecraft:lightning_rod",
        },
        output: "create_new_age:basic_energiser",
        id: "basic_energiser",
      },
      {
        pattern: ["ABA", "ECE", " D "],
        key: {
          A: "create_new_age:overcharged_golden_sheet",
          B: "ad_astra:ostrum_plate",
          C: "create_new_age:basic_energiser",
          D: "ad_astra:desh_cable",
          E: "ad_astra:desh_nugget",
        },
        output: "create_new_age:advanced_energiser",
        id: "advanced_energiser",
      },

      // Create Ore Excavation

      {
        pattern: ["AB ", "CD ", "  D"],
        key: {
          A: "minecraft:ender_eye",
          B: "minecraft:amethyst_shard",
          C: "minecraft:redstone_block",
          D: "minecraft:stick",
        },
        output: "createoreexcavation:vein_finder",
        id: "vein_finder",
      },

      // Mekanism basic blocks

      {
        pattern: ["ABA"],
        key: {
          A: "mekanism:basic_control_circuit",
          B: "create_new_age:copper_wire",
        },
        output: Item.of("mekanism:basic_universal_cable", 4),
        id: "basic_universal_cable_from_copper_wire",
      },
      {
        pattern: ["ABA"],
        key: {
          A: "mekanism:basic_control_circuit",
          B: "create_new_age:overcharged_iron_wire",
        },
        output: Item.of("mekanism:basic_universal_cable", 8),
        id: "basic_universal_cable_from_iron_wire",
      },
      {
        pattern: ["ABA"],
        key: {
          A: "mekanism:basic_control_circuit",
          B: "create_new_age:overcharged_golden_wire",
        },
        output: Item.of("mekanism:basic_universal_cable", 16),
        id: "basic_universal_cable_from_golden_wire",
      },
      {
        pattern: ["ABA"],
        key: {
          A: "mekanism:basic_control_circuit",
          B: "create_new_age:overcharged_diamond_wire",
        },
        output: Item.of("mekanism:basic_universal_cable", 64),
        id: "basic_universal_cable_from_diamond_wire",
      },
      {
        pattern: ["BBB", "BAB", "BBB"],
        key: {
          A: "mekanism:basic_control_circuit",
          B: "create:fluid_pipe",
        },
        output: Item.of("mekanism:basic_mechanical_pipe", 8),
        id: "basic_mechanical_pipe",
      },
      {
        pattern: ["BAB"],
        key: {
          A: "mekanism:basic_control_circuit",
          B: "create:framed_glass",
        },
        output: Item.of("mekanism:basic_pressurized_tube", 8),
        id: "basic_pressurized_tube",
      },
      {
        pattern: ["BAB"],
        key: {
          A: "mekanism:basic_control_circuit",
          B: "minecraft:copper_ingot",
        },
        output: Item.of("mekanism:basic_thermodynamic_conductor", 8),
        id: "basic_thermodynamic_conductor",
      },
      {
        pattern: ["AAA", "BCB", "AAA"],
        key: {
          A: "minecraft:redstone",
          B: "tfmg:steel_ingot",
          C: "mekanism:basic_logistical_transporter",
        },
        output: Item.of("mekanism:diversion_transporter", 2),
        id: "diversion_transporter",
      },
      {
        pattern: ["ABA"],
        key: {
          A: "tfmg:steel_ingot",
          B: "mekanism:basic_logistical_transporter",
        },
        output: Item.of("mekanism:restrictive_transporter", 2),
        id: "restrictive_transporter",
      },

      // Mekanism advanced blocks

      {
        pattern: ["ABA", "CDC", "ABA"],
        key: {
          A: "mekanism:advanced_control_circuit",
          B: "mekanism:energy_tablet",
          C: "mekanism:ingot_osmium",
          D: "mekanism:basic_energy_cube",
        },
        output: "mekanism:advanced_energy_cube",
        id: "advanced_energy_cube",
      },
      {
        pattern: ["ABA", "BCB", "ABA"],
        key: {
          A: "mekanism:advanced_control_circuit",
          B: "mekanism:ingot_osmium",
          C: "mekanism:basic_fluid_tank",
        },
        output: "mekanism:advanced_fluid_tank",
        id: "advanced_fluid_tank",
      },
      {
        pattern: ["ABA", "BCB", "ABA"],
        key: {
          A: "mekanism:advanced_control_circuit",
          B: "mekanism:ingot_osmium",
          C: "mekanism:basic_chemical_tank",
        },
        output: "mekanism:advanced_chemical_tank",
        id: "advanced_chemical_tank",
      },
      {
        pattern: ["BBB", "BAB", "BBB"],
        key: {
          A: "mekanism:advanced_control_circuit",
          B: "mekanism:basic_universal_cable",
        },
        output: "mekanism:advanced_universal_cable",
        id: "advanced_universal_cable",
      },
      {
        pattern: ["BBB", "BAB", "BBB"],
        key: {
          A: "mekanism:advanced_control_circuit",
          B: "mekanism:basic_mechanical_pipe",
        },
        output: "mekanism:advanced_mechanical_pipe",
        id: "advanced_mechanical_pipe",
      },
      {
        pattern: ["BBB", "BAB", "BBB"],
        key: {
          A: "mekanism:advanced_control_circuit",
          B: "mekanism:basic_pressurized_tube",
        },
        output: "mekanism:advanced_pressurized_tube",
        id: "advanced_pressurized_tube",
      },
      {
        pattern: ["BBB", "BAB", "BBB"],
        key: {
          A: "mekanism:advanced_control_circuit",
          B: "mekanism:basic_logistical_transporter",
        },
        output: "mekanism:advanced_logistical_transporter",
        id: "advanced_logistical_transporter",
      },
      {
        pattern: ["ABA", "ACA", "DDD"],
        key: {
          A: "mekanismgenerators:solar_generator",
          B: "mekanism:alloy_infused",
          C: "mekanism:advanced_control_circuit",
          D: "mekanism:ingot_osmium",
        },
        output: "mekanismgenerators:advanced_solar_generator",
        id: "advanced_solar_generator",
      },
    ];

    shapedRecipes.forEach((recipe) => {
      event
        .shaped(recipe.output, recipe.pattern, recipe.key)
        .id(`kubejs:minecraft/shaped/${recipe.id}`);
    });
  });
})();
