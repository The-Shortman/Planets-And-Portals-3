function ReplaceVillagerTrades(entity) {
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
                    trade.buy.Count = 1
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

ItemEvents.entityInteracted(event => {
    if (event.target.type == "minecraft:villager") {
        ReplaceVillagerTrades(event.target)
    }
})