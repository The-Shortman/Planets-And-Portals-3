(function createSequencedAssemblyRecipes() {
  const { BUCKET, BLOCK, INGOT, NUGGET } = global.fluids;
  const { createSequencedAssembly } = global.server;

  const placehold = "create:incomplete_precision_mechanism";

  ServerEvents.recipes((event) => {
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
      transitional: "planetsandportals:unfinished_rose_quartz",
      outputs: ["create:polished_rose_quartz"],
    })
      .addCuttingStep()
      .addCuttingStep()
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "create:iron_sheet",
      transitional: "planetsandportals:incomplete_electron_tube",
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
      transitional: "planetsandportals:incomplete_crafter_slot_cover",
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
