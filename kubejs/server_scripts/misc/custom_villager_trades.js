/**
 * @typedef {object} addTrades
 * @property {string} villagerType - String - Requird
 * @property {number} villagerLevel - Int - Requird
 * @property {string} buyItem - String - Requird
 * @property {string} sellItem - String - Requird
 * @property {number} maxUses - Int - Requird
 */

const addTrades = [
	// Armorer

	// Butcher

	// Cartographer

	{
		villagerType: "minecraft:cartographer",
		villagerLevel: 3,
		buyItem: [TradeItem.of("supplementaries:globe_sepia", 1, 1)],
		sellItem: TradeItem.of("numismatics:sprocket", 1, 3),
		maxUses: 1
	},

	// Cleric
	
	// Farmer

	{
		villagerType: "minecraft:farmer",
		villagerLevel: 1,
		buyItem: [TradeItem.of("numismatics:spur", 2, 2)],
		sellItem: TradeItem.of("minecraft:kelp", 4, 4),
		maxUses: 4
	},
	{
		villagerType: "minecraft:farmer",
		villagerLevel: 1,
		buyItem: [TradeItem.of("numismatics:spur", 4, 4)],
		sellItem: TradeItem.of("minecraft:cactus", 1, 1),
		maxUses: 2
	},

	// Fisherman

	// Fletcher

	// Leatherworker

	// Librarian

	// Mason

	{
		villagerType: "minecraft:mason",
		villagerLevel: 1,
		buyItem: [TradeItem.of("numismatics:spur", 4, 4)],
		sellItem: TradeItem.of("minecraft:sand", 64, 64),
		maxUses: 1
	},

	// Shepherd

	{
		villagerType: "minecraft:shepherd",
		villagerLevel: 2,
		buyItem: [TradeItem.of("numismatics:bevel", 1, 1)],
		sellItem: TradeItem.of("comforts:sleeping_bag_white", 1, 1),
		maxUses: 1
	},
	{
		villagerType: "minecraft:shepherd",
		villagerLevel: 3,
		buyItem: [TradeItem.of("numismatics:bevel", 2, 2)],
		sellItem: TradeItem.of("minecraft:cow_spawn_egg", 1, 1),
		maxUses: 1
	},
	{
		villagerType: "minecraft:shepherd",
		villagerLevel: 3,
		buyItem: [TradeItem.of("numismatics:sprocket", 1, 1)],
		sellItem: TradeItem.of("minecraft:sheep_spawn_egg", 1, 1),
		maxUses: 1
	},
	{
		villagerType: "minecraft:shepherd",
		villagerLevel: 3,
		buyItem: [TradeItem.of("numismatics:bevel", 2, 2)],
		sellItem: TradeItem.of("minecraft:pig_spawn_egg", 1, 1),
		maxUses: 1
	},

	// Toolsmith

	// Weaponsmith
];

function AddNewTrades(event) {
	addTrades.forEach(newTrade => {
		event.addTrade(newTrade.villagerType, newTrade.villagerLevel, newTrade.buyItem, newTrade.sellItem).maxUses(newTrade.maxUses)
	})
};

MoreJSEvents.villagerTrades((event) => {
	AddNewTrades(event);
});