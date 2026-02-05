(function createSequencedAssemblyRecipes() {
  const { BUCKET, BLOCK, INGOT, NUGGET } = global.fluids;
  const { createSequencedAssembly } = global.server;

  // Curving heads
  const convex = "vintageimprovements:convex_curving_head";
  const concave = "vintageimprovements:concave_curving_head";
  const wShaped = "vintageimprovements:w_shaped_curving_head";
  const vShaped = "vintageimprovements:v_shaped_curving_head";

  // Placeholder
  const placehold = "create:incomplete_precision_mechanism";

  ServerEvents.recipes((event) => {
    createSequencedAssembly(event, {
      input: "planetsandportals:sand_encased_egg",
      transitional: "planetsandportals:unfinished_soul_sand",
      outputs: [
        Item.of("minecraft:soul_sand").withChance(1),
        Item.of("minecraft:sand").withChance(7),
      ],
      id: "soul_sand_from_encased_egg",
    })
      .addPressingStep()
      .loops(20)
      .build();

    createSequencedAssembly(event, {
      input: "create:rose_quartz",
      transitional: "planetsandportals:unfinished_rose_quartz",
      outputs: ["create:polished_rose_quartz"],
      id: "polished_rose_quartz",
    })
      .addCuttingStep()
      .addCuttingStep()
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "create:iron_sheet",
      transitional: "planetsandportals:incomplete_electron_tube",
      outputs: ["create:electron_tube"],
      id: "electron_tube",
    })
      .addDeployingStep("ppfmg:rubber_sheet")
      .addDeployingStep("create:polished_rose_quartz")
      .build();

    createSequencedAssembly(event, {
      input: "create:brass_sheet",
      transitional: "create:incomplete_precision_mechanism",
      outputs: ["create:precision_mechanism"],
      id: "precision_mechanism",
    })
      .addDeployingStep("create:shaft")
      .addDeployingStep("create:electron_tube")
      .addDeployingStep("create:crafter_slot_cover")
      .build();

    createSequencedAssembly(event, {
      input: "create:brass_sheet",
      transitional: "planetsandportals:unfinished_crafter_slot_cover",
      outputs: [Item.of("create:crafter_slot_cover", 3)],
      id: "crafter_slot_cover",
    })
      .addCuttingStep()
      .addCuttingStep()
      .build();

    createSequencedAssembly(event, {
      input: "mobsandfamiliars:mossie",
      transitional: "mobsandfamiliars:watery_mossie",
      outputs: ["mobsandfamiliars:plump_mossie"],
      id: "plump_mossie",
    })
      .addFillingStep({ fluid: "minecraft:water", amount: BUCKET })
      .loops(5)
      .build();

    createSequencedAssembly(event, {
      input: "ppfmg:concave_heavy_plate",
      transitional: "ppfmg:unfinished_steel_mechanism",
      outputs: ["ppfmg:unevacuated_steel_mechanism"],
      id: "unevacuated_steel_mechanism",
    })
      .addDeployingStep("create:precision_mechanism")
      .addDeployingStep("vintageimprovements:steel_spring")
      .addDeployingStep("ppfmg:rubber_sheet")
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "create:cardboard",
      transitional: "planetsandportals:incomplete_cardboard_mechanism",
      outputs: ["planetsandportals:cardboard_mechanism"],
      id: "cardboard_mechanism",
    })
      .addDeployingStep("create:electron_tube")
      .addDeployingStep("create:electron_tube")
      .addDeployingStep("create:cardboard")
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "ppfmg:heavy_machinery_casing",
      transitional: "planetsandportals:incomplete_generator_coil",
      outputs: ["create_new_age:generator_coil"],
      id: "generator_coil",
    })
      .addDeployingStep("create_new_age:copper_wire_block")
      .addDeployingStep("create_new_age:copper_wire_block")
      .addDeployingStep("create_new_age:copper_wire_block")
      .addDeployingStep("create_new_age:copper_wire_block")
      .addFillingStep({ fluid: "ppfmg:lubrication_oil", amount: BUCKET })
      .build();

    createSequencedAssembly(event, {
      input: "create:brass_sheet",
      transitional: "vintageimprovements:incomplete_recipe_card",
      outputs: ["vintageimprovements:recipe_card"],
      id: "recipe_card",
    })
      .addDeployingStep("minecraft:paper")
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "ppfmg:heavy_plate",
      transitional: "planetsandportals:incomplete_nose_cone",
      outputs: ["ad_astra:rocket_nose_cone"],
      id: "nose_cone",
    })
      .addCurvingStep(concave)
      .addDeployingStep("minecraft:lightning_rod")
      .build();
  });
})();
