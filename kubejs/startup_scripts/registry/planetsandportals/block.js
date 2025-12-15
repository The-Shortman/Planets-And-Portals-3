(function planetsAndPortalsBlockRegistry() {
  StartupEvents.registry("block", (event) => {
    const blockRegistry = [
      {
        id: "planetsandportals:grout", // Texture from Tinkers Construct
        name: "Grout",
        mat: "wet_grass",
        hardness: 0.5,
        res: 1.0,
        tool: "shovel",
      },
    ];

    blockRegistry.forEach((block) => {
      if (block.tool != 0) {
        event
          .create(block.id)
          .displayName(block.name)
          .soundType(block.mat)
          .hardness(block.hardness)
          .resistance(block.res)
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
