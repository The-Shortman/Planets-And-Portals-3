(function tooltips() {
  ItemEvents.tooltip((event) => {
    const redTooltips = [
      {
        ids: [
          "ad_astra:tier_1_rocket",
          "ad_astra:tier_2_rocket",
          "ad_astra:tier_3_rocket",
          "ad_astra:tier_4_rocket",
        ],
        text: "This currently does NOT have a recipe!",
      },
    ];

    const greenTooltips = [
      {
        ids: "minecraft:rotten_flesh",
        text: "Can be smelted/bulk blasted into leather.",
      },
      {
        ids: "minecraft:leather",
        text: "Can be obtained from smelting/bulk blasting rotten flesh.",
      },
      {
        ids: [
          "createoreexcavation:drilling_machine",
          "createoreexcavation:extractor",
        ],
        text: "All drilling recipes have a stress impact of 256x RPM.",
      },
    ];

    redTooltips.forEach((field) => {
      event.add(field.ids, Text.of(field.text).darkRed());
    });

    greenTooltips.forEach((field) => {
      event.add(field.ids, Text.of(field.text).darkGreen());
    });
  });
})();
