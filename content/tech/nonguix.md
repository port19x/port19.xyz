+++
title = "💻 (Non)Guix - The Uninstallable"
date = 2024-02-21
description = "channelling my lambda grindset"
+++

*channelling my lambda grindset*

## Motivation

So I've been writing lisp or 1-2 years now depending on how we count, mostly Clojure[¹](https://github.com/port19x/clojure-era) and Emacs Lisp.[²](https://github.com/port19x/haproxy-mode)
Recently I started looking into guile scheme as the next fun lisp to sink time into.
At the same time, friends in the [ani-cli](https://github.com/pystardust/ani-cli) discord are moving to nixos in droves.
Wanting some of that functional package management goodness for myself, but with a lispy touch, I tried installing Guix on arch.
That actually somewhat works if you use the manual installation method, but integration is meh.
So, having another arch install on my laptop as a fallback, I set out on a little adventure.

Despite my experience this took me 4 hours to install, so I hope this post and the sources I link to can help someone.

## Retrieving the ISO

Guix is a FSF approved linux-libre distro, so it won't work if you have a modern wifi card.
However don't get a false sense of security from a wired connection. \
[AMD GPUs need proprietary firmware.](http://wingolog.org/archives/2024/02/16/guix-on-the-framework-13-amd)

There is a [installer image](https://github.com/SystemCrafters/guix-installer) for current nonguix by systemcrafters, but [its CI has stalled](https://github.com/SystemCrafters/guix-installer/issues/27), so use the "official" [nonguix image](https://gitlab.com/nonguix/nonguix/-/releases) for now.

Be a good boy and verify the cryptographic signature.

## Amending the config

After running through the guided installer, edit the `/mnt/etc/config.scm` to include the snippets by [nonguix](https://gitlab.com/nonguix/nonguix).

Check back in the linked nonguix readme if something happens to change.

### `use-module`

replace

``` lisp
(use-module (gnu))
```

with

``` lisp
(use-module (gnu)
            (nongnu packages linux)
            (nongnu system initrd))
```

### `operating-system`

and add the following 3 lines in the `operating-system` block

```
(operating-system
  (kernel linux)
  (initrd microcode-initrd)
  (firmware (list linux-firmware))
  ...
  )
```

Then, change to tty3 or tty4 to make some more changes.

## Add the nonguix channel

```
cp /mnt/etc/config.scm .
mkdir -p ~/.config/guix
```

Put the following block into the `~/.config/guix/channels.scm`

```
(cons* (channel
        (name 'nonguix)
        (url "https://gitlab.com/nonguix/nonguix")
        ;; Enable signature verification:
        (introduction
         (make-channel-introduction
          "897c1a470da759236cc11798f4e0a5f7d4d59fbc"
          (openpgp-fingerprint
           "2A39 3FFF 68F4 EF7A 3D29  12AF 6F51 20A0 22FB B2D5"))))
       %default-channels)
```

## Syncing all the stuff

Then we gotta jump through some hoops to sync things.

```
guix pull
hash guix
```

Especially that `hash guix` can trip you up, [it is necessary](https://wiki.systemcrafters.net/guix/nonguix-installation-guide/#channels).

## Installation

You could run the install like this: `guix system init /mnt/etc/config.scm /mnt`,
but I recommend adding the [substitutes](https://dthompson.us/posts/installing-guix-on-a-10th-gen-thinkpad-x1.html) while they are non-standard[³](https://gitlab.com/nonguix/nonguix/-/issues/315).
So you end up with `guix system init /mnt/etc/config.scm --substitute-urls='https://ci.guix.gnu.org https://bordeaux.guix.gnu.org https://substitutes.nonguix.org' /mnt`

Don't get your hopes up that the nonguix substitutes are actually all available.
For me, linux-firmware was available but the kernel compiled from scratch.

I had an issue that during the install of my selected packages, the root partition of the installer filled up, erroring with something along the lines of "no space left on device".
Even with an extremely minimal subset I barely got it installed, leaving with 89% (5.2 / 5.8GB) usage on the installer root partition.

*I suspect this to be a bug and will follow this up with the appropriate parties*

## Finished

Now you can reboot.

Pray that you have good wifi utils.
I'm still struggling to configure it with `ip` and `iw` alone.
I'm more used to `iwctl`/`iwd`.
Biggest issue will be WPA2 auth, that's not as standard in some of these tools as you may think.

Sorry if this was a little handwavy, I barely got it installed myself.
I plan to write on Guix again once I'm a little more acclimated and have a config ready.
Once such a config is ready, any future install will be significantly easier anyway.
