// Credit to TheOverlyCaffienatedTrashPanda for letting me repurpose this unimplemented code from Create: Astral

/**
 * @typedef {object} addTrades
 * @property {string} villagerType - String - Requird
 * @property {number} villagerLevel - Int - Requird
 * @property {string} buyItem - String - Requird
 * @property {string} sellItem - String - Requird
 * @property {number} buyCount - Int - Requird
 * @property {number} sellCount - Int - Requird
 * @property {boolean} rewardExp - Bool - Requird
 * @property {number} maxUses - Int - Requird
 * @property {number} uses - Int - Requird
 */

const addTrades = [ // Adding trades - buyItem is what the villager wants, sellItem is what the villager sells

    // Armorer

    // Butcher
    
    // Cartographer

    {
        villagerType: "minecraft:cartographer",
        villagerLevel: 3,
        buyItem: "supplementaries:globe_sepia",
        sellItem: "numismatics:sprocket",
        buyCount: 1,
        sellCount: 2,
        rewardExp: true,
        maxUses: 4,
        uses: 0
    },

    // Cleric
    
    // Farmer

    {
        villagerType: "minecraft:farmer",
        villagerLevel: 1,
        buyItem: "numismatics:spur",
        sellItem: "minecraft:kelp",
        buyCount: 2,
        sellCount: 4,
        rewardExp: true,
        maxUses: 4,
        uses: 0
    },
    {
        villagerType: "minecraft:farmer",
        villagerLevel: 1,
        buyItem: "numismatics:spur",
        sellItem: "minecraft:kelp",
        buyCount: 4,
        sellCount: 1,
        rewardExp: true,
        maxUses: 2,
        uses: 0
    },
    {
        villagerType: "minecraft:farmer",
        villagerLevel: 3,
        buyItem: "numismatics:bevel",
        sellItem: "minecraft:cow_spawn_egg",
        buyCount: 2,
        sellCount: 1,
        rewardExp: true,
        maxUses: 1,
        uses: 0
    },
    {
        villagerType: "minecraft:farmer",
        villagerLevel: 3,
        buyItem: "numismatics:bevel",
        sellItem: "minecraft:sheep_spawn_egg",
        buyCount: 2,
        sellCount: 1,
        rewardExp: true,
        maxUses: 1,
        uses: 0
    },

    // Fisherman

    // Fletcher

    // Leatherworker

    // Librarian

    // Mason

    {
        villagerType: "minecraft:mason",
        villagerLevel: 1,
        buyItem: "numismatics:spur",
        sellItem: "minecraft:sand",
        buyCount: 4,
        sellCount: 64,
        rewardExp: true,
        maxUses: 1,
        uses: 0
    },

    // Shepherd

    {
        villagerType: "minecraft:shepherd",
        villagerLevel: 2,
        buyItem: "numismatics:bevel",
        sellItem: "comforts:sleeping_bag_white",
        buyCount: 1,
        sellCount: 1,
        rewardExp: true,
        maxUses: 1,
        uses: 0
    },

    // Toolsmith

    // Weaponsmith

]

function ReplaceVillagerTrades(entity) { // This replaces all emeralds with numismatic coins and tries to put them to their roundest equivalent currency
    let nbt = entity.serializeNBT()

    if (nbt.Offers && nbt.Offers.Recipes) {
        let recipes = nbt.Offers.Recipes

        recipes.forEach(trade => {
            if (trade.buy.id === "minecraft:emerald") {
                if ((trade.buy.Count % 32) == 0) {
                    trade.buy.id = "numismatics:cog"
                    trade.buy.Count = (trade.buy.Count / 32)
                } else if ((trade.buy.Count % 8) == 0) {
                    trade.buy.id = "numismatics:sprocket"
                    trade.buy.Count = (trade.buy.Count / 8)
                } else if ((trade.buy.Count % 4) == 0) {
                    trade.buy.id = "numismatics:bevel"
                    trade.buy.Count = (trade.buy.Count / 4)
                } else if (trade.buy.Count > 32) {
                    trade.buy.id = "numismatics:cog"
                    trade.buy.Count = 2
                } else {
                    trade.buy.id = "numismatics:spur"
                    trade.buy.Count = (trade.buy.Count * 2)
                }
            }

            if (trade.sell.id === "minecraft:emerald") {
                if ((trade.sell.Count % 32) == 0) {
                    trade.sell.id = "numismatics:cog"
                    trade.sell.Count = (trade.sell.Count / 32)
                } else if ((trade.sell.Count % 8) == 0) {
                    trade.sell.id = "numismatics:sprocket"
                    trade.sell.Count = (trade.sell.Count / 8)
                } else if ((trade.sell.Count % 4) == 0) {
                    trade.sell.id = "numismatics:bevel"
                    trade.sell.Count = (trade.sell.Count / 4)
                } else if (trade.sell.Count > 32) {
                    trade.sell.id = "numismatics:cog"
                    trade.sell.Count = 1
                } else {
                    trade.sell.id = "numismatics:spur"
                    trade.sell.Count = (trade.sell.Count * 2)
                }
            }
        })
        entity.deserializeNBT(nbt)
    }
}

function AddVillagerTrades(entity) { // Don't touch this (it executes the added trades in the earlier addTrades const)
    let nbt = entity.serializeNBT()

    if (nbt.Offers && nbt.Offers.Recipes) {
        let recipes = nbt.Offers.Recipes;


        addTrades.forEach(newTrade => {
            if (nbt.VillagerData.profession === newTrade.villagerType && nbt.VillagerData.level >= newTrade.villagerLevel) {

                let tradeExists = recipes.some(trade => {
                    let buyMatches = trade.buy.id === newTrade.buyItem && trade.buy.Count === newTrade.buyCount;
                    let sellMatches = trade.sell.id === newTrade.sellItem && trade.sell.Count === newTrade.sellCount;
                    return buyMatches && sellMatches;
                });

                if (!tradeExists) {
                let newRecipe = {
                    buy: { id: newTrade.buyItem, Count: newTrade.buyCount },
                    sell: { id: newTrade.sellItem, Count: newTrade.sellCount },
                    rewardExp: newTrade.rewardExp,
                    maxUses: newTrade.maxUses,
                    uses: newTrade.uses
                }
                recipes.push(newRecipe);
            }}
        })
        entity.deserializeNBT(nbt)
    }
}

ItemEvents.entityInteracted(event => {
    if (event.target.type == "minecraft:villager" || event.target.type == "minecraft:villager" || event.target.type == "ad_astra:lunarian" || event.target.type == "ad_astra:lunarian_wandering_trader") {
        ReplaceVillagerTrades(event.target)
        AddVillagerTrades(event.target)
    }
});