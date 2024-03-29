+++
title = "💻 Performance is a Software Problem"
date = 2023-02-12
description = "How my pinebook pro is faster than your m1 mac"
+++

# How my pinebook pro is faster than your m1 mac

Let me open this post with an anecdote:
About half a year ago, after a lot of hype surrounding the product, I got curious and bought an entry level m1 macbook air.
I unwrapped the immaculate packaging, connected it to the power and booted it up.
After some initial setup, I installed homebrew and got my suite of applications installed.
Since I like tiling window managers, I installed [amethyst](https://github.com/ianyh/Amethyst), tho [yabai](https://github.com/koekeishiya/yabai) is another great option.
I played around for a few hours, trying to replicate my linux environment, to get the mac feeling snappy.
Eventually I gave up, repackaged the mac again, and refunded it the next day, returning to my linux setup on the pinebook pro.

Another anecdote:
About one year ago, as you might know from [my](https://port19.xyz/tech/emacs/) [other](https://port19.xyz/tech/emacs1y/) [writings](https://port19.xyz/tech/neovim-customization/), I switched to emacs.
I put as much of my desktop usage as possible into it and eventually figured that, since I used emacs for everything, I could switch back to some entry level linux distro, like linux mint.
This was on a beefy tower PC: Ryzen 7 3700x CPU, Vega 64 GPU, nvme SSD and 16 gigabytes of RAM.
Despite the PCs power, the environment felt heavy and even sluggish at times.
After a few weeks, I switched back to arch linux.

Now there are a few obvious limitations to my thesis that I want to acknowledge.
No, I can't play 3D games like Rise of the Tombraider on my current laptop, the tuxedo aura 15, much less at 4k.
No, the pinebook pro will not play minecraft as the tuxedo aura will.
Transcoding stuff and compiling software does scale with raw processing power.
And I'm sure even some heavy websites might be slower to load on the pinebook pro.

This however says little about general responsiveness.
Just like you should choose an SSD based on random reads instead of sequential bandwidth,
you should measure your computers speed, it's snappiness if you will, in latency and not in throughput.
It does not matter to me whether ffmpeg takes 5 or 50 seconds to transcode an hour long m4a to mp3,
I do not care if recompiling my emacs packages takes 2 minutes or 20.
Either way I'm afk making a tea, or maybe I'm just switching to my web browser and continuing my work there for a few minutes.
As long as you're not a gamer, or you can appreciate retro games, performance is no reason to buy a new or even recent computer.

So what can you do in software to speed things up?
Disable animations, or at least make them very fast.
If I'm switching windows I don't wanna wait 200 milliseconds for some animation.
Decrease your number of background processes as much as possible.
Cups and bluez do not need to be running all the time.
Start more systemd services on-demand to decrease resource consumption and possibly avoid a couple of rare bugs along the way.
Build your own [desktop environment](https://wiki.archlinux.org/title/Desktop_environment#Custom_environments) by handpicking the applications you run and installing only what you need on top of a minimal base.
This alone should be enough to turn even 15 year old business laptops, like a thinkpad x200, into capable workhorses again.
Two bonus tips: Use wayland if you can, it's always xorg that's "slow", never the window manager.
And keep your computer on for longer, or use hibernate, so that the linux caching systems can do their job.

With all that being said, I hope you'll now think twice before buying new, expensive hardware.
