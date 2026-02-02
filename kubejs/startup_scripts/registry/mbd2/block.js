(function mbd2BlockRegistry() {
  StartupEvents.registry("block", (event) => {
    const blockRegistry = [
      {
        id: "mbd2:coke_oven_filler", // Texture from TFMG
        name: "Coke Oven",
        mat: "metal",
        hardness: 0.5,
        res: 1.0,
        tool: "pickaxe",
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
