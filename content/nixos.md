+++
title = "💻 NixOS ain't worth it"
date = 2022-07-09
+++

# Why I don't use nix os

Nix OS is a reproducible linux distribution where system state is declaratively stored in a version controllable configuration.nix file.

Even today it already has significantly more packages than arch + aur and due to the boot setup you can always roll back your system, making it practically unbreakable.

But nix os is very different. 

If you google an issue, the solutions you find will likely not apply.

Worse, the knowledge and skill you gain will not cary over to more traditional distros like debian or arch.

Nix os vs arch is more like openbsd vs arch rather than debian vs arch.

Sure, the kernel is still linux, but the whole system will feel unfamiliar.

Ask yourself, is reproducibility via configuration.nix worth it?

Or would you rather maintain your dotfiles and a package list?

Do you always need more or is arch + aur enough software?

Are rollbacks important to you and do you also have beef with the timeshift maintainer?

If you're unsure, stay away from nix os.

[doom emacs maintainer agrees](https://github.com/hlissner/dotfiles)
