// priority: 100

global.server = Object.freeze({
  /**
   * Global ore excavation multiplier values
   * Vein multipliers increase yield per operation
   * Drill multipliers increase extraction rate
   */
  POOR_VEIN_MULTIPLIER: 1,
  NORMAL_VEIN_MULTIPLIER: 2,
  RICH_VEIN_MULTIPLIER: 4,

  T1_DRILL_MULTIPLIER: 1,
  T2_DRILL_MULTIPLIER: 2,
  T3_DRILL_MULTIPLIER: 4,

  // Sequenced assembly builder
  createSequencedAssembly: (() => {
    //? Create Sequenced Assembly Builder by KonSola5
    //? Modified by _Shortman to include addToolDeployingStep and vintage improvements recipes

    function SequencedAssemblyBuilder(event, io) {
      this._event = event;
      this._input = io.input;
      this._transitional = io.transitional;
      this._outputs = io.outputs;
      this._id = io.id;
      this._steps = [];
      this._loopAmount = 1;
    }

    // Adds a new filling step
    SequencedAssemblyBuilder.prototype.addFillingStep = function (fluid) {
      this._steps.push(
        this._event.recipes.createFilling(this._transitional, [
          this._transitional,
          fluid,
        ])
      );
      return this;
    };

    // Adds a new pressing step
    SequencedAssemblyBuilder.prototype.addPressingStep = function () {
      this._steps.push(
        this._event.recipes.createPressing(
          this._transitional,
          this._transitional
        )
      );
      return this;
    };

    // Adds a new cutting step
    SequencedAssemblyBuilder.prototype.addCuttingStep = function (
      processingTime
    ) {
      let cuttingRecipe = this._event.recipes.createCutting(
        this._transitional,
        this._transitional
      );
      if (typeof processingTime !== "undefined")
        cuttingRecipe = cuttingRecipe.processingTime(processingTime);
      this._steps.push(cuttingRecipe);
      return this;
    };

    // Adds a new deploying step
    SequencedAssemblyBuilder.prototype.addDeployingStep = function (item) {
      // Inputs extracted into its own variable to work around the "union type too complex to represent" error
      const inputs = [this._transitional, item];
      this._steps.push(
        this._event.recipes.createDeploying(this._transitional, inputs)
      );
      return this;
    };

    // Adds a new deploying step that doesn't use the item
    SequencedAssemblyBuilder.prototype.addToolDeployingStep = function (item) {
      // Inputs extracted into its own variable to work around the "union type too complex to represent" error
      const inputs = [this._transitional, item];
      this._steps.push(
        this._event.recipes
          .createDeploying(this._transitional, inputs)
          .keepHeldItem()
      );
      return this;
    };

    // Adds a new vintage improvements spring coiling step
    SequencedAssemblyBuilder.prototype.addCoilingStep = function (
      springColor,
      processingTime
    ) {
      let coilingRecipe = this._event.recipes.vintageimprovements
        .coiling(this._transitional, this._transitional)
        .springColor(springColor);
      if (typeof processingTime !== "undefined")
        coilingRecipe = coilingRecipe.processingTime(processingTime);
      this._steps.push(coilingRecipe);
      return this;
    };
    
    // Adds a new vintage improvements curving step
    // Items used as the head must be tagged with vintageimprovements:curving_heads
    SequencedAssemblyBuilder.prototype.addCurvingStep = function (head) {
      this._steps.push(
        this._event.recipes.vintageimprovements
          .curving(this._transitional, this._transitional)
          .head(head),
      );
      return this;
    };

    // Adds a new vintage improvements hammering step
    // Items used as the anvil must be tagged with vintageimprovements:custom_hammering_blocks
    // If anvilBlock isn't specified, it defaults to the vanilla anvil
    SequencedAssemblyBuilder.prototype.addHammeringStep = function (
      anvilBlock
    ) {
      let hammeringRecipe = this._event.recipes.vintageimprovements.hammering(
        this._transitional,
        this._transitional,
      );
      if (typeof anvilBlock !== "undefined")
        hammeringRecipe = hammeringRecipe.anvilBlock(anvilBlock);
      this._steps.push(hammeringRecipe);
      return this;
    };

    // Adds a new vintage improvements laser cutting step
    SequencedAssemblyBuilder.prototype.addLaserCuttingStep = function (
      energyCost,
      maxChargeRate
    ) {
      this._steps.push(
        this._event.recipes.vintageimprovements
          .laser_cutting(this._transitional, this._transitional)
          .energyCost(energyCost)
          .maxChargeRate(maxChargeRate),
      );
      return this;
    };

    // Adds a new vintage improvements lathe turning step
    SequencedAssemblyBuilder.prototype.addTurningStep = function (
      processingTime
    ) {
      let turningRecipe = this._event.recipes.vintageimprovements.turning(
        this._transitional,
        this._transitional,
      );
      if (typeof processingTime !== "undefined")
        turningRecipe = turningRecipe.processingTime(processingTime);
      this._steps.push(turningRecipe);
      return this;
    };

    // Adds a new vintage improvements belt grinder polishing step
    SequencedAssemblyBuilder.prototype.addBeltPolishingStep = function (
      processingTime
    ) {
      let polishingRecipe = this._event.recipes.vintageimprovements.polishing(
        this._transitional,
        this._transitional,
      );
      if (typeof processingTime !== "undefined")
        polishingRecipe = polishingRecipe.processingTime(processingTime);
      this._steps.push(polishingRecipe);
      return this;
    };

    // Adds a new vintage improvements vibrating step
    SequencedAssemblyBuilder.prototype.addVibratingStep = function (
      processingTime
    ) {
      let vibratingRecipe = this._event.recipes.vintageimprovements.vibrating(
        this._transitional,
        this._transitional,
      );
      if (typeof processingTime !== "undefined")
        vibratingRecipe = vibratingRecipe.processingTime(processingTime);
      this._steps.push(vibratingRecipe);
      return this;
    };

    // Sets the amount of loops needed to finish the recipe
    SequencedAssemblyBuilder.prototype.loops = function (loopAmount) {
      this._loopAmount = loopAmount;
      return this;
    };

    // Builds the recipe
    SequencedAssemblyBuilder.prototype.build = function () {
      this._event.recipes.create
        .sequenced_assembly(this._outputs, this._input, this._steps)
        .transitionalItem(this._transitional)
        .loops(this._loopAmount)
        .id(`kubejs:create/sequenced_assembly/${this._id}`);
    };

    // Builds a new sequenced assembly recipe
    return function createSequencedAssembly(event, io) {
      return new SequencedAssemblyBuilder(event, io);
    };
  })(),
});
