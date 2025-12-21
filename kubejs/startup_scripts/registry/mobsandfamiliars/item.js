(function mobsandfamiliarsItemRegistry() {
  StartupEvents.registry("item", (event) => {
    event
      .create("mobsandfamiliars:static_mossie", "basic")
      .displayName("Mossie")
      .maxStackSize(64);

    event
      .create("mobsandfamiliars:watery_mossie", "create:sequenced_assembly")
      .displayName("Watery Mossie")
      .maxStackSize(1);

    event
      .create("mobsandfamiliars:plump_mossie", "basic")
      .displayName("Plump Mossie")
      .maxStackSize(64);

    event
      .create("mobsandfamiliars:flattened_mossie")
      .displayName("Flattened Mossie")
      .maxStackSize(64);
  });
})();
