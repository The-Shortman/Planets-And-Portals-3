(function createSequencedAssemblyRecipes() {
    const { BUCKET, BLOCK, INGOT, NUGGET } = global.fluids;
    const { createSequencedAssembly } = global.server;

    const placehold = "create:incomplete_precision_mechanism"

    ServerEvents.recipes ((event) => {
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
            .addFillingStep({ fluid: "planetsandportals:obsidian_solution", amount: BUCKET / 2 })
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
    });
})();