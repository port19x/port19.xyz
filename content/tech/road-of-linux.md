+++
title = "💻 Road of linux"
date = 2023-05-28
description = "In Linux, we all travel a similar road"
+++

# In Linux, we all travel a similar road

## Layer 1: distrohopping

At first, sometime late 2019, there was a blue screen of death and some instability with windows on my first self-built pc.
As I started getting into [CTFs](https://youtu.be/8ev9ZX9J45A) at the time, I took the opportunity and installed [parrot](https://www.parrotsec.org/) as my first linux distro.
In the following year, like many of you I hopped distros a lot.
The details of what distros I used when are both lost to time and irrelevant, tho I can say that it was important.

Getting to know many slightly different ways of using a computer as well as numerous different linux programs helps laying a foundation.
You discover properties in software that you like and dislike, but don't consciously reason about them yet.

## Layer 2: window managers

After a while I hopped to arch linux, learning a lot in my first time configuring it.
I tried out the openbox window manager, a fantastic floating wm, but soon dismissed it in favor of qtile.
It was at this point that I started thoroughly tinkering with my application stack.
I tried out different terminal emulators, file managers and web browsers, as well as discovering many applications of lower importance, such as ncdu for disk usage analysis on the terminal, or calcurse for a basic scheduling and todo application.
I finally [learned vim](https://youtu.be/ST7vnfKjfvY)!
This was also the point where I began storing the important parts of my configuration in a git repository.

At this stage you're no longer changing your base operating system, or at least aren't actively seeking to do so.
You start reading documentation. You actively pick some software and configure it via configuration files.
You learn vim.
You set up your dotfiles repo.
You browse the web for inspiration and get inspired by posts on [r/unixporn](https://libreddit.de/r/unixporn/top?t=month).

## Layer 3: refinement

Late 2021, my customizations slowed down a bit and I no longer swapped out different terminal programs on a near daily basis.
In this time my most notable change was from qtile to [awesome](https://github.com/awesomeWM/awesome) as my window manager, as I grew frustrated with qtile's maintainers.
I still tried out new stuff from time to time, I lived a few months in wayland with sway for example, but some components began to stabilize.
Throughout 2022 I also started to work on improving my bootstrapping:
While many prefer to write an installation script, I chose to put that into an arch pkgbuild so my package list could be managed alongside my dotfiles.
I also started using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) for my dotfiles repo.

This stage is marked by slow, incremental changes to your software, rather than big leaps from one offering to the next.
You might still change out some components from time to time, but a grand picture has formed and you now have a coherent environment.
You start working on reproducibility, you write an installation script or similar.
You definitely manage your config files in git.
You're also very comfortable in the shell by now.

## Layer 4: the editor

In terms of a timeline this overlaps with the previous point: On January the 7th 2022 I installed [doom emacs](https://github.com/doomemacs/doomemacs) on my computer and started digging in.
This felt almost like another introduction to linux in the sense that I went through similar layers again, getting accustomed to a foreign environment.
It took me over a year until I moved from doom, which feels like the linux mint of emacs, to vanilla emacs.
And that is where I am today in my linux journey: I'm mostly tinkering with emacs now and am figuring out ways to be more productive or more comfortable in my editor, often both.

Whether you choose vim or emacs, at this stage your editor becomes the focus of your customization efforts.
You add plugins (vim) or packages (emacs) and slowly get more accustomed to doing more and more in your editor.
Adjustments to your other configurations become smaller with 1 line changes now being the norm.
Testing new software becomes the exception.

I'll link 2 particularly insightful videos on the topic of vim vs emacs here:
- [luke smith - why I don't use emacs](https://youtu.be/1mr3issv79s)
- [protesilaos stavrou - emacs mindset and unix philosophy](https://youtu.be/qTncc2lI6OI)

## Layer 5(?): regression

This is purely speculative, but an observation I've made at work as a sysadmin in training:
People that were on linux for years abandon their tailored environments to move back to the mainstream.
On several occasions I have seen co-workers trade in their linux laptop for a macbook.
I have met impressively knowledgeable co-workers with decades of admin experience using linux mint.
I assume this layer is not inevitable, but I wanted to mention it, since I found it odd when I first observed it.

## The similar road we travel

Most of us start on some ubuntu based distro clicking through gtk menus and pointing at our text with the mouse in some floating window.
We hop around and eventually find our place in some distro base. For many that is arch linux, but others gravitate to gentoo, debian or nixos instead.
We may start playing around with window managers, crafting desktop environments of our own.
We live in the terminal, using dozens of small little gemstones that we got for free by the open source ecosystem.

And then, eventually, we focus on the primary task of the computer: text editing.
