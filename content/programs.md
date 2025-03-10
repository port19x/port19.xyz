+++
title = "💻Programs I use💻"
date = 2024-03-16
updated = 2025-03-10
description = "and recommend"
+++

## Base

### [Arch Linux](https://archlinux.org/)

Arch Linux has been my linux distribution of choice since early 2021.
It has been a reliable and trusty companion over the years, being less fragile than several of the allegedly stable distros I've used prior, such as debian.
I tightly integrate my [dotfiles](https://github.com/port19x/dotfiles) with arch, having a [PKGBUILD](https://github.com/port19x/dotfiles/blob/master/PKGBUILD) to automate my dotfiles bootstrapping.
I believe this approach to be superior to a post-install script, since it allows me to more explicitly track the packages I use and keep the list of explicitly installed packages low.

My recovery time from a backup, including a full reinstall, is less than one hour.

My current shell is zsh, but I've also used bash in the past. \
My wayland compositor is [labwc](https://github.com/labwc/labwc).

### [Brave](https://brave.com/)

I'm currently using brave as my primary web browser. I like it due to it's builtin adblock and speed. I've also extensively used both [Librewolf](https://librewolf.net/) and [Qutebrowser](https://qutebrowser.org/) in the past and can recommend them for enhanced privacy protection and keyboard driven operation respectively.

### [Foot](https://codeberg.org/dnkl/foot)

I have previously reviewed all terminal emulators, [have a read](https://port19.xyz/tech/terminals/).

### [Neovim](https://neovim.io/)

I currently use neovim with its default settings, no config file.

I did the majority of my computing inside of emacs, yet I do not believe everyone should switch to it.
It takes a rather specific set of biases and affinities to both persevere through the initial learning curve as well as reap worthwhile benefits.
You need to watch only two videos on emacs to make a well informed decision on whether you want to pursue it further or not:
- [luke smith - why I don't use emacs](https://youtu.be/1mr3issv79s)
- [protesilaos stavrou - emacs mindset and unix philosophy](https://youtu.be/qTncc2lI6OI)

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

### [Poppler](https://poppler.freedesktop.org/)

Poppler is a great little library for basic pdf editing, like splitting and concatenation.

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

I also wrote my presentations in emacs org-mode, leveraging latex beamer. \
One nice feature of latex beamer I've seen nowhere else is the progress indicator at the top.
I'll dig up the theme and color scheme I use soon-ish.

### [LaTeX Moderncv](https://github.com/moderncv/moderncv)

I format job applications via LaTeX ModernCV and can highly recommend it to stand out amongst the mountain of poorly typeset CVs made in Microsoft word. \
I use the banking style and prefer a red accent color.

### [Aspell](http://aspell.net/)

My spell checker of choice is aspell.
It has it's flaws, if you know of something better on linux please let me know.
