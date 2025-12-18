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
    ];

    blastingRecipes.forEach((recipe) => {
      event
        .blasting(recipe.output, recipe.input)
        .id(`kubejs:minecraft/blasting/${recipe.id}`);
    });
  });
})();
