+++
title = "🌸Retro Games🌸"
date = 2024-04-17
updated = 2024-05-03
description = "Port19s selfhosted retrogame list"
+++

*Also check my profile on [retroachievements](https://retroachievements.org/user/pork3)*

*focusing on snes right now*

## Playing

<img src="/retrocovers/super-mario-all-stars.jpg" title="1 completed, playing 3 now">

## Completed

<img src="/retrocovers/drill-dozer.jpg">
<img src="/retrocovers/pokemon-leafgreen.jpg">
<img src="/retrocovers/final-fantasy-1-2.jpg" title="only 1, 2 sucks">
<br>
<img src="/retrocovers/super-mario-64.jpg">
<img src="/retrocovers/super-mario-rpg.jpg">
<img src="/retrocovers/super-mario-kart.jpg" title="fuck that special cup! everything else gold!">
<!-- NES sucks, but I played bubble bobble, tetris and kirbys adventure on it. Covers suck too, so I'm not including them-->

## Planning

<img src="/retrocovers/donkey-kong-country.jpg">
<img src="/retrocovers/donkey-kong-country-2.jpg">
<img src="/retrocovers/donkey-kong-country-3.jpg">
<br>
<img src="/retrocovers/chrono-trigger.jpg">
<img src="/retrocovers/earthbound.jpg">
<img src="/retrocovers/super-metroid.jpg">
<br>
<img src="/retrocovers/lufia-2.jpg">
<img src="/retrocovers/terranigma.jpg">
<img src="/retrocovers/secret-of-mana.jpg">

## Sourcing

Pick games for one of the top100 lists on gamefaqs:
[SNES](https://gamefaqs.gamespot.com/boards/916396-super-nintendo/76022917),
[GBA](https://gamefaqs.gamespot.com/boards/916598-game-boy-advance/66659387),
[N64](https://gamefaqs.gamespot.com/boards/916387-nintendo-64/78772770),
[PS2](https://gamefaqs.gamespot.com/boards/915821-playstation-2/79518850) \
I tend to stick to the top 20, with some franchise / genre specific exceptions. \
[Metacritic](https://www.metacritic.com/) is a decent fallback for finding good games.

- Use archive.org nointro roms¹: [SNES](https://archive.org/download/nointro.snes), [GBA](https://archive.org/download/nointro.gba), [N64](https://archive.org/download/nointro.n64)
- [Vimm's Lair](https://vimm.net/) for more recent stuff like PS2 and Gamecube
- I used [emulatorgames](https://www.emulatorgames.net/) before I learned about nointro rom sets

Gamefaqs is also by far the best to find walkthroughs if you get stuck.

## Emulation

I use [Lakka](https://www.lakka.tv/) on my raspberry pi 4 with the following emulators:

- GBA: [mgba](https://mgba.io/)
- SNES: [snes9x](https://www.snes9x.com/)
- N64: [mupen64plus-next](https://docs.libretro.com/library/mupen64plus/)

For (at least most) N64 games to run smoothly, I had to OC the gpu heavily and the cpu mildly:
```
arm_boost=1
over_voltage=6
v3d_freq=800
core_freq=850
```
TLOZ-OOT continues to run like shit, if you know how to make it run smoothly, please email me.

[PCSX2](https://pcsx2.net/) runs like a charm on [my pc](https://port19.xyz/tech/new-pc/)

<br>

*¹that way they will be detected by retroarch, giving you the thumbnail*
