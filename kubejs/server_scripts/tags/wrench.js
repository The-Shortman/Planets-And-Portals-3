(function createWrenchPickupTag() {
  ServerEvents.tags("item", (event) => {
    const wrenchPickupTag = [
      "mm:coke_oven_controller",
      "mm:coke_oven_item_input",
      "mm:coke_oven_item_output",
      "mm:coke_oven_fluid_input",
      "mm:coke_oven_fluid_output",
      "mm:coke_oven_filler",
      "mm:steel_furnace_controller",
      "mm:steel_furnace_item_input",
      "mm:steel_furnace_item_output",
      "mm:steel_furnace_fluid_input",
      "mm:steel_furnace_fluid_output",
    ];

    wrenchPickupTag.forEach((item) => {
      event.add("create:wrench_pickup", item);
    });
  });
})();
