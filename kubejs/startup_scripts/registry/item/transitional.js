// Items used as transitionals in sequenced assemblies

StartupEvents.registry('item', e => {
	[
		{
		id: 'planetsandportals:unfinished_engine_frame',
		name: 'Unfinished Engine Frame',
		stackSize: 1
		}
	].forEach((item) => {
        e.create(item.id, 'create:sequenced_assembly').displayName(item.name).maxStackSize(item.stackSize ?? 64).rarity(item.rarity ?? 'common')
    });
})