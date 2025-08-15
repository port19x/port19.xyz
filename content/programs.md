+++
title = "💻Programs I use💻"
date = 2024-03-16
updated = 2025-08-15
description = "and recommend"
+++

## Base

### [Arch Linux](https://archlinux.org/)

Arch Linux has been my linux distribution of choice since early 2021.
It has been a reliable and trusty companion over the years, being less fragile than several of the allegedly stable distros I've used prior, such as debian.
I tightly integrate my [dotfiles](https://github.com/port19x/dotfiles) with arch, having a [PKGBUILD](https://github.com/port19x/dotfiles/blob/master/PKGBUILD) to automate my dotfiles bootstrapping.
I believe this approach to be superior to a post-install script, since it allows me to more explicitly track the packages I use and keep the list of explicitly installed packages low.

My recovery time from a backup, including a full reinstall, is less than one hour.

My current shell is bash, but I've also used zsh in the past. \
My window manager is [exwm](https://github.com/emacs-exwm/exwm), the emacs x window manager.

### [Iosevka](https://typeof.net/Iosevka/)

My primary system font since late 2022 is Iosevka, but I've also used [Mononoki](https://madmalik.github.io/mononoki/) in the past. \
My unicode fonts are googles [Noto](https://fonts.google.com/noto) and [Noto Emoji](https://fonts.google.com/noto/specimen/Noto+Emoji).

### [Brave](https://brave.com/)

I'm currently using brave as my primary web browser. I like it due to it's builtin adblock and speed. I've also extensively used both [Librewolf](https://librewolf.net/) and [Qutebrowser](https://qutebrowser.org/) in the past and can recommend them for enhanced privacy protection and keyboard driven operation respectively.

### [Emacs](https://www.gnu.org/savannah-checkouts/gnu/emacs/emacs.html)

I do the majority of my computing inside of emacs, yet I do not believe everyone should switch to it.
It takes a rather specific set of biases and affinities to both persevere through the initial learning curve as well as reap worthwhile benefits.
You need to watch only two videos on emacs to make a well informed decision on whether you want to pursue it further or not:
- [luke smith - why I don't use emacs](https://youtu.be/1mr3issv79s)
- [protesilaos stavrou - emacs mindset and unix philosophy](https://youtu.be/qTncc2lI6OI)

I use emacs with native compilation, more specifics follow at the bottom of this page.

## Multimedia

### [MPV](https://mpv.io/)

My media player of choice is mpv, it's great for both audio and video and the dominant choice among linux users.
To mac users I can recommend [IINA](https://iina.io/).

### [FFMPEG](https://ffmpeg.org/)

I use ffmpeg to record audio and video, to do basic audio post-processing and to convert between the various encoders and container formats.
If you're on linux it's likely already installed as a dependency to something else.

### [Imagemagick](https://imagemagick.org/)

I use imagemagick to do all my basic image conversion and editing. \
This includes cropping, scaling, captions, appending, rotation. \
For anything more advanced, which I only need to do every few months, I use [gimp](https://www.gimp.org/).

### [Flameshot](https://flameshot.org/)

Flameshot is a great screen shotting program, with good support for editing the screenshot before saving.
Think red circles and arrows, numbered steps or perhaps colored blocks to redact information.
It's great.

### [Poppler](https://poppler.freedesktop.org/)

To view pdfs I use [`pdf-tools`](https://pdftools.wiki/) in emacs, which depends on poppler. \
Poppler is a great little library for basic pdf editing, like splitting and concatenation. \
I recommend [mupdf](https://mupdf.com/) for normal users.

### [YT-DLP](https://github.com/yt-dlp/yt-dlp)

With yt-dlp I download youtube videos, music, or full channels even. \
Enough said.

## Writing

### This Website

I've written at length about all the various components that go into this website. \
Check out my blog post on it [here](https://port19.xyz/tech/blog/).

### [LaTeX](https://www.latex-project.org/)

I wrote all my academic papers in emacs org-mode using the latex export. \
This is a pretty common setup among emacs users.

### [LaTeX Beamer](https://latex-beamer.com/quick-start/)

I also do my presentations in emacs org-mode, leveraging latex beamer. \
One nice feature of latex beamer I've seen nowhere else is the progress indicator at the top.
I'll dig up the theme and color scheme I use soon-ish.

### [LaTeX Moderncv](https://github.com/moderncv/moderncv)

I format job applications via LaTeX ModernCV and can highly recommend it to stand out amongst the mountain of poorly typeset CVs made in Microsoft word. \
I use the banking style and prefer a red accent color.

### [Aspell](http://aspell.net/)

My spell checker of choice is aspell, which I frequently invoke through `ispell` in emacs. \
It has it's flaws, if you know of something better on linux please let me know.

## Emacs

### Completion

As a minibuffer completion framework I use the popular stack of [vertico](https://github.com/minad/vertico), [marginalia](https://github.com/minad/marginalia), [consult](https://github.com/minad/consult) and [orderless](https://github.com/oantolin/orderless). For in-buffer completion I use [corfu](https://github.com/minad/corfu). I also use [embark](https://github.com/oantolin/embark) and [wgrep](https://github.com/mhayashi1120/Emacs-wgrep).

### Git

[Magit](https://magit.vc/) and [git-gutter](https://github.com/emacsorphanage/git-gutter). You're doing yourself a disservice if you don't use these. \
I recommend adding key bindings for `magit-blame-addition` and `magit-clone`.

### Shells

[Shell-pop](https://github.com/kyagi/shell-pop-el) gives me the ability to toggle a bash shell. \
Fish like autosuggest is achieved via [capf-autosuggest](https://repo.or.cz/emacs-capf-autosuggest.git). \
I use [vterm](https://github.com/akermu/emacs-libvterm) as a fallback for TUI programs.

### Interface Enhancements

I use the default modeline nowadays.
[Dashboard](https://github.com/emacs-dashboard/emacs-dashboard) is my startup screen and entry point to an emacs session. \
[Bible Gateway](https://github.com/kristjoc/bible-gateway) adds a bible verse of the day to my dashboard. \
[Evil-goggles](https://github.com/edkolev/evil-goggles) flashes a selected region upon an action: visual feedback on stuff like `yw`. \
[Org-modern](https://github.com/minad/org-modern) improves the look of org-mode significantly.

### Lisp Development

I use [paredit](http://paredit.org/) mostly just for `paredit-forward-slurp-sexp` which I bind to `SPC TAB`. \
[clippy](https://github.com/Fuco1/clippy.el) is nice for `describe-function` and `describe-variable` in overlays, avoiding new buffers. \
[helpful](https://github.com/Wilfred/helpful) for quickly checking source code of emacs functions. \
[eros](https://github.com/xiongtx/eros) displays evaluation result overlays for elisp. \
[inspector](https://github.com/mmontone/emacs-inspector) is nice for nested lists in elisp. \
I made my own glue package for those two: [eros-inspector](https://github.com/port19x/eros-inspector) \
[rainbow delimiters](https://github.com/Fanael/rainbow-delimiters) makes lisp a little more colorful, I like it.

### Misc

[No-littering](https://github.com/emacscollective/no-littering) is neat, but I carry no strong opinions about it. \
[Define-word](https://github.com/abo-abo/define-word) is nice to have during writing to double check a words meaning. \
Occasionally I install [esup](https://github.com/jschaf/esup) to profile my startup time. \
I already talked about [exwm](https://github.com/emacs-exwm/exwm) and [pdf-tools](https://pdftools.wiki/) in prior sections.

### Key Bindings

I use [evil mode](https://github.com/emacs-evil/evil), both to evade emacs pinky and out of habit.
[Evil-collection](https://github.com/emacs-evil/evil-collection) expands the applicability of evil mode to emacs interfaces that don't usually support it.
For global keybindings I use [general.el](https://github.com/noctuid/general.el) and [which-key](https://github.com/justbur/emacs-which-key), I recommend avoiding hydra.
