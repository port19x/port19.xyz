+++
title = "💻 Neovim customization is inexcusably bad"
date = 2023-01-27
description = "And I though Emacs was complicated"
+++

# And I though Emacs was complicated

In my previous post I looked back on one year of Emacs and it's occasional sluggishness, announcing I would try to move to Neovim once more.
Today I want to give an update on how said attempted migration is coming along: it's pretty bad.
I would have preferred customizing my Neovim in lua, but gave up after about two hours of every single plugin being documented for setup in an init.vim file instead.
Don't even get me started with the possibility of using fennel (a lisp that compiles to lua) to configure it.
That would turn following documentation into a two step translation process.

After a bit of frustration, I threw my legacy Neovim config to the side and just started a new one from scratch.
After discovering and following an old blog post by the Conjure developer I was able to get a good Clojure environment going quite quickly.
So here I am after two days of hacking away at my config. With an awesome Clojure environment but nothing else.
There is no illusion left in me that Neovim is extensible in the way Emacs is.
There just is no substitute for `describe-variable` and `describe-function`, which I underappreciated before but drastically help with configuring.
Lisplessness is more of an ideological issue I guess, but I do feel the trade-off of not configuring Neovim in my programming language of choice.

Let me approach configuration and extensibility from another angle: What is Neovim?
At it's core, Neovim is a set of keybindings. Any plugin system or configuration is a clear afterthought.
You wouldn't use Nano as a text editor if it came with plugins either.
Emacs on the other hand is designed from the ground up to be extensible.
This shows not only in the self-documenting nature of `describe-*`, it shows in the way it treats windows and frames.
It shows in the way it handles buffers, minor- and major modes.

To give a concrete example of where true extensibility is useful: In Emacs I use a org-mode hook to start a 25 minute timer whenever I clock-in on some outline.
This is not just unrealistic in Neovim, this statement is likely incomprehensible to anyone who has not looked into Emacs or org-mode.
The fact that I can just set up a hook for something and execute arbitrary code from there is powerful and it's only scratching the surface.
Emacs might have a steeper learning curve than Neovim, but in return you get a far higher skill ceiling.

A few days ago I mentioned in an online exchange that if Neovim is a text editor then Emacs must be an office suite.
This analogy feels more and more suitable as I try to make Neovim do even basic things.
Calling Emacs an operating system is going a bit far, as it lowkey sucks at handling media or browsing the web, but it sure does a whole lot of the things Microsoft sells as components in an office suite.
Emacs is a coherent environment empowering you to use it's vast toolset. Meanwhile Neovim is nothing but one tool.

Perhaps my whole frustration with the occasional sluggishness of Emacs was foolish.
There may very well be aspects in it's architecture that slow it down, but more significantly it just does a whole lot more than Neovim.
Let me reiterate my prior point: Neovim is primarily a set of keybindings. To make something so simple be slow would be an embarrassment.
I want and need a whole lot more than just some keybindings to do what I do effectively.

Suffice to say I'm going back to Emacs.
