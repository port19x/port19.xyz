+++
title = "💻 Commit Signatures via SSH"
date = 2024-02-17
description = "The easy way to sign your git commits"
+++

*The easy way to sign your git commits*

In [a talk](https://blog.gitbutler.com/git-tips-and-tricks/) by GitButler I learned about the quick, gpgless way to sign commits on git 2.34+, supported by github and all major code forges, that I'll share with you today.

As a prerequisite I assume you already have your ssh key pair that you use for authenticating with github.
If not, and you somehow still use access tokens to authenticate, check out the [github docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) on the matter.

Locally, run the command `git config --global gpg.format ssh`. \
Then follow it up with `git config --global user.signingkey ~/.ssh/github.pub`. \
You may omit `--global` if you only want to sign commits of a specific repository.
Also keep in mind to replace `~/.ssh/github.pub` with the path to your public key.
Then add your public key to github (again), this time changing the key type to "Signing Key". \

To sign selected commits, run `git commit` with the `-S` option. \
To sign all future git commits, run `git config --global commit.gpgsign true`. \
To sign selected tags, use `git tag` with the lowercase `-s` option. \
To sign all future git tags, run `git config --global tag.gpgsign true`.
