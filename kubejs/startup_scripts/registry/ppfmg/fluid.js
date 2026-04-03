(function ppfmgFluidRegistry() {
  StartupEvents.registry("fluid", (event) => {
    event
      .create("ppfmg:carbon_dioxide")
      .displayName("Carbon Dioxide")
      .stillTexture("ppfmg:block/fluid/carbon_dioxide/still");
    event
      .create("ppfmg:cooling_fluid")
      .displayName("Cooling Fluid")
      .stillTexture("ppfmg:block/fluid/cooling_fluid/still")
      .flowingTexture("ppfmg:block/fluid/cooling_fluid/flowing");
    event
      .create("ppfmg:creosote")
      .displayName("Creosote")
      .stillTexture("ppfmg:block/fluid/creosote/still")
      .flowingTexture("ppfmg:block/fluid/creosote/flowing");
    event
      .create("ppfmg:diesel")
      .displayName("Diesel")
      .stillTexture("ppfmg:block/fluid/diesel/still")
      .flowingTexture("ppfmg:block/fluid/diesel/flowing");
    event
      .create("ppfmg:ethylene")
      .displayName("Ethylene")
      .stillTexture("ppfmg:block/fluid/ethylene/still");
    event
      .create("ppfmg:gasoline")
      .displayName("Gasoline")
      .stillTexture("ppfmg:block/fluid/gasoline/still")
      .flowingTexture("ppfmg:block/fluid/gasoline/flowing");
    event
      .create("ppfmg:heavy_oil")
      .displayName("Heavy Oil")
      .stillTexture("ppfmg:block/fluid/heavy_oil/still")
      .flowingTexture("ppfmg:block/fluid/heavy_oil/flowing");
    event
      .create("ppfmg:kerosene")
      .displayName("Kerosene")
      .stillTexture("ppfmg:block/fluid/kerosene/still")
      .flowingTexture("ppfmg:block/fluid/kerosene/flowing");
    event
      .create("ppfmg:lpg")
      .displayName("L.P.G.")
      .stillTexture("ppfmg:block/fluid/lpg/still");
    event
      .create("ppfmg:lubrication_oil")
      .displayName("Lubrication Oil")
      .stillTexture("ppfmg:block/fluid/lubrication_oil/still")
      .flowingTexture("ppfmg:block/fluid/lubrication_oil/flowing");
    event
      .create("ppfmg:molten_plastic")
      .displayName("Molten Plastic")
      .stillTexture("ppfmg:block/fluid/molten_plastic/still")
      .flowingTexture("ppfmg:block/fluid/molten_plastic/flowing");
    event
      .create("ppfmg:molten_slag")
      .displayName("Molten Slag")
      .stillTexture("ppfmg:block/fluid/molten_slag/still")
      .flowingTexture("ppfmg:block/fluid/molten_slag/flowing");
    event
      .create("ppfmg:molten_steel")
      .displayName("Molten Steel")
      .stillTexture("ppfmg:block/fluid/molten_steel/still")
      .flowingTexture("ppfmg:block/fluid/molten_steel/flowing");
    event
      .create("ppfmg:naphtha")
      .displayName("Naphtha")
      .stillTexture("ppfmg:block/fluid/naphtha/still")
      .flowingTexture("ppfmg:block/fluid/naphtha/flowing");
    event
      .create("ppfmg:propane")
      .displayName("Propane")
      .stillTexture("ppfmg:block/fluid/propane/still");
    event
      .create("ppfmg:propylene")
      .displayName("Propylene")
      .stillTexture("ppfmg:block/fluid/propylene/still");
  });
})();
