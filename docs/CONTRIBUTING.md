# Contributing

In this article:

- [How do I contribute?](https://github.com/The-Shortman/Planets-And-Portals-3/blob/dev/CONTRIBUTING.md#how-do-i-contribute)
  - [Reporting bugs or suggesting features](https://github.com/The-Shortman/Planets-And-Portals-3/blob/dev/CONTRIBUTING.md#reporting-bugs-or-suggesting-features)
  - [Making pull requests](https://github.com/The-Shortman/Planets-And-Portals-3/blob/dev/CONTRIBUTING.md#making-pull-requests)
    - What won't be considered for a valid pull request
    - Fixing a bug for an upcoming patch
    - Adding content or fixing a bug for an upcoming release
- [How the branches work](https://github.com/The-Shortman/Planets-And-Portals-3/blob/dev/CONTRIBUTING.md#how-the-branches-work)
- [Packwiz and how it makes life easier](https://github.com/The-Shortman/Planets-And-Portals-3/blob/dev/CONTRIBUTING.md#packwiz-and-how-it-makes-life-easier)

## How do I contribute?

There are numerous ways that you can contribute, and you don't need to know how to code to do it!

### Reporting bugs or suggesting features

First off, you can report a bug, or suggest a feature, either through:

- [Our Discord server](https://discord.com/invite/QxQFrYfwkg) by navigating to the [bug reports channel](https://discord.com/channels/1242966094004879380/1246748920722493501) or the [suggestions channel](https://discord.com/channels/1242966094004879380/1248418862052020306).
- The GitHub repository's [Issue Tracker](https://github.com/The-Shortman/Planets-And-Portals-3/issues). This is the preferred method, and you are already here, so it just makes more sense.

When reporting or suggesting, please be as specific as possible and provide as much information as you can as it makes fixing issues/implementing changes MUCH easier :)

### Making pull requests

Please refer to the [Packwiz and how it makes life easier](https://github.com/The-Shortman/Planets-And-Portals-3/blob/dev/CONTRIBUTING.md#packwiz-and-how-it-makes-life-easier) section of the article before making your own contributions.

Some users may wish to take matters into their own hands, and I'm all for it. Feel free to open a pull request to address anything\* that you wish to. It is heavily recommended that you open a **draft** pull request, clearly indicating your intentions after your first commit to avoid duplicate pull requests.

#### What won't be considered for a valid pull request

The asterisk after 'anything' in that last paragraph does of course imply some conditions.

- Whitespace commits, minor code reformatting, or anything similar that does not contribute anything meaningful to developer or user experience will be ignored.
- Of course, no malicious code will be accepted into the repository.
- All content is entirely up to my (\_Shortman's) discretion as to whether it will be included in the pack.

## How the branches work

This project uses the GitFlow branch strategy to allow management of hotfixes, features, and releases.

## Packwiz and how it makes life easier

![GitHub repo size](https://img.shields.io/github/repo-size/the-shortman/planets-and-portals-3?style=for-the-badge)

This pack uses packwiz, a modpack development tool. Instructions on how to install packwiz can be found on their website: https://packwiz.infra.link/installation/

This tool is not included with the pack, you will have to get the binaries yourself from the packwiz GitHub repository. It essentially allows you to quickly update your live instance from your code workspace (assuming you're using a launcher such as [Prism](https://prismlauncher.org/)) simply by relaunching the game. This tool is required to compile this repository as a modpack due to the `.pw.toml` file format that packwiz uses for storing mod data, significantly decreasing the file size of the repository, and allowing insane ease and speed of updating, adding, and removing mods.

A fully detailed guide to the usage of packwiz can be found on their tutorials page: https://packwiz.infra.link/tutorials/creating/getting-started/
