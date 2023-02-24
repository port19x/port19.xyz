+++
title = "💻 Why Emacs?"
date = 2022-03-19
description = "Thoughts 2 months in"
+++

## Keep those vim bindings

_Emacs: Escape Meta Alt Control Shift_

Trying to choose between vim and emacs is pointless. Vim has far superior keybindings, while emacs is far more powerful.
*Evil mode* allows you to keep your beloved vim bindings making text editing inside emacs not just familiar, but nearly identical to text editing in vim with only a few rare edge cases.

## Don't try GNU Emacs

_Use doom emacs instead_

Two months before switching from vim to doom emacs as my primary editor I sunk half a workday into trying out GNU emacs.
A blinding wite canvas, terrible icons, no clear instructions, trash keybindings and confusing documentation scared me off. I left GNU emacs with more questions than answers.
Now you might be someone who likes to configure his stuff, and believe me I'm no different, but emacs really is an exception you should make.
I have heard stories of people spending a week with GNU emacs before even getting down the basics and then proceeding to spend another month constantly tweaking their config before slowly approaching a comfortable environment.
Don't waste your time.

Doom emacs and spacemacs are two solid options, both focussing on ex vim users.
I am using doom emacs and think it is the better option if you still want to configure some things, but also want a solid foundation allowing you to get work done right away.
If you need everything and the kitchen sink and don't care about bloat, spacemacs might be better suited to your needs.
With doom *I got productive in one day*, most of which was learning org mode.
Doom is pretty and welcoming out of the box, with config files that are easy to understand and intuitive defaults.

## Don't live in Emacs

_Your rice is tasty enough_

The next trap is thinking you have to live inside emacs, or that that would even be beneficial.
Many vim users call emacs a fine operating system in lack of a good text editor but if you already have a nice tiling wm setup you will gain nothing from trying to move all your stuff into emacs.
I tried it out for the sake of experimentation and found most emacs alternatives to my software to be either more buggy, slower, or often both.
Two extreme cases were emms (emacs multimedia system) and a pdf mode that I forgot the name of.
Emms choked on my pipewire config a few times and complained about some mpv scripts, while also generally providing a worse experience than cmus, moc or even standalone mpv.
The pdf mode took a few seconds to buffer when I tried to skip a few pages by holding down j.
Using mupdf I can fly through 1000 pages of pdf without hickups no problem.
Some tasks where moving them into emacs could provide some value: email (mu4e), rss (elfeed), git (magit)
If you're happy with your current application stack, keep using it and just use emacs for text editing and org mode.

## Org mode

_The swiss army knife_

I don't really use emacs, I use org mode.
Emacs just happens to be the platform org mode runs on.
At first glance you might confuse org mode to be just another markup language.
But it also offers strong support for literate programming and can be exported to whatever format your heart desires. Project management and scheduling facilities are the cherry on top.

## Damn good markup

At it's core, org documents are trees. Your headings are foldable branches of that tree, enableing you to focus on what you are doing and hide away everything else.
This funcitons much like the code folding you know from popular IDEs.
If you really wanted to, you could throw everything in one org document without things getting confusing.
It supports tables to an extent no other markup language does.
Of course it supports standards like ~~strikethrough~~ _cursive_ *bold* and `inline code`

## Computational Notebooks

I had a programming lecture this semester that taught java.
Instead of having many separate files for the exercises, I used one org document that is now 34KB large spanning ~1400 lines.
I used a top level heading for each chapter with subheadings for each exercise.
I wrote my code inside code blocks that I then executed, printing the output right below.
The todo functionality helped me keep track of what exercises I was still missing and my overall progress.
In later chapters I even discovered plantuml which enabled me to make a flowchart and embed it into my document before writing the main code.

If you're familiar with jupyter notebooks from the python ecosystem, org mode gives you pretty much the same functionality.

## Exporting

If you're viewing this webpage right now, you may assume that I used some static site generator like hugo or jekyll to generate it, or even wrote the html by hand.
Luckily, I was able to conveniently write this entire page in org mode.
I use the admittedly long keychord of ~SPC m e h h~ to export it before checking it in my webbrowser and then pushing the changes to github where this website is hosted.
I'm really happy with that workflow so far.
In the coming months I may start exporting to odt, latex and pdf while writing my first scientific paper.

## Life Management

I prefer to use my phone for todo and expense tracking, but if I had to do those on my PC, I'd definitely use org.
Using tables you can easily get detailed financial statistics and if you combine this with literate programming you can easily get your feet wet with more detailed data analysis.
Using org-agenda you can keep track of your todos, schedule and prioritize them as well as use tags if you're into that.
Org-capture enables you to take quick notes without interrupting your work, I plan to use this to keep track of my groceries list soon-ish.

## Learn vim first

Some of you reading this might still use a graphical text editor like vscode, atom or sublime text.
If that is the case, contemplate a move towards vim first, you won't regret it.
Hopping to emacs from vscode is like ging from crawling to running without ever learning to walk.

## Links

- Official feature preview: [[https://orgmode.org/features.html|org mode]]
- Introductory video by DistroTube: [[https://www.youtube.com/watch?v=dr_iBj91eeI&list=PLyy8KUDC8P7X6YkegqrnEnymzMWCNB4bN&index=2|Getting started with Doom Emacs]]
- [[https://github.com/hlissner/doom-emacs|Doom emacs]]
- [[https://github.com/syl20bnr/spacemacs|Spacemacs]]
