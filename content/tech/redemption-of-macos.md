+++
title = "💻 The Redemption of MacOS"
date = 2026-09-02
description = "ReReReviewing"
+++

I just realized that the last time I wrote about anything Apple related has been about a year ago and I wanted to take the opportunity to review how my usage and outlook has changed.
Since I still use my iPhone, AirTags and Apple Watch just the same, this post will be about my experience in macOS.
In my [last post](https://port19.xyz/tech/apple-ecosystem-2/), I wrote that macOS is bad at both serious work and serious play, and I still hold that opinion.

But now my serious play is relegated to the Switch 2 which, given the games that I play and the amount I play them, is superior to even a gaming PC 10 times its cost.
As for serious work I have a full-time job, and macOS is a bearable for occasional coding.
Should I code more in the future I will probably buy a secondary device for it, or even remotely connect to a Linux server and code on there.

## Dictation

There are some new capabilities that I quite enjoy.
First and foremost, the tool I'm using to write this post right now, which is dictation in macOS 27.
It is trivial to set up, fast and highly accurate.
For long texts like this, it is hard to beat.

## Foundation Model

Secondly, I am beginning to see somewhat useful local AI models emerge, but I'm not quite satisfied with the intelligence as of right now.
The best case would be something like asking for basic syntax which has been possible for years now, but I'd argue never been faster.
Take a look at the builtin foundation model:

```python
λ time fm respond "give a short example of a python list comprehension"
Here's a short example of a Python list comprehension:

```python
# Square all numbers from 0 to 9
squares = [x**2 for x in range(10)]
print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
\```
fm respond "give a short example of a python list comprehension"  0.06s user 0.02s system 3% cpu 2.161 total
```

*backslash inserted by me so zola properly renders things*

You could even do some naive vim integration by running this via `:r!` to get a poor mans github copilot, or just to avoid having to open another terminal.

This would be a different story on a 32 GB RAM MacBook. where much more intelligent models are available and have been for a little while.
So when I inevitably upgrade at some point, 32 GB RAM is a high priority and I am willing to pay a heavy premium for it.

## Thunderbolt

I recently bought a fancy OLED monitor that comes with a built-in USB hub and being able to wire up my MacBook to the monitor with a single cable, handling power, video, and USB devices is very convenient.

## Productivity ~Trio~ Duo

Calendar and Notes are my bread and butter of personal organization now.
It is very convenient to have these synced between my phone and MacBook.
Photos and Documents as well, but less so.
I think I undersold this part in the past, the grass is definitely less green on the other side here.

## Conclusion

MacOS has grown on me in the past year. I found ways to avoid its weaknesses and discovered emerging strengths.
I'm staying firmly in the walled garden of apple, where the grass is green enough.
