(function ppfmgBlockRegistry() {
  // This is a set of blocks that were intitially part of TFMG.
  // However, the mod has been removed due to a plethora of bugs present within it.
  // Instead, PPFMG is now used to register the items. TFMG is fully licensed under the MIT License.
  StartupEvents.registry("block", (event) => {
    const basicBlocks = [
      {
        id: "ppfmg:cast_iron_block",
        name: "Cast Iron Block",
        material: "metal",
        hardness: 1.0,
        resistance: 2.0,
        tool: "pickaxe",
      },
      {
        id: "ppfmg:fireclay",
        name: "Fireclay",
        material: "sand",
        hardness: 0.2,
        resistance: 0.2,
        tool: "shovel",
      },
      {
        id: "ppfmg:fireproof_bricks",
        name: "Fireproof Bricks",
        material: "stone",
        hardness: 0.7,
        resistance: 2.0,
        tool: "pickaxe",
      },
      {
        id: "ppfmg:hardened_planks",
        name: "Hardened Planks",
        material: "wood",
        hardness: 0.7,
        resistance: 0.5,
        tool: "axe",
      },
      {
        id: "ppfmg:heavy_machinery_casing",
        name: "Heavy Machinery Casing",
        material: "metal",
        hardness: 1.0,
        resistance: 5.0,
        tool: "pickaxe",
      },
      {
        id: "ppfmg:slag_block",
        name: "Slag Block",
        material: "stone",
        hardness: 0.5,
        resistance: 1.0,
        tool: "axe",
      },
      {
        id: "ppfmg:slag_bricks",
        name: "Slag Bricks",
        material: "stone",
        hardness: 0.5,
        resistance: 1.0,
        tool: "axe",
      },
      {
        id: "ppfmg:steel_casing",
        name: "Steel Casing",
        material: "wood",
        hardness: 0.5,
        resistance: 1.0,
        tool: "axe",
      },
    ];

    const wallBlocks = [
      {
        id: "ppfmg:fireproof_brick_wall",
        name: "Fireproof Brick Wall",
        material: "stone",
        hardness: 0.5,
        resistance: 1.0,
        tool: "pickaxe",
      },
    ];

    const slabBlocks = [
      {
        id: "ppfmg:hardened_planks_slab",
        name: "Hardened Planks Slab",
        material: "wood",
        hardness: 0.5,
        resistance: 1.0,
        tool: "axe",
      },
    ];

    const cautionBlockColours = [
      "blue",
      "brown",
      "cyan",
      "gray",
      "green",
      "light_blue",
      "light_gray",
      "lime",
      "magenta",
      "orange",
      "pink",
      "purple",
      "red",
      "white",
      "yellow",
    ];

    basicBlocks.forEach((block) => {
      if (block.tool != 0) {
        event
          .create(block.id, "basic")
          .displayName(block.name)
          .soundType(block.material)
          .hardness(block.hardness)
          .resistance(block.resistance)
          .tagBlock(`mineable/${block.tool}`);
      } else {
        event
          .create(block.id, "basic")
          .displayName(block.name)
          .soundType(block.mat)
          .hardness(block.hardness)
          .resistance(block.res);
      }
    });

    wallBlocks.forEach((block) => {
      if (block.tool != 0) {
        event
          .create(block.id, "wall")
          .displayName(block.name)
          .soundType(block.material)
          .hardness(block.hardness)
          .resistance(block.resistance)
          .tagBlock(`mineable/${block.tool}`);
      } else {
        event
          .create(block.id, "wall")
          .displayName(block.name)
          .soundType(block.mat)
          .hardness(block.hardness)
          .resistance(block.res);
      }
    });

    slabBlocks.forEach((block) => {
      if (block.tool != 0) {
        event
          .create(block.id, "slab")
          .displayName(block.name)
          .soundType(block.material)
          .hardness(block.hardness)
          .resistance(block.resistance)
          .tagBlock(`mineable/${block.tool}`);
      } else {
        event
          .create(block.id, "wall")
          .displayName(block.name)
          .soundType(block.mat)
          .hardness(block.hardness)
          .resistance(block.res);
      }
    });

    cautionBlockColours.forEach((colour) => {
      event
        .create(`ppfmg:${colour}_caution_block`, "basic")
        .soundType("stone")
        .hardness(1.0)
        .resistance(5.0)
        .tagBlock(`mineable/pickaxe`);
    });
  });
})();
