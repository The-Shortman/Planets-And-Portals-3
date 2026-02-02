(function planetsAndPortalsFluidRegistry() {
  StartupEvents.registry("fluid", (event) => {
    event
      .create("planetsandportals:wart_juice")
      .displayName("Wart Juice")
      .thinTexture(0xbc3e49)
      .bucketColor(0xbc3e49);

    event
      .create("planetsandportals:blaze_blood")
      .displayName("Blaze Blood")
      .thickTexture(0xffffff)
      .stillTexture("planetsandportals:block/fluid/blaze_blood/still")
      .flowingTexture("planetsandportals:block/fluid/blaze_blood/flowing")
      .bucketColor(0xeb9600);

    // Molten Materials
    event
      .create("planetsandportals:molten_deshmium")
      .displayName("Molten Deshmium")
      .thickTexture(0xffa200)
      .bucketColor(0xffa200);
    event
      .create("planetsandportals:molten_osmish")
      .displayName("Molten Osmish")
      .thickTexture(0xa4dddd)
      .bucketColor(0xa4dddd);

    // Ad Astra rocket fuels

    event
      .create("planetsandportals:hydrocarbon_fuel") // Tier 1 Rocket Fuel
      .displayName("Hydrocarbon-based Rocket Fuel")
      .thinTexture(0xff3636)
      .bucketColor(0xff3636);

    event
      .create("planetsandportals:helium_fuel") // Tier 2 Rocket Fuel
      .displayName("Helium-based Rocket Fuel")
      .thinTexture(0xd6ca42)
      .bucketColor(0xd6ca42);
  });
})();

StartupEvents.registry("fluid", (e) => {});
