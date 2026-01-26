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
          A: "tfmg:synthetic_string",
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
      {
        pattern: ["A", "B", "A"],
        key: {
          A: "minecraft:iron_nugget",
          B: "minecraft:iron_ingot",
        },
        output: Item.of("minecraft:chain", 8),
        id: "chain_from_iron",
      },
      {
        pattern: ["A", "B", "A"],
        key: {
          A: "create:zinc_nugget",
          B: "create:zinc_ingot",
        },
        output: Item.of("minecraft:chain", 8),
        id: "chain_from_zinc",
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
      {
        pattern: ["ABA", "CDC", " C "],
        key: {
          A: "create:andesite_alloy",
          B: "create:shaft",
          C: "create:copper_sheet",
          D: "minecraft:copper_block",
        },
        output: "create:copper_backtank",
        id: "copper_backtank",
      },
      {
        pattern: ["AAA", "ABA"],
        key: {
          A: "create:cardboard",
          B: "planetsandportals:cardboard_mechanism",
        },
        output: "create:cardboard_helmet",
        id: "cardboard_helmet",
      },
      {
        pattern: ["ABA", "AAA", "AAA"],
        key: {
          A: "create:cardboard",
          B: "planetsandportals:cardboard_mechanism",
        },
        output: "create:cardboard_chestplate",
        id: "cardboard_chestplate",
      },
      {
        pattern: ["AAA", "ABA", "A A"],
        key: {
          A: "create:cardboard",
          B: "planetsandportals:cardboard_mechanism",
        },
        output: "create:cardboard_leggings",
        id: "cardboard_leggings",
      },
      {
        pattern: ["A A", "ABA"],
        key: {
          A: "create:cardboard",
          B: "planetsandportals:cardboard_mechanism",
        },
        output: "create:cardboard_boots",
        id: "cardboard_boots",
      },
      {
        pattern: ["A", "B", "C"],
        key: {
          A: "create:cardboard",
          B: "planetsandportals:cardboard_mechanism",
          C: "minecraft:stick",
        },
        output: "create:cardboard_sword",
        id: "cardboard_sword",
      },
      {
        pattern: [" A ", "ABA", "CAC"],
        key: {
          A: "create:andesite_alloy",
          B: "planetsandportals:cardboard_mechanism",
          C: "minecraft:redstone",
        },
        output: "create:packager",
        id: "packager",
      },
      {
        pattern: ["A", "B", "C"],
        key: {
          A: "create:golden_sheet",
          B: "create:sturdy_sheet",
          C: "minecraft:copper_block",
        },
        output: "create:steam_engine",
        id: "steam_engine",
      },
      {
        pattern: ["A", "B", "C"],
        key: {
          A: "create:transmitter",
          B: "create:item_vault",
          C: "planetsandportals:cardboard_mechanism",
        },
        output: "create:stock_link",
        id: "stock_link",
      },
      {
        pattern: [" A ", "ABA", " A "],
        key: {
          A: "create:andesite_casing",
          B: "planetsandportals:cardboard_mechanism",
        },
        output: Item.of("create:chain_conveyor", 4),
        id: "chain_conveyor",
      },
      {
        pattern: ["A", "B", "C"],
        key: {
          A: "planetsandportals:cardboard_mechanism",
          B: "create:item_vault",
          C: "create:andesite_alloy",
        },
        output: "create:package_frogport",
        id: "package_frogport",
      },

      // MBD2

      {
        pattern: ["A", "B", "C"],
        key: {
          A: "create:precision_mechanism",
          B: "create:display_board",
          C: "mbd2:coke_oven_filler",
        },
        output: "mbd2:coke_oven_controller",
        id: "coke_oven_controller",
      },
      {
        pattern: ["A", "B"],
        key: {
          A: "create:chute",
          B: "mbd2:coke_oven_filler",
        },
        output: "mbd2:coke_oven_item_input",
        id: "coke_oven_item_input",
      },
      {
        pattern: ["A", "B"],
        key: {
          A: "create:andesite_funnel",
          B: "mbd2:coke_oven_filler",
        },
        output: "mbd2:coke_oven_item_output",
        id: "coke_oven_item_output",
      },
      {
        pattern: ["A", "B"],
        key: {
          A: "create:fluid_valve",
          B: "mbd2:coke_oven_filler",
        },
        output: "mbd2:coke_oven_fluid_output",
        id: "coke_oven_fluid_output",
      },
      {
        pattern: ["AAA", "ABA", "ACA"],
        key: {
          A: "tfmg:cast_iron_ingot",
          B: "tfmg:fireproof_bricks",
          C: "tfmg:cast_iron_pipe",
        },
        output: "mbd2:blast_furnace_controller",
        id: "blast_furnace_controller",
      },

      // Masterful Machinery

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

      // Create: TFMG

      {
        pattern: ["ABA", "CDC", "EFE"],
        key: {
          A: "vintageimprovements:zinc_sheet",
          B: "tfmg:industrial_pipe",
          C: "create:electron_tube",
          D: "create:display_board",
          E: "tfmg:steel_mechanism",
          F: "tfmg:heavy_machinery_casing",
        },
        output: "tfmg:steel_distillation_controller",
        id: "steel_distillation_controller",
      },
      {
        pattern: ["ABA", "CCC"],
        key: {
          A: "create_new_age:copper_wire",
          B: "create:framed_glass",
          C: "tfmg:steel_nugget",
        },
        output: Item.of("tfmg:light_bulb", 4),
        id: "light_bulb",
      },

      // Create New Age stuff

      {
        pattern: ["A", "B"],
        key: {
          A: "create:copper_nugget",
          B: "tfmg:slag",
        },
        output: "create_new_age:electrical_connector",
        id: "electrical_connector",
      },
      {
        pattern: ["A  ", "BCD", "A  "],
        key: {
          A: "create:andesite_alloy",
          B: "create_new_age:copper_wire_block",
          C: "create_new_age:magnetite_block",
          D: "create:shaft",
        },
        output: "create_new_age:basic_motor",
        id: "basic_motor",
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
      {
        pattern: [" A ", "BCB", "DED"],
        key: {
          A: "create:precision_mechanism",
          B: "tfmg:cast_iron_sheet",
          C: "create:brass_casing",
          D: "tfmg:rubber_sheet",
          E: "create:mechanical_drill",
        },
        output: "createoreexcavation:sample_drill",
        id: "sample_drill",
      },

      // Create Vintage Improvements

      {
        pattern: [" A ", "ABA", " A "],
        key: {
          A: "create:andesite_alloy",
          B: "tfmg:steel_block",
        },
        output: "vintageimprovements:spring_coiling_machine_wheel",
        id: "spring_coiling_machine_wheel",
      },
      {
        pattern: ["AB ", "CDE", "AB "],
        key: {
          A: "tfmg:cast_iron_ingot",
          B: "create:shaft",
          C: "vintageimprovements:spring_coiling_machine_wheel",
          D: "create:precision_mechanism",
          E: "tfmg:steel_casing",
        },
        output: "vintageimprovements:spring_coiling_machine",
        id: "spring_coiling_machine",
      },
      {
        pattern: ["ABA", "CDC", " E "],
        key: {
          A: "vintageimprovements:steel_spring",
          B: "tfmg:heavy_machinery_casing",
          C: "tfmg:cast_iron_ingot",
          D: "create:mechanical_pump",
          E: "create:precision_mechanism",
        },
        output: "vintageimprovements:vacuum_chamber",
        id: "vacuum_chamber",
      },
      {
        pattern: [" A ", "BCB"],
        key: {
          A: "tfmg:steel_casing",
          B: "vintageimprovements:cast_iron_spring",
          C: "create:precision_mechanism",
        },
        output: "vintageimprovements:curving_press",
        id: "curving_press",
      },
      {
        pattern: ["AAA", "ABA", "AAA"],
        key: {
          A: "create:sand_paper",
          B: "mekanism:dust_quartz",
        },
        output: "vintageimprovements:grinder_belt",
        id: "grinder_belt",
      },
      {
        pattern: ["A", "B", "C"],
        key: {
          A: "vintageimprovements:grinder_belt",
          B: "tfmg:steel_casing",
          C: "create:precision_mechanism",
        },
        output: "vintageimprovements:belt_grinder",
        id: "belt_grinder",
      },
      {
        pattern: ["ABA", "ACA"],
        key: {
          A: "vintageimprovements:steel_spring",
          B: "tfmg:hardened_planks_slab",
          C: "tfmg:steel_casing",
        },
        output: "vintageimprovements:vibrating_table",
        id: "vibrating_table",
      },
      {
        pattern: ["EBE", "ACA", "EDE"],
        key: {
          A: "create:copper_sheet",
          B: "minecraft:redstone",
          C: "create:electron_tube",
          D: "minecraft:red_stained_glass",
          E: "tfmg:rubber_sheet",
        },
        output: "vintageimprovements:laser_item",
        id: "laser_item",
      },
      {
        pattern: ["ABA", "CDC", "EFE"],
        key: {
          A: "create:cogwheel",
          B: "minecraft:redstone_block",
          C: "tfmg:steel_mechanism",
          D: "tfmg:heavy_machinery_casing",
          E: "vintageimprovements:steel_spring",
          F: "vintageimprovements:laser_item",
        },
        output: "vintageimprovements:laser",
        id: "laser_cutter",
      },

      {
        pattern: ["A", "A"],
        key: {
          A: "tfmg:heavy_plate",
        },
        output: Item.of("vintageimprovements:steel_rod", 24),
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

    const shapedColourRecipes = [
      "white",
      "orange",
      "magenta",
      "light_blue",
      "yellow",
      "lime",
      "pink",
      "gray",
      "light_gray",
      "cyan",
      "purple",
      "blue",
      "brown",
      "green",
      "red",
      "black",
    ];

    shapedColourRecipes.forEach((recipe) => {
      // Create postboxes
      event
        .shaped(`create:${recipe}_postbox`, ["A", "B", "C"], {
          A: "create:package_frogport",
          B: "minecraft:barrel",
          C: `minecraft:${recipe}_dye`,
        })
        .id(`kubejs:minecraft/shaped/${recipe}_postbox`);
    });
  });
})();
