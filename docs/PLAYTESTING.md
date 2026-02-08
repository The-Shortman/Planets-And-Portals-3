# Playtesting

In this article:

- [Updating](https://github.com/The-Shortman/Planets-And-Portals-3/blob/dev/PLAYTESTING.md#updating)
- [Other info](https://github.com/The-Shortman/Planets-And-Portals-3/blob/dev/PLAYTESTING.md#other-info)

## Updating

Updating the modpack is effortless once you set up packwiz to automatically update from GitHub. All you need is a launcher that can run pre-launch commands, such as MultiMC or Prism. I recommend Prism as it's much more versatile.

If you want, you can skip straight to step 6 by downloading the pack from [this channel in the discord server](https://discord.com/channels/1242966094004879380/1271802003114164254) and importing it to Prism. You must be a member of the server and have the Playtester role in order to access it. You can get the Playtester role for free by opting in when you join the server.

The download for Prism Launcher can be found here: https://prismlauncher.org/download/

**If you already have a Prism instance of the modpack, you can skip to step 4.**

1. Follow Prism's installation instructions and link your Minecraft login. Create a new instance:

![Create a new instance](https://i.imgur.com/je4mt6H.png)

2. Choose Minecraft version 1.20.1 and Forge version 47.3.0:

![Choose versions](https://i.imgur.com/PC25bQF.png)

3. Download the `packwiz-installer-bootstrap.jar` file from https://github.com/packwiz/packwiz-installer-bootstrap/releases and drag and drop it into the `.minecraft` folder, **NOT THE MODS FOLDER**

![Access your instance folder](https://i.imgur.com/bFigEgs.png)
![Drop the bootstrap into .minecraft](https://i.imgur.com/rww7LUW.png)

4. Navigate to where you can input your pre-launch commands, for Prism that's `Edit → Settings → Custom commands`, then tick the 'Custom Commands' box.

![Edit](https://i.imgur.com/y3InVQL.png)
![Custom Commands](https://i.imgur.com/41PyNjs.png)

5. Paste this whole string **(including the link and the quotation marks)** into the 'Pre-launch command' field:
   `"$INST_JAVA" -jar packwiz-installer-bootstrap.jar https://the-shortman.github.io/Planets-And-Portals-3/pack.toml`

If you run into this problem:

![Failed file downloads error](https://i.imgur.com/gKOLq0V.png)

6. Click on 'Open missing mods' and download the mods from curseforge

![Download file](https://i.imgur.com/F23UoHy.png)

7. Drag the downloaded file from Curseforge into your instance's `.minecraft/mods` folder.

The pack should now automatically update every time you run the instance

## Other info

This repository is for the most up-to-date development build. Stable/complete releases will be found on Curseforge once the modpack releases to the public.

You **can** share this pack with your friends, just ask them to join the discord server as well, so I can credit them for playtesting, and so they can report issues and give feedback.

As to your credit in the Credits quest chapter, it will be added in the update after you sign up for the playtesting programme :)

There is currently no playtesting server. If you wish to host a dedicated server, feel free to do so. If you have any issues setting one up let me know as I've had my pain in modifying this to make a server pack every time I update it, or I would recommend e4mc (which is included in the pack) to host it from your client for free.
