StartupEvents.registry('fluid', e => {

    // Molten Materials
    e.create('planetsandportals:obsidian_solution')
        .displayName('Obsidian Solution')
        .thinTexture(0x260347)
        .bucketColor(0x260347);
    e.create('planetsandportals:molten_deshmium')
        .displayName('Molten Deshmium')
        .thickTexture(0xffa200)
        .bucketColor(0xffa200);
    e.create('planetsandportals:molten_osmish')
        .displayName('Molten Osmish')
        .thickTexture(0xa4dddd)
        .bucketColor(0xa4dddd);

    // Ad Astra rocket fuels

    e.create('planetsandportals:hydrocarbon_fuel') // Tier 1 Rocket Fuel
        .displayName('Hydrocarbon-based Rocket Fuel')
        .thinTexture(0xff3636)
        .bucketColor(0xff3636);

    e.create('planetsandportals:helium_fuel') // Tier 2 Rocket Fuel
        .displayName('Helium-based Rocket Fuel')
        .thinTexture(0xd6ca42)
        .bucketColor(0xd6ca42);
    
    // Lunar fluid processing and byproducts

    e.create('planetsandportals:xeolum') // Lunar Crude Oil equivalent
        .displayName('Xeolum')
        .thinTexture(0x143752)
        .bucketColor(0x143752);

    e.create('planetsandportals:light_helium') // Rich in Helium-3 (lightest byproduct)
        .displayName('Light Helium')
        .thinTexture(0xffff80)
        .bucketColor(0xffff80);

    e.create('planetsandportals:anorline') // Rich in Aluminium
        .displayName('Anorline')
        .thinTexture(0xffbf47)
        .bucketColor(0xffbf47);
    
    e.create('planetsandportals:orthosilene') // Book 4 / TBD
        .displayName('Orthosilene')
        .thinTexture(0x143752)
        .bucketColor(0x143752);

    e.create('planetsandportals:olivelle') // Book 4 / TBD
        .displayName('Olivelle')
        .thinTexture(0x4cfc9b)
        .bucketColor(0x4cfc9b);

    e.create('planetsandportals:ferrosine') // Book 4 / TBD
        .displayName('Ferrosine')
        .thinTexture(0xaf8bfc)
        .bucketColor(0xaf8bfc);

    e.create('planetsandportals:ilene') // Rich in Titanium
        .displayName('Ilene')
        .thinTexture(0x97bed1)
        .bucketColor(0x97bed1);
})