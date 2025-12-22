(function createSequencedAssemblyRecipes() {
  const { BUCKET, BLOCK, INGOT, NUGGET } = global.fluids;
  const { createSequencedAssembly } = global.server;

  const placehold = "create:incomplete_precision_mechanism";

  ServerEvents.recipes((event) => {
    createSequencedAssembly(event, {
      input: "tfmg:steel_block",
      transitional: "tfmg:unprocessed_heavy_plate",
      outputs: ["tfmg:heavy_plate"],
    })
      .addPressingStep()
      .addDeployingStep("create:sturdy_sheet")
      .addPressingStep()
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "planetsandportals:steel_electrode",
      transitional: "tfmg:unprocessed_heavy_plate",
      outputs: ["tfmg:heavy_plate"],
    })
      .addFillingStep({
        fluid: "planetsandportals:obsidian_solution",
        amount: BUCKET / 2,
      })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "tfmg:heavy_plate",
      transitional: "tfmg:unfinished_steel_mechanism",
      outputs: ["tfmg:steel_mechanism"],
    })
      .addCuttingStep()
      .addDeployingStep("create:cogwheel")
      .addDeployingStep("tfmg:screw")
      .addToolDeployingStep("tfmg:screwdriver")
      .loops(4)
      .build();

    createSequencedAssembly(event, {
      input: "create:powdered_obsidian",
      transitional: "create:unprocessed_obsidian_sheet",
      outputs: [
        Item.of("create:sturdy_sheet").withChance(6),
        Item.of("minecraft:iron_nugget").withChance(4),
      ],
    })
      .addDeployingStep("minecraft:iron_nugget")
      .addPressingStep()
      .addPressingStep()
      .loops(5)
      .build();

    createSequencedAssembly(event, {
      input: "ad_astra:desh_block",
      transitional: placehold,
      outputs: ["ad_astra:desh_plate"],
    })
      .addPressingStep()
      .addDeployingStep("tfmg:heavy_plate")
      .addPressingStep()
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "tfmg:heavy_machinery_casing",
      transitional: "planetsandportals:unfinished_engine_frame",
      outputs: ["ad_astra:engine_frame"],
    })
      .addFillingStep({ fluid: "tfmg:cooling_fluid", amount: BUCKET })
      .addDeployingStep("tfmg:screw")
      .addToolDeployingStep("tfmg:screwdriver")
      .addDeployingStep("tfmg:heavy_plate")
      .addDeployingStep("tfmg:screw")
      .addToolDeployingStep("tfmg:screwdriver")
      .build();

    createSequencedAssembly(event, {
      input: "planetsandportals:sand_encased_egg",
      transitional: "planetsandportals:unfinished_soul_sand",
      outputs: [
        Item.of("minecraft:soul_sand").withChance(1),
        Item.of("minecraft:sand").withChance(7),
      ],
    })
      .addPressingStep()
      .loops(20)
      .build();

    createSequencedAssembly(event, {
      input: "create:rose_quartz",
      transitional: placehold,
      outputs: ["create:polished_rose_quartz"],
    })
      .addCuttingStep()
      .addCuttingStep()
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "create:iron_sheet",
      transitional: placehold,
      outputs: ["create:electron_tube"],
    })
      .addDeployingStep("tfmg:rubber_sheet")
      .addDeployingStep("create:polished_rose_quartz")
      .build();

    createSequencedAssembly(event, {
      input: "create:brass_sheet",
      transitional: "create:incomplete_precision_mechanism",
      outputs: ["create:precision_mechanism"],
    })
      .addDeployingStep("create:shaft")
      .addDeployingStep("create:electron_tube")
      .addDeployingStep("create:crafter_slot_cover")
      .build();

    createSequencedAssembly(event, {
      input: "create:brass_sheet",
      transitional: placehold,
      outputs: [Item.of("create:crafter_slot_cover", 3)],
    })
      .addCuttingStep()
      .addCuttingStep()
      .build();

    createSequencedAssembly(event, {
      input: "mobsandfamiliars:mossie",
      transitional: "mobsandfamiliars:watery_mossie",
      outputs: ["mobsandfamiliars:plump_mossie"],
    })
      .addFillingStep({ fluid: "minecraft:water", amount: BUCKET })
      .loops(5)
      .build();
  });
})();
