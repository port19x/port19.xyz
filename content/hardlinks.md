+++
title = "💻 Hardlinks are underrated"
date = 2023-01-10
+++

# Hardlinks > Symlinks + Stow (for dotfiles)

Let's just get a quick overview over our options to duplicate files from A to B

|                     | Copy     | Hardlink | Symlink     |
|---------------------|----------|----------|-------------|
| Command             | `cp a b` | `ln a b` | `ln -s a b` |
| Storage requirement | 2a       | a        | a           |
| b "survives" rm a   | y        | y        | n           |

Copying is pretty straight forward, no surprises here. \
Symlinks are the go-to solution if you want to reference a file from somewhere else. \
It's what makes my config files appear to be in `~/.config` when they're actually in `~/dotfiles`. \
This happens via the usage of `stow`, an age old program for these sorts of things.

I'll probably replace my `stow` usage with self scripted hardlinks.\
The reason for this is twofold.\
I don't want to clean up broken symlinks when I switch programs / decide a config file doesn't deserve a spot in the git repo.\
Second, I may actually want to have residual configuration. Let me elaborate.

Let's say I configure neofetch and put that into my git repo only to, after a few commits, realise that such a minor program with it's unimportant config file doesn't deserve a spot in my dotfiles repo.\
In that case I'd get rid of it in my dotfiles folder, leaving the broken symlink.\
Equally bad, the config is now lost. Or at least obscured in the git history.\
I'd much prefer to have it still lying around, taking up the kilobyte that it is taking up in my git history anyway.

Kinda sad that stow doesn't come with a hardlink option :/
