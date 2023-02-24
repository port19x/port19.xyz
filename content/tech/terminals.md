+++
title = "💻 Reviewing all Terminal Emulators"
date = 2023-02-06
description = "Not all Terminals are created equally"
+++

# Not all Terminals are created equally

## Consider the native one first

If you're using a full desktop environment like gnome or kde, using the builtin terminal might be a good starting point.
That way you get consistent themeing out of the box and benefit from a consistent user experience.
These terminals are pretty basic, but they get the job done.
If you use the terminal often or even "live in the terminal", consider a more sophisticated product.

## Special purpose terminals

If you, for whatever reason, like suckless software and believe that patching source code is an acceptable way of configuring software, use st.
The suckless terminal st, will take the least disk space and lacks basic functionality out of the box, making it very attractive to the average suckless enthusiast.

If you use wayland and want "speed" above all else, you can't beat foot. The foo terminal.
Foot has the lowest latency of any terminal I've tested.

If neither of those two are appealing to you, but you own an nvidia or arm gpu, consider some old terminal.
Test the gpu accelerated options and compare speeds with those old terminals.
Depending on how bad the drivers are, urxvt might be a better choice than the following options.

## Intermezzo: How to benchmark terminals

This is often subject to controversial debates. Below I'll give you some benchmarks I use. \
How fast the terminal feels is more important than these metrics anyway. \
Also consider `hyperfine` for multi-run benchmarks. \

Graphical throughput: `time ( tree / )`

Redirection: `time ( find / -type f -iname "*.md" 2> /dev/null; )`

Latency: `time ( ls )`

Images: `time ( wezterm imgcat sample.jpg)` or equivalent

## GPU accelerated terminals

GPU accelerated terminals have been hyped up for a while now.
Alacritty has been hyped because of the rust hype but with it's two competitors I can't in good conscience recommend it.
The speed debate between alacritty and kitty is childish at best.
Pay as little attention to it as you can.

Kitty is a neat terminal with an image viewer and some other small utilities like a diff viewer.
Kitty is pretty fast and has the highest graphical bandwidth/throughput I've tested.
The kitty dev however is pretty delusional and rude, so don't choose this one if you're the kind of person that tries to contribute upstream.

My favorite terminal then is wezterm.
Wezterm is incredibly feature rich, supporting 3 image protocols, asciinema recording and shipping with hundreds of themes.
It's configured in lua, giving it some hypothetical programmability.
Wezterm imgcat is about 10x faster than kitty icat, so if you regularly use the terminal as an image viewer, I recommend you use wezterm.
Wezterm, once you disable the tab bar, isn't noticeably slower than kitty or alacritty in my testing.

## Simplified decision tree

1. Do you use a desktop environment? → Use the native terminal
2. Do you enjoy suckless software? → Use st
3. Do you use wayland? → Use foot
4. Do you have bad gpu drivers? → Use urxvt
5. Do you like a featureful experience? → Use wezterm
6. Do you want gpu acceleration but can't afford 100MB of disk space? → Flip a coin
7. Heads → Use kitty
8. Tails → Use alacritty
