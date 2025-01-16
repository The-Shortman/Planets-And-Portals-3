JEIEvents.addItems('item', event => {
    [
		["create:crushed_raw_aluminum"]
    ].forEach((recipe) => {
		event.add(recipe[0])
    })
})

JEIEvents.hideItems('item', event => {
    [
		["planetsandportals:end_prevention_placeholder"]
    ].forEach((recipe) => {
		event.hide(recipe[0])
    })
})