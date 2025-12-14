# Planets and Portals 3 Changelog

All notable changes to this project will be documented in this file.

If you are a contributor, please update this file with the changes you have made!

The format is a slight modification of the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) style, and this project's versioning follows a similar system to [Semantic Versioning](https://semver.org/spec/v2.0.0.html), but not to the letter.

Release dates attached to version numbers are in the format `YYYY/MM/DD` as per the standards of [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html), recommended by [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

This changelog was introduced for version `v0.9-alpha`. Versions prior to `v0.9-alpha` will not be logged here.

## v0.9-alpha [UNRELEASED]

### ADDITIONS

#### Mod additions

- Added GuideME `20.1.11`
- Added Lithostitched `1.4.11`

#### Gameplay-changing

> _Nothing to see here yet..._

#### Quality of life

> _Nothing to see here yet..._

#### Behind-the-scenes

- Introduced the changelog
- Added global fluid constants to startup scripts
- Added .editorconfig and .prettierignore for file formatting
- Added workflows to the repository for automating packaging of server and client pack
- Added a directory for serverpack-specific files that is raised to root during the serverpack build workflow job

### CHANGES

#### Major mod updates

- Updated Forge `47.3.7 -> 47.4.6`
- Updated Amendments `1.2.18 -> 2.0.3`
- Updated Applied Energistics 2 `15.3.3 -> 15.4.7`
- Updated Collective `7.94 -> 8.3`
- Updated Create: Copycats+ `2.2.0 -> 3.0.2`
- Updated Create: The Factory Must Grow `0.9.3 -> 1.0.2c`
- Updated Create Ore Excavation `1.5.3 -> 1.6.4`
- Updated Create Railways Navigator `0.7.2 -> 0.8.4-C6`
- Updated Create `0.5.1j -> 6.0.6`
- Updated Curios `5.12.1 -> 5.14.1`
- Updated e4mc `5.3.0 -> 5.4.1`
- Updated FancyMenu `3.4.6 -> 3.6.4`
- Updated Fzzy Config `0.6.7 -> 0.7.2`
- Updated Immersive Aircraft `1.2.2 -> 1.3.3`
- Updated Immersive Melodies `0.4.0 -> 0.6.0`
- Updated Jade Addons `5.3.1 -> 5.5.0`
- Updated KubeJS Create `2001.2.5-build.2 -> 2001.3.0-build.8`
- Updated LootJS `2.12.0 -> 2.13.0`
- Updated Modernfix `5.20.2 -> 5.24.4`
- Updated mutil `6.1.1 -> 6.2.0`
- Updated Ponder for KubeJS `1.4.0 -> 2.0.6`
- Updated Moonlight Lib `2.13.79 -> 2.15.6`
- Updated Storage Drawers `12.9.13 -> 12.11.3`
- Updated Tectonic `2.4.1 -> 3.0.6`

#### Gameplay-changing

> _Nothing to see here yet..._

#### Quality of life

> _Nothing to see here yet..._

#### Bug patches

- Fixed an error Mekanism throws in chat regarding a missing Venus Sandstone tag
- Disabled EMI cheat mode being on by default

#### Minor mod updates

- Updated Ad Astra `1.15.19 -> 1.15.20`
- Updated Amplified Nether `1.2.5 -> 1.2.11`
- Updated Balm `7.3.25 -> 7.3.34`
- Updated Building Gadgets `1.0.7 -> 1.0.8`
- Updated Chat Heads `0.13.13 -> 0.13.18`
- Updated Corpse `1.0.20 -> 1.0.21`
- Updated Create: New Age `1.1.2 -> 1.1.4`
- Updated Create: Steam 'n' Rails `1.6.7 -> 1.6.11-alpha`
- Updated Drippy Loading Screen `3.0.11 -> 3.0.12`
- Updated Dynamic FPS `3.9.2 -> 3.9.5`
- Updated EMI Loot `0.7.5+fix1 -> 0.7.6`
- Updated EMI `1.1.20 -> 1.1.22`
- Updated Exposure `1.7.10 -> 1.7.16`
- Updated Extreme sound muffler `3.49 -> 3.49.1`
- Updated FTB Chunks `2001.3.5 -> 2001.3.6`
- Updated FTB Library `2001.2.9 -> 2001.2.10`
- Updated FTB Quests `2001.4.12 -> 2001.4.14`
- Updated FTB XMod Compat `2.1.2 -> 2.1.3`
- Updated Just Enough Items `15.20.0.106 -> 15.20.0.112`
- Updated JourneyMap Teams `1.1.0 -> 1.1.3`
- Updated Mekanism Generators `10.4.15.75 -> 10.4.16.80`
- Updated Mekanism `10.4.15.75 -> 10.4.16.80`
- Updated MmmMmmMmmMmm `2.0.6 -> 2.0.8`
- Updated MoreJS `0.10.0 -> 0.10.1`
- Updated Not Enough Crashes `4.4.7 -> 4.4.9`
- Updated Create: Numismatics `1.0.11 -> 1.0.15`
- Updated Ping Wheel `1.10.1 -> 1.10.3`
- Updated Polymorph `0.49.8 -> 0.49.10`
- Updated Puzzles Lib `8.1.29 -> 8.1.32`
- Updated Quark `4.0-461 -> 4.0-462`
- Updated Snow Under Trees `1.4.9 -> 1.4.12`
- Updated Sophisticated Backpacks `3.23.6.1211 -> 3.23.23.1289`
- Updated Sophisticated Core `1.2.23.902 -> 1.2.79.1066`
- Updated Stellar View `0.4.5 -> 0.4.6`
- Updated Supplementaries `3.1.18 -> 3.1.36`
- Updated Visual Workbench `8.0.0 -> 8.0.1`
- Updated Zeta `1.0-28 -> 1.0-30`

#### Behind-the-scenes

- Refactored most of the code to a standard
- Modified LICENSE.md to remove mentions of this project being a mod, not a modpack

### REMOVALS

#### Mod removals

- Removed Tom's Simple Storage Mod `1.7.0` - the early/midgame logistics and storage solution has been replaced by Create `6.0.6` (Post-Processing)
- Removed Masterful Machinery `0.1.15` as it is incompatible with Create `6.0+`, and has been replaced with Multiblocked2 `1.0.35`
- Removed CC: Tweaked `1.113.1` as it is no longer updated on CurseForge and the version on CF is not compatible with Create `6.0+`
- Removed Advanced Peripherals `0.7.41r` as it is dependent on CC: Tweaked
- Removed Not Enough Recipe Book `0.4.1` as KubeJS can fulfil its function

#### Gameplay changing

> _Nothing to see here yet..._

#### Behind-the-scenes

- Removed the packwiz binary from the repo because you can get it yourself
