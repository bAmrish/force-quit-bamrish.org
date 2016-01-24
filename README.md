# FORCE QUIT APPLET

This is a cinnamon applet to force quit an application.

## Installation
At present this applet is not avaiable to install online. You can clone this git repo into your `~/.local/share/cinnamon/applets/` folder and add this applet to your cinnamon panel.

## Usaage
You can use this applet when an application is hung. Just click on the applet and then click on the application you want to kill.

## Pre-requisite

This applet uses `xkill` to kill an application if you don't have it installed you can install it using `$ sudo apt-get install xkill`

## Why?

I built this applet as part of learning how to build an applet [cinnamon tutorial](http://developer.linuxmint.com/reference/git/cinnamon-tutorials/write-applet.html). But there were a few problems with the tutorial code

1. The `Util.spawn` function expected a list (of command arguments) rather than a string so this fixes it.
2. The icon for the applet was not appearing in the taskbar. So changed that. 