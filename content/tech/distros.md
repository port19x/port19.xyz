+++
title = "💻 What makes a Linux Distro"
date = 2023-08-27
description = "The ship of theseus has sailed"
+++

*Warning, rambly post*

In philosophy there is the thought experiment of the ship of theseus. \
Basically you have an old ship that gradually got all of it's parts replaced. \
Is it still the same ship? If not, at what point did it cease to be the same? \
With this exposition, let me talk about linux distros.

There exist several differences between the linux distros out there, but what is it that makes them unique?
To the novice linux user, it might be the appearance. \
Most distros that ship with a desktop environment make some adjustments to it and also add some wallpapers and set an icon theme.
This however is quickly replaced by the user and is insufficient to claim difference from upstream. 
In fact, several distros offer different editions with different desktop environments. \
The only distro that treats these as their own independent projects is ubuntu, all others just call them editions, spins or something similar. \
This can't be what separates one distro from the next.

Another obvious area that could prove uniqueness are the low level components of a distro.
Granted, once you replace the linux kernel you cease to be a linux distribution. \
If we're talking about userland tho I'm not so sure. \
You may replace the systemd init system with openrc and in your quest to that end migrate from debian to devuan, from arch to artix.
But by the same token, replacing the gnu coreutils with the rust uutils is rather easy.
Replacing a networking daemon or display manager isn't too hard either. \
There is a fine line here that is a little to arbitrary for my liking, so I'm going to discard this as a candidate.

At this point you may ask yourself what's left. \
If the high level cosmetics don't make a distro and the low level components are largely insufficient as well, are they all just the same?
I will argue that they aren't. \
See, one thing that is not so easily replaced is the repository of packages available to a distribution.
You may change some of your arch mirrors and transform your system to be parabola.
I believe this to be legitimate cause for a change in distro identity. \
This does not inherently conflict with the idea of one distro partially relying on another distros repositories.
Manjaro takes mostly just packages from arch and alters the frequency of updates by holding them back.
It also adds a few pieces of software.
It is a valid, sovereign distribution.
So are all other distributions that at the very least bring a hosted repository of their own to the table. \
And if you manage to spin up a repository of your own, add it to your mirrors and henceforth declare your linux distro your own I won't stand in your way.

All components on our linux machines are replaceable given enough determination and flexibility.
We will however always depend on packages being available to us. \
If we do not rely on a centralized repository, and instead retrieve, compile and install the software for ourselves, we are independent.
That is what linux from scratch is. And what gentoo comes dangerously close to.

Next time you pick a distro to hop to, don't look at screenshots. \
Glance at the low level components and then take a good look into the repositories. \
If they have what you need and you trust the maintainers competence, go for it.

