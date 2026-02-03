# Planets And Portals 3 Changelog

All notable changes to this project will be documented in this file.

If you are a contributor, please update this file with the changes you have made!

> The format of this file is a slight modification of the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) style, but with higher-level categorisation of changes for ease of skim-reading.

> This project's versioning follows a similar system to [Semantic Versioning](https://semver.org/spec/v2.0.0.html), but not to the letter, as this project is not designed to be a dependency. Version numbers, instead of being based on whether or not the public API is backwards-compatible, will instead be determined by whether or not game worlds will be compatible.

> Release dates attached to version numbers are in the format `YYYY/MM/DD` as per the standards of [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html), recommended by [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

> This changelog was introduced for version `v0.9.0`. Versions prior to `v0.9.0` will not be logged here.

## v0.9.0 [UNRELEASED]

This release is being treated as a 'clean slate' so only the most significant reworks will be on this changelog.

Planets and Portals 3 has been completely rewritten from the ground up with a similar modlist as versions `v0.1.0` (Pre-release v001) through `v0.8.0` - this time with a clear progression goal in mind.

Version `v0.9.0` aims to begin the clean slate with a complete framework for the core progression, leading up to before the player embarks for the Moon. Content for Earth and the Nether should be ready to build upon and be fleshed out in patches after `v0.9.0`, this update simply serves for the main backbone of progression.

Future dev releases (`v0.10.0` and onwards) will continue the main progression beyond Earth. The pack will be released to version `v1.0.0` once progression is fleshed out enough that breaking changes should no longer be made on a frequent basis. Please bear in mind that until then, breaking changes may be made at any time.

### ADDITIONS

#### Gameplay-changing

- Overhauled all progression to have a linear questline with multiple core automations
- Added a standard metal processing system that is followed by all metals
- Added a new chapter for gemcutting processes, separate to the metal lines
- Added a new chapter for recommended automations at different stages of the game, which also includes the major progression automation lines as an overall guide
- Added the Mossie @MrRumblz89

#### Quality of life

- Loads of QoL changes were made during playtesting to try and ensure a smooth and satisfying automation and exploration experience

#### Behind-the-scenes

- Introduced the changelog
- Added global fluid constants to startup scripts
- Added .editorconfig and .prettierignore for file formatting
- Added workflows to the repository for automating packaging of server and client pack
- Added a directory for serverpack-specific files that is raised to root during the serverpack build workflow job

### CHANGES

#### Mod updates

- Updated Forge to `47.4.6`
- Updated all mods to their most recent version as of `2025/12/21`

#### Bug patches

- Fixed app icons on Linux and Windows being blurry

#### Behind-the-scenes

- Refactored most of the code to a standard consistent across the codebase - inspired by the Create: Astral refactor of 2.1.4
- Modified LICENSE.md to remove mentions of this project being a mod, instead of what it is - a modpack

### REMOVALS

#### Mod removals

- Removed Tom's Simple Storage Mod `1.7.0` - the early/midgame logistics and storage solution has been replaced by Create `6.0.6` (Post-Processing)
- Removed CC: Tweaked `1.113.1` as it is no longer updated on CurseForge and the version on CF is not compatible with Create `6.0+`
  > Update: Based on patch notes, Create `6.0.8` actually fixes CC incompatibility, I will consider re-adding it at a later time
- Removed Advanced Peripherals `0.7.41r` as it is dependent on CC: Tweaked
- Removed e4mc `5.4.1` because you can get it yourself and some people might not want their LAN worlds proxied halfway across the continent
- Removed Masterful Machinery `0.1.28` as it is now deprecated by the developer, and has been replaced with Multiblocked2

#### Gameplay changing

- Removed Complimetary Shaders from the pack as they aren't fully compatible with the night sky, and you can get them yourself

#### Behind-the-scenes

- Removed the packwiz binary from the repo because you can get it yourself
