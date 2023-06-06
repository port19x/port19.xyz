+++
title = "💻 Faster Emacs Init"
date = 2023-06-06
description = "5 → 2 seconds"
+++

# 5 → 2 seconds

## Profiling and margin of error

For profiling startup speed several options are available, but few of them worked for me.
[esup](https://github.com/jschaf/esup) and [benchmark-init](https://github.com/dholm/benchmark-init-el) didn't yield the desired results, showing me no output to speak of.
`(setq use-package-verbose t)` works for a first glance, but I landed on [profile-dotemacs.el](https://www.emacswiki.org/emacs/profile-dotemacs.el) as my solution of choice. Note that this gives an optimistic time that is lower than `M-x emacs-init-time` for some reason. The following numbers are the ones from `M-x emacs-init-time`.

To get the theoretical minimum startup speed, run `emacs -q --eval='(message "%s" (emacs-init-time))'`, mine was 0.25s.

Margin of error is ~0.1s for most of the numbers that follow, but obviously correlated to the number. The minimum startup speed has a margin of error of only 0.01s.

With that out of the way, my starting point today was 4.9s.

## Garbage Collection

[profile-dotemacs.el](https://www.emacswiki.org/emacs/profile-dotemacs.el) highlights runtime, gc count and gc time for each expression beyond a specified runtime percentage.
This highlighted an easy to fix issue: emacs did dozens of gc's during init.

I added `(setq gc-cons-threshold most-positive-fixnum)` to the very top of my config and then added a hook to enable it again after init, increasing the threshold from the default 760KB to 8MB of memory usage.

This can be done with either of the following depending on if you use use-package:
- `(add-hook 'emacs-startup-hook (lambda () (setq gc-cons-threshold (* 8 1024 1024))))`
- `:hook (emacs-startup . (lambda () (setq gc-cons-threshold (* 8 1024 1024))))`

This brought down my startup time by ~33% to 3.3s

## :defer N

`use-package` provides and option to explicitly defer loading via the `:defer` directive.
Note that when you specify `:mode`, `:hook`, `:bind` or [similar directives](https://github.com/jwiegley/use-package#notes-about-lazy-loading) it implicitly defers loading.

`:defer t` defers loading until the package is needed, perhaps because you open a specific file or use a command. By providing a numeric argument, integer or float, it will load after N seconds of idle time.

I recommend explicitly deffering modes that meet all the following criteria:
- don't involve ui
- aren't evil
- are either mode specific or major modes
- take >0.1s during profiling

Using this method I deferred loading of 11 my 46 installed packages.
This brought down my load time by another ~40% to 2.0s.
