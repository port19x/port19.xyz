+++
title = "💻 Farewell Qutebrowser"
date = 2023-02-14
description = "Notes after migrating from Qutebrowser to Librewolf"
+++

# Notes after migrating from Qutebrowser to Librewolf

## Background

So for the past 2 years I've been using Qutebrowser to browse the web, sponsoring the project for the past year.
It's the best keyboard-driven browser currently in existence and is very actively maintained.
I originally switched to Qutebrowser back when I first learned about tiling window managers and wanted to use my keyboard for more and more things.
What now urged me to reconsider this browser choice was the continued lack of per-site cookie persistence in Qutebrowser.
This resulted in me having to log into every account (except discord for some reason) on each new browser session.
And since some issues with hand pain have resurfaced recently, repetitive unnecessary keystrokes are the last thing I need right now.
Librewolf has been my secondary browser for a while, being well known for it's state of the art security and privacy.
Librewolf is basically a heavily patched Firefox and is what you'd get after configuring Firefox for privacy for a week.

## Mouse > Keyboard

In text editors it makes sense to have a keyboard-driven interface.
This is due to the nature of text editing: you primarily insert text, occasionally correcting mistakes, copying and pasting parts and moving around your body of text.
Web Browser are different: Your involvement is a lot more passive. You primarily navigate the web and only occasionally answer short text-prompts and rarely write longer content.
Using a two-handed input device provides no benefit for this activity.
It's a lot simpler, a lot more precise to use some pointing device like a mouse, or a track point.
With minimal practice you can even switch hands.
I sometimes browse the web with my left hand when I'm experiencing hand pain from long typing sessions.
But the ergonomics go further than just halving the amount of required hands:
Mice buttons have a shorter travel distance and a lighter actuation weight than most keyboards.
Mice are shaped to fit and support your palm, or at least not require the hovered hands that constitute correct typing form.
They are lighter and allow for a wider, more natural range of motion.
I may go into more depth on the ergonomics of mice in a separate article, but you get the broad picture.

## Accessibility

**uBlock Origin:** \
Librewolf supports addons and therefore provides true, state of the art adblocking via uBlock Origin.
This is vastly superior to brave style adblocking provided to Qutebrowser by python-adblock.
Additionally, uBlock Origin provides optional filters to hide cookie banners and let's you control what javascript gets executed.
Many people dismiss Qutebrowser on this merit alone, but since I mostly browse high-quality websites it was tolerable.

**Dark Reader:** \
Most of the web is stuck in light mode, which contributes greatly to eye strain.
The Dark Reader extension helps with that in ways Qutebrowser simply can't.

**Reader View:** \
Reader View shows only the content you care about and provides a better interface to read most articles posted on the web by content factories that inevitably float to the top of search results.
This greatly reduces visual noise and allows me to waste less focus while consuming web content.

## Quality of Life

**Tabliss:** \
A new-tab extension that is pretty easy to set up.
To be fair, you could set up something equivalent in Qutebrowser by using a proper webpage for such a task.
Bento is one project that comes to mind and has been on my bucket list for a while.
Well, tabliss is a lot more accessible and involves 0 code, so I'll take that over Bento any day.

**Auto-hiding Tab Bar on full screen:** \
On Qutebrowser I had a key binding to hide both the status bar as well as the url bar for when I was reading something or just didn't need it for a while.
On Librewolf, when I fullscreen the window, the tab bar automatically hides itself and reveals itself again when I hover near the top of the screen.
This is peak ux.

**Content aware screenshots:** \
When you screenshot something in Librewolf, it automatically shows you selectable regions while hovering across the page.
Since you often want to capture exactly one paragraph or one div or some other form of content container, this is immensely helpful and marginally improves the quality of your screenshots.
Qutebrowser doesn't even do screenshots on it's own!

## Privacy and Security

While many care little about privacy, I've been going above and beyond to harden my security and minimize my digital footprint.
Having suboptimal browser privacy was in stark contradiction to this, as the web browser covers the majority of your datas surface area, especially on desktop computers.
I can now rest assured that I have state of the art protection that is more in line with the drastic precautions I take in other areas of my digital life, such as using a feature phone and closing old accounts among other robust opsec habits.

## Farewell

So to round things off: Is Qutebrowser a good browser? Yes, for sure.
It is by far the best keyboard-driven web browser released today and has one of the most competent and active maintainers I've seen in any open source project.
It is great for the specific target audience it caters to.
It's just that now I no longer fit into that target audience and am glad to have adopted a different product that caters to my needs.
I hope you found this piece insightful and gained some appreciation for the tools at your disposal.
