(function minecraftBlastingRecipes() {
  ServerEvents.recipes((event) => {
    const blastingRecipes = [
      {
        input: "planetsandportals:crushed_raw_ostrum",
        output: "ad_astra:ostrum_ingot",
        id: "ostrum_ingot_from_crushed_ore",
      },
      {
        input: "planetsandportals:crushed_raw_calorite",
        output: "ad_astra:calorite_ingot",
        id: "calorite_ingot_from_crushed_ore",
      },
      {
        input: "planetsandportals:brass_mixture",
        output: "create:brass_ingot",
        id: "brass_ingot_from_mixture",
      },
      {
        input: "minecraft:rotten_flesh",
        output: "minecraft:leather",
        id: "leather_from_rotten_flesh",
      },
      {
        input: "minecraft:clay",
        output: "minecraft:terracotta",
        id: "terracotta",
      },
      {
        input: "minecraft:white_terracotta",
        output: "minecraft:white_glazed_terracotta",
        id: "white_glazed_terracotta",
      },
      {
        input: "minecraft:light_gray_terracotta",
        output: "minecraft:light_gray_glazed_terracotta",
        id: "light_gray_glazed_terracotta",
      },
      {
        input: "minecraft:gray_terracotta",
        output: "minecraft:gray_glazed_terracotta",
        id: "gray_glazed_terracotta",
      },
      {
        input: "minecraft:black_terracotta",
        output: "minecraft:black_glazed_terracotta",
        id: "black_glazed_terracotta",
      },
      {
        input: "minecraft:brown_terracotta",
        output: "minecraft:brown_glazed_terracotta",
        id: "brown_glazed_terracotta",
      },
      {
        input: "minecraft:red_terracotta",
        output: "minecraft:red_glazed_terracotta",
        id: "red_glazed_terracotta",
      },
      {
        input: "minecraft:orange_terracotta",
        output: "minecraft:orange_glazed_terracotta",
        id: "orange_glazed_terracotta",
      },
      {
        input: "minecraft:yellow_terracotta",
        output: "minecraft:yellow_glazed_terracotta",
        id: "yellow_glazed_terracotta",
      },
      {
        input: "minecraft:lime_terracotta",
        output: "minecraft:lime_glazed_terracotta",
        id: "lime_glazed_terracotta",
      },
      {
        input: "minecraft:green_terracotta",
        output: "minecraft:green_glazed_terracotta",
        id: "green_glazed_terracotta",
      },
      {
        input: "minecraft:cyan_terracotta",
        output: "minecraft:cyan_glazed_terracotta",
        id: "cyan_glazed_terracotta",
      },
      {
        input: "minecraft:light_blue_terracotta",
        output: "minecraft:light_blue_glazed_terracotta",
        id: "light_blue_glazed_terracotta",
      },
      {
        input: "minecraft:blue_terracotta",
        output: "minecraft:blue_glazed_terracotta",
        id: "blue_glazed_terracotta",
      },
      {
        input: "minecraft:purple_terracotta",
        output: "minecraft:purple_glazed_terracotta",
        id: "purple_glazed_terracotta",
      },
      {
        input: "minecraft:magenta_terracotta",
        output: "minecraft:magenta_glazed_terracotta",
        id: "magenta_glazed_terracotta",
      },
      {
        input: "minecraft:pink_terracotta",
        output: "minecraft:pink_glazed_terracotta",
        id: "pink_glazed_terracotta",
      },
      {
        input: "#minecraft:smelts_to_glass",
        output: "minecraft:glass",
        id: "glass",
      },
      {
        input: "minecraft:quartz_block",
        output: "minecraft:smooth_quartz",
        id: "smooth_quartz",
      },
      {
        input: "minecraft:cobblestone",
        output: "minecraft:stone",
        id: "stone",
      },
      {
        input: "minecraft:stone",
        output: "minecraft:smooth_stone",
        id: "smooth_stone",
      },
      {
        input: "minecraft:cobbled_deepslate",
        output: "minecraft:deepslate",
        id: "deepslate",
      },
      {
        input: "minecraft:basalt",
        output: "minecraft:smooth_basalt",
        id: "smooth_basalt",
      },
      {
        input: "minecraft:mossy_cobblestone",
        output: "regions_unexplored:mossy_stone",
        id: "mossy_stone",
      },
      {
        input: "minecraft:sandstone",
        output: "minecraft:smooth_sandstone",
        id: "smooth_sandstone",
      },
      {
        input: "minecraft:red_sandstone",
        output: "minecraft:smooth_red_sandstone",
        id: "smooth_red_sandstone",
      },
      {
        input: "minecraft:clay_ball",
        output: "minecraft:brick",
        id: "brick",
      },
      {
        input: "minecraft:netherrack",
        output: "minecraft:nether_brick",
        id: "nether_brick",
      },
      {
        input: "minecraft:stone_bricks",
        output: "minecraft:cracked_stone_bricks",
        id: "cracked_stone_bricks",
      },
      {
        input: "minecraft:polished_blackstone_bricks",
        output: "minecraft:cracked_polished_blackstone_bricks",
        id: "cracked_polished_blackstone_bricks",
      },
      {
        input: "minecraft:nether_bricks",
        output: "minecraft:cracked_nether_bricks",
        id: "cracked_nether_bricks",
      },
      {
        input: "minecraft:soul_sand",
        output: "create:scoria",
        id: "scoria",
      },
      {
        input: "minecraft:deepslate_bricks",
        output: "minecraft:cracked_deepslate_bricks",
        id: "cracked_deepslate_bricks",
      },
      {
        input: "minecraft:deepslate_tiles",
        output: "minecraft:cracked_deepslate_tiles",
        id: "cracked_deepslate_tiles",
      },
      {
        input: "minecraft:wet_sponge",
        output: "minecraft:sponge",
        id: "sponge",
      },
      {
        input: "ad_astra:moon_cobblestone",
        output: "ad_astra:moon_stone",
        id: "moon_stone",
      },
      {
        input: "ad_astra:mars_cobblestone",
        output: "ad_astra:mars_stone",
        id: "mars_stone",
      },
      {
        input: "ad_astra:glacio_cobblestone",
        output: "ad_astra:glacio_stone",
        id: "glacio_stone",
      },
      {
        input: "ad_astra:venus_cobblestone",
        output: "ad_astra:venus_stone",
        id: "venus_stone",
      },
      {
        input: "ad_astra:mercury_cobblestone",
        output: "ad_astra:mercury_stone",
        id: "mercury_stone",
      },
      {
        input: "ad_astra:moon_stone_bricks",
        output: "ad_astra:cracked_moon_stone_bricks",
        id: "cracked_moon_stone_bricks",
      },
      {
        input: "ad_astra:mars_stone_bricks",
        output: "ad_astra:cracked_mars_stone_bricks",
        id: "cracked_mars_stone_bricks",
      },
      {
        input: "ad_astra:glacio_stone_bricks",
        output: "ad_astra:cracked_glacio_stone_bricks",
        id: "cracked_glacio_stone_bricks",
      },
      {
        input: "ad_astra:permafrost_bricks",
        output: "ad_astra:cracked_permafrost_bricks",
        id: "cracked_permafrost_bricks",
      },
      {
        input: "ad_astra:venus_stone_bricks",
        output: "ad_astra:cracked_venus_stone_bricks",
        id: "cracked_venus_stone_bricks",
      },
      {
        input: "ad_astra:venus_sandstone_bricks",
        output: "ad_astra:cracked_venus_sandstone_bricks",
        id: "cracked_venus_sandstone_bricks",
      },
      {
        input: "ad_astra:mercury_stone_bricks",
        output: "ad_astra:cracked_mercury_stone_bricks",
        id: "cracked_mercury_stone_bricks",
      },
      {
        input: "ae2:sky_dust",
        output: "ae2:sky_stone_block",
        id: "sky_stone_block",
      },
      {
        input: "ae2:sky_stone_block",
        output: "ae2:smooth_sky_stone_block",
        id: "smooth_sky_stone_block",
      },
      {
        input: "ae2:cut_quartz_block",
        output: "ae2:smooth_quartz_block",
        id: "smooth_certus_quartz_lock",
      },
      {
        input: "create:tiled_glass",
        output: "minecraft:glass",
        id: "glass_from_tiled_glass",
      },
      {
        input: "create:vertical_framed_glass",
        output: "minecraft:glass",
        id: "glass_from_vertical_framed_glass",
      },
      {
        input: "create:horizontal_framed_glass",
        output: "minecraft:glass",
        id: "glass_from_horizontal_framed_glass",
      },
      {
        input: "create:framed_glass",
        output: "minecraft:glass",
        id: "glass_from_framed_glass",
      },
      {
        input: "quark:dirty_glass",
        output: "minecraft:glass",
        id: "glass_from_dirty_glass",
      },
      {
        input: "quark:cobblestone_bricks",
        output: "minecraft:stone_bricks",
        id: "stone_bricks_from_cobblestone_bricks",
      },
      {
        input: "quark:soul_sandstone",
        output: "quark:smooth_soul_sandstone",
        id: "smooth_soul_sandstone",
      },
      {
        input: "quark:trowel",
        output: "minecraft:iron_nugget",
        id: "iron_nugget_from_trowel",
      },
      {
        input: "supplementaries:ash",
        output: "supplementaries:ash_brick",
        id: "ash_brick",
      },
      {
        input: "tfmg:fireclay_ball",
        output: "tfmg:fireproof_brick",
        id: "fireproof_brick",
      },
      {
        input: "planetsandportals:sticky_wart",
        output: "tfmg:rubber_sheet",
        id: "rubber_sheet",
      },
      {
        input: "mekanism:dust_iron",
        output: "minecraft:iron_ingot",
        id: "iron_ingot_from_dust",
      },
      {
        input: "mekanism:dust_gold",
        output: "minecraft:gold_ingot",
        id: "gold_ingot_from_dust",
      },
      {
        input: "mekanism:dust_copper",
        output: "minecraft:copper_ingot",
        id: "copper_ingot_from_dust",
      },
      {
        input: "planetsandportals:zinc_dust",
        output: "create:zinc_ingot",
        id: "zinc_ingot_from_dust",
      },
    ];

    blastingRecipes.forEach((recipe) => {
      event
        .blasting(recipe.output, recipe.input)
        .id(`kubejs:minecraft/blasting/${recipe.id}`);
    });
  });
})();
