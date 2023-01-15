+++
title = "💻 Emacs: One year later"
date = 2023-01-15
+++

# A love-hate Relationship

## Brief history

On the 7th of January 2022 I decided to install Doom Emacs. 
I toyed with the basics that night and continued to do so the next day.
After two months, I wrote a first blog post on it. That being the oldest post hosted on this site today [(check it out)](https://port19.xyz/emacs/).
I stayed on Emacs for a while, switched back to Neovim for a few months and then came back again.
I even wrote my first scientific paper in some org-latex hybrid.
Orgmode, not Emacs, has given me great power which comes with great responsibility that I'm getting tired off.

## Reasons to love Emacs

When people talk about Emacs, they often mention some "killer features". Here are mine:

### Magit
Magit is a git client that empowers you greatly.
It's different from any other git client I have seen or used previously.
Magit doesn't dumb things down for you, but rather empowers you and shows you options you might not have known to exist.
Magit makes large rebases about twice as fast and half as daunting. It's the best way to interact with git and will make you better at git, even if you revert to using the command line.

### Orgmode
Orgmode is a major mode and document format that has about as many features as my entire linux setup combined.
Markdown, tables, executable code blocks are all neat.
Rich export options make my life a lot easier.
Basic outlining and outline folding is great and makes plain text documents scalable to dozens of kilobytes.
Todo, scheduling and agenda are kinda meh compared to something like a bullet journal or smartphone productivity setup, but are nice to have, especially for project management.

### Lisp
Lisp support also makes the list. The overwhelming majority of lisp programmers use Emacs.
This is not very surprising, seeing as Emacs is primarily an elisp interpreter that has a long history within the lisp family of languages.
Clojure has been my primary programming language for some time now. Using Doom Emacs made the transition a lot easier than it could have been otherwise.

Other notable things: rapid theme switching, elfeed (rss), erc (irc)

## Reasons to hate Emacs



### It's slow. It just is. 
Compared to Neovim, and especially it's gpu accelerated frontends like Neovide, Emacs feels sluggish.
Doom Emacs ameliorates this, but it's really emacs-nativecomp with ahead of time compilation that makes Emacs tolerable.
But you still feel the slowness on many occasions.

### It's large, very large.
My `~/.config/emacs`, where Doom is installed, is 490 megabytes large.
For reference, this is 90% of my `~/.config` with another 9% being used by signal-desktop, an electron app.
Coupled with native compilation of that whole setup taking a few minutes, this significantly increases my recovery time from backups.

### It's a shaky foundation that is going downhill.
Since emacs is very old, it has enjoyed a massive first movers advantage. 
I'm sure that when it was first released in 1976, it was superior to anything else at the time.
For reference, the same year vi was released.
Since then emacs has certainly improved. Slowly and steadily.
"Killer features" chose emacs as their platform of choice.
But...

## The competition has catched up

It's not 1976 anymore. I'm writing this article in 2023.
Vi got superseded by Vim in 1991.
Vim got then superseded by Neovim in 2015.
A vast package selection exists today for Neovim. Even a few attempting the herculean task that is porting Orgmode

Emacs users have largely given up on the foundations of the editor, staying either because of sunk cost, ideological alignment with lisp or because they are bound by one of the few killer features. People use evilmode because they know that vim keybindings are vastly superior. They use distributions like Doom to make Emacs be Neovim when it was never meant to be.
I'm on emacs today because of Orgmode and this has never been different.

## Where do we go from here

As part of my vacation I have planned to try a move back to Neovim, tho keeping around my emacs install just in case and to write my next paper in.

Conjure on Neovim has great Clojure support and it's UX suits me even better than cider on emacs. I tried it today to great success.

Nvim-orgmode on the other hand isn't very promising, as it's reducing Orgmode to some markdown plus Todo and scheduling.
So for Orgmode I'll just have to slowly wean myself off of it.

Magit is neat, but very optional for me. I don't rebase every day, I can deal with a time penalty for doing things with aliases on the command line.

*I may get that lean and fast environment once more. \
I only have to sacrifice this little bit of power. \
I shall make it, but it will take a while.* \

