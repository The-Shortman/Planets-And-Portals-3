(function planetsAndPortalsBlockRegistry() {
  StartupEvents.registry("block", (event) => {
    const blockRegistry = [
      {
        id: "planetsandportals:grout", // Texture from Tinkers Construct
        name: "Grout",
        material: "wet_grass",
        hardness: 0.5,
        resistance: 1.0,
        tool: "shovel",
      },
      {
        id: "planetsandportals:incomplete_coke_oven_t1",
        name: "Incomplete Coke Oven T1",
        material: "stone",
        hardness: 0.5,
        resistance: 1.0,
        tool: "pickaxe",
      },
      {
        id: "planetsandportals:incomplete_coke_oven_t2",
        name: "Incomplete Coke Oven T2",
        material: "stone",
        hardness: 0.5,
        resistance: 1.0,
        tool: "pickaxe",
      },
      {
        id: "planetsandportals:incomplete_coke_oven_t3",
        name: "Incomplete Coke Oven T3",
        material: "stone",
        hardness: 0.5,
        resistance: 1.0,
        tool: "pickaxe",
      },
    ];

    blockRegistry.forEach((block) => {
      if (block.tool != 0) {
        event
          .create(block.id)
          .displayName(block.name)
          .soundType(block.material)
          .hardness(block.hardness)
          .resistance(block.resistance)
          .tagBlock(`mineable/${block.tool}`);
      } else {
        event
          .create(block.id)
          .displayName(block.name)
          .soundType(block.mat)
          .hardness(block.hardness)
          .resistance(block.res);
      }
    });
  });
})();
