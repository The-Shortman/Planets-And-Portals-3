// priority: 100

global.server = Object.freeze({
  createSequencedAssembly: (() => {
    //? Create Sequenced Assembly Builder by KonSola5
    //? Modified by _Shortman to include addToolDeployingStep

    function SequencedAssemblyBuilder(event, io) {
      this._event = event;
      this._input = io.input;
      this._transitional = io.transitional;
      this._outputs = io.outputs;
      this._steps = [];
      this._loopAmount = 1;
    }

    // Adds a new filling step
    SequencedAssemblyBuilder.prototype.addFillingStep = function (fluid) {
      this._steps.push(this._event.recipes.createFilling(this._transitional, [this._transitional, fluid]));
      return this;
    };

    // Adds a new pressing step
    SequencedAssemblyBuilder.prototype.addPressingStep = function () {
      this._steps.push(this._event.recipes.createPressing(this._transitional, this._transitional));
      return this;
    };

    // Adds a new cutting step
    SequencedAssemblyBuilder.prototype.addCuttingStep = function (processingTime) {
      let cuttingRecipe = this._event.recipes.createCutting(this._transitional, this._transitional);
      if (typeof processingTime !== "undefined") cuttingRecipe = cuttingRecipe.processingTime(processingTime);
      this._steps.push(cuttingRecipe);
      return this;
    };

    // Adds a new deploying step
    SequencedAssemblyBuilder.prototype.addDeployingStep = function (item) {
      // Inputs extracted into its own variable to work around the "union type too complex to represent" error
      const inputs = [this._transitional, item]
      this._steps.push(this._event.recipes.createDeploying(this._transitional, inputs));
      return this;
    };

    // Adds a new deploying step that doesn't use the item
    SequencedAssemblyBuilder.prototype.addToolDeployingStep = function (item) {
      // Inputs extracted into its own variable to work around the "union type too complex to represent" error
      const inputs = [this._transitional, item]
      this._steps.push(this._event.recipes.createDeploying(this._transitional, inputs).keepHeldItem());
      return this;
    }

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
        .loops(this._loopAmount);
    };

    // Builds a new sequenced assembly recipe
    return function createSequencedAssembly(event, io) {
      return new SequencedAssemblyBuilder(event, io);
    };
  })(),
});