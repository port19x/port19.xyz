+++
title = "💻 Shell Scripting Advice"
date = 2024-01-14
description = "Shoutout to my fellow ani-cli devs"
+++

Shell is an untyped, interpreted programming language ubiquitous since the 80s.
It comes with no package manager of its own and is weak in isolation.
It hinges on the operating system to do what the language can't: almost everything.
When I'm talking about shell scripting I'm assuming a gnu (or busybox) environment to go along with it.

My authority on the matter comes primarily from two years leading ani-cli development.
[Ani-cli](https://github.com/pystardust/ani-cli) is an incredibly cross-plattform and featureful cli tool to browse and play anime.

## When Not To Use Shell

If your application needs to do math, use python instead.
Sure you can do some basic math in shell scripts, but when you can anticipate in advance that a lot of your program data will consist of numbers, pick sth else.
My heuristic: if it needs to do more than count, do it in python.

Shell Scripts are manageable up to around a thousand LoC.
Shell has significantly more footguns than Python.
Use Python if you need to frequently collaborate with noobs.

## Dev Tools

[Shellcheck](https://github.com/koalaman/shellcheck) is a linter for shell that catches many common pitfalls. \
[Shfmt](https://github.com/patrickvane/shfmt) is a formatter for shell.
I like to use it with the `-i 4 -ci` options. \
I don't use LSP, but a shell language server is available via [bash lsp](https://github.com/bash-lsp/bash-language-server). \
For CI I like to use the [sh-checker](https://github.com/luizm/action-sh-checker) by luizm. It combines shellcheck and shfmt.

## Debugging & Profiling

Just run your script with `sh -x` to get pretty verbose runtime output. \
Ideally, cook up increments of your program in an interactive shell of your choice, this speeds up the feedback loop.
For benchmarking, use `time` or [hyperfine](https://github.com/sharkdp/hyperfine). \
For pinpointing bottlenecks it can be useful to put `date +%S:%N` statements near I/O areas or borders of code segments, this prints seconds and nanoseconds. \
For advanced debugging and profiling, [strace](https://strace.io/) can be useful.

## Useful External Programs

- [`curl`](https://curl.se/) > [`wget`](https://www.gnu.org/software/wget/) - sending network requests
- [`ffmpeg`](https://ffmpeg.org/) - audio & video processing
- [`fzf`](https://github.com/junegunn/fzf) - fuzzy match inputs (useful for terminal UIs)
- [`html-xml-utils`](https://www.w3.org/Tools/HTML-XML-utils/README) - html parsing
- [`imagemagick`](https://imagemagick.org/) - image processing
- [`jq`](https://jqlang.github.io/jq/) - json parsing
- [`netcat`](https://blog.ikuamike.io/posts/2021/netcat/) - receiving network requests
- [`openssl`](https://www.openssl.org/) - everything cryptography
- [`parallel`](https://www.gnu.org/software/parallel/) - ... parallel processing
- [`poppler`](https://poppler.freedesktop.org/) & [`ghostscript`](https://www.ghostscript.com/) - pdf processing
- [`socat`](https://copyconstruct.medium.com/socat-29453e9fc8a6) - socket relay
- [`zstd`](https://github.com/facebook/zstd) - nice compression at `-19`

## Further Reading

Read through the lists of all the available programs in the [GNU Coreutils](https://wiki.gentoo.org/wiki/GNU_Coreutils) and [util-linux](https://wiki.gentoo.org/wiki/Util-linux). \
If you want to deploy via docker, [busybox](https://busybox.net/downloads/BusyBox.html) too. \
Read the manuals for [find](https://www.gnu.org/software/findutils/manual/html_mono/find.html), [grep](https://www.gnu.org/software/grep/manual/grep.html) and [sed](https://www.gnu.org/software/sed/manual/sed.html) in depth. \
I won't stop you from checking out [awk](https://www.gnu.org/software/gawk/manual/gawk.html) for sake of completeness, but haven't found it very fruitful myself.

After picking up the tools of this article and reading the recommended manuals, you will soon write better shell scripts than 90% of shell programmers out there, you're welcome.
