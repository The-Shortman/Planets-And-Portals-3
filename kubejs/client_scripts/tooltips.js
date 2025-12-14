(function tooltips() {
  ItemEvents.tooltip((event) => {
    const redTooltips = [
      {
        ids: [
          "tfmg:electric_casing",
          "tfmg:copper_wire",
          "tfmg:aluminium_wire",
          "tfmg:copper_coil",
          "tfmg:copper_cable",
          "tfmg:cable_connector",
          "tfmg:firebox",
          "tfmg:voltmeter",
          "tfmg:energy_meter",
          "tfmg:lead_ingot",
          "tfmg:lead_sword",
          "tfmg:lead_shovel",
          "tfmg:lead_pickaxe",
          "tfmg:lead_hoe",
          "tfmg:lead_block",
          "ae2:inscriber",
          "grapplemod:repeller",
          "grapplemod:forcefieldupgradeitem",
        ],
        text: "Disabled. This does not have a recipe due to balancing or progression reasons!",
      },
      {
        ids: ["tfmg:blast_furnace_output"],
        text: "Recipe disabled. Replaced by the Masterful Machinery blast furnace rework.",
      },
      {
        ids: ["tfmg:coke_oven"],
        text: "Recipe disabled. Use the Masterful Machinery coke oven rework instead.",
      },
      {
        ids: [
          "ad_astra:nasa_workbench",
          "ad_astra:tier_1_rocket",
          "ad_astra:tier_2_rocket",
        ],
        text: "NASA Workbench is disabled. Use Mechanical Crafters instead to craft the tier 1 and 2 rockets.",
      },
      {
        ids: ["ad_astra:tier_3_rocket", "ad_astra:tier_4_rocket"],
        text: "NASA Workbench is disabled. This currently does NOT have a recipe!",
      },
      {
        ids: [
          "ad_astra:fuel_refinery",
          "ad_astra:etrionic_blast_furnace",
          "ad_astra:compressor",
          "ad_astra:cryo_freezer",
        ],
        text: "Disabled - check the recipes in EMI for alternatives.",
      },
      {
        ids: ["ad_astra:steel_ingot", "mekanism:ingot_steel"],
        text: "Disabled - use [Create: The Factory Must Grow] steel instead.",
      },
      {
        ids: [
          "ad_astra:coal_generator",
          "mekanismgenerators:wind_generator",
          "mekanismgenerators:heat_generator",
          "mekanismgenerators:gas_burning_generator",
          "mekanismgenerators:bio_generator",
        ],
        text: "Disabled - use generator coils from [Create: New Age] instead, or solar panels.",
      },
      {
        ids: [
          "mm:blast_furnace_fluid_input",
          "mm:blast_furnace_item_output",
          "mm:coke_oven_fluid_input",
          "mm:steel_furnace_fluid_input",
          "mm:steel_furnace_item_output",
          "mm:steel_furnace_energy_output",
          "mm:fuel_mixer_energy_output",
        ],
        text: "Unused machinery port - no crafting recipe.",
      },
      {
        ids: ["ad_astra:oil", "ad_astra:oil_bucket"],
        text: "Use the crude oil from [Create: TFMG] instead.",
      },
    ];

    const greenTooltips = [
      {
        ids: ["ad_astra:oil", "ad_astra:oil_bucket"],
        text: 'Needs to be "crudified" in a mixing basin.',
      },
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
