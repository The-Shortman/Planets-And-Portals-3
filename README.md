# Planets And Portals 3
An in-development modpack for Minecraft Forge 1.20.1
This is the official repository for the Planets and Portals 3 modpack, soon to be available on Curseforge. Reporting issues and making suggestions is to be done in the Issues tab on this repository and in the Discord server's #bug-reports forum channel. It makes it much easier to keep track of everything <3

**Current version: Pre-release v002**

## Playtesters
This repository is for the most up-to-date development build. Stable/complete releases will be found on Curseforge once the modpack releases to the public.

You **can** share this pack with your friends, just ask them to join the discord server as well, so I can credit them for playtesting, and so they can report issues and give feedback.

### Updating
Updating the modpack is effortless once you set up packwiz to automatically update from GitHub. All you need is a launcher that can run pre-launch commands, such as MultiMC or Prism. I recommend Prism as it's much more versatile but is quite technical.

The download for Prism Launcher can be found here: https://prismlauncher.org/download/

**If you already have a Prism instancce of the modpack, you can skip to step 4.**

1) Follow Prism's installation instructions and link your Minecraft login. Create a new instance:

![Create a new instance](https://i.imgur.com/je4mt6H.png)

2) Choose Minecraft version 1.20.1 and Forge version 47.3.0:

![Choose versions](https://i.imgur.com/PC25bQF.png)

3) Run the modpack and close it once you see the main menu, so Prism can download the asset files from Mojang and Forge.

4) Download the `packwiz-installer-bootstrap.jar` file from https://github.com/packwiz/packwiz-installer-bootstrap/releases and drag and drop it into the `.minecraft` folder, **NOT THE MODS FOLDER**

![Access your instance folder](https://i.imgur.com/bFigEgs.png)
![Drop the bootstrap into .minecraft](https://i.imgur.com/rww7LUW.png)

5) Navigate to where you can input your pre-launch commands, for Prism that's `Edit → Settings → Custom commands`, then tick the 'Custom Commands' box.

![Edit](https://i.imgur.com/y3InVQL.png)
![Custom Commands](https://i.imgur.com/41PyNjs.png)

6) Paste this whole string **(including the link and the quotation marks)** into the 'Pre-launch command' field:
`"$INST_JAVA" -jar packwiz-installer-bootstrap.jar https://the-shortman.github.io/Planets-And-Portals-3/pack.toml`

If you run into this problem:

![Failed file downloads error](https://i.imgur.com/gKOLq0V.png)

7) Click on 'Open missing mods' and download the mods from curseforge

![Download file](https://i.imgur.com/F23UoHy.png)

8) Drag the downloaded file from Curseforge into your instance's `.minecraft/mods` folder.

The pack should now automatically update every time you run the instance

### Other info
As to your credit in the Credits quest chapter, it will be added in the update after you sign up for the playtesting programme :)

There is currently no public server (I am actively working on this). If you wish to host a dedicated server, feel free to do so. If you have any issues setting one up let me know as I've had my pain in modifying this to make a server pack every time I update it, or you can use either e4mc or the Essential mod to host it from your client for free:

e4mc:
https://www.curseforge.com/minecraft/mc-mods/e4mc

Essential:
https://essential.gg/en

## Contributing
If you wish to contribute, you can make a fork of this project, do your modifications, and open a pull request for review of the changes you've made. Make sure you make changes to the dev branch, **not the main branch**.

### packwiz
This pack uses packwiz, a modpack development tool. Instructions on how to install packwiz can be found on the website: https://packwiz.infra.link/installation/

Usage of packwiz can be found on the tutorials page: https://packwiz.infra.link/tutorials/creating/getting-started/
