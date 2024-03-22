+++
title = "💻 The Other Lisps"
date = 2024-03-21
description = "Experiments since my departure from Clojure"
+++

## Timeline

My history with lisp and functional programming starts in august of '22 where I learned haskell[¹](https://www.learnyouahaskell.com/), doing a lot of coding puzzles with it.
When I eventually wanted to make an actual project with it, I ran into a wall regarding the tooling and practical applicability of it. \
So, in september, I started learning clojure and then had a very productive few months with the language.
An archive of my clojure projects is available [here](https://github.com/port19x/clojure-era).

What eventually made me depart from clojure was a combination of platform pains with the jvm, as well as poor alignment of it's strengths and my needs.
I wrote about it in a post looking back on [6 months with clojure](https://port19.xyz/tech/clojure/), but it took a few more for me to archive all the clojure projects and look back no more.

## Emacs Lisp

If you were to be pedantic about it, I technically wrote emacs lisp before I ever did clojure, as emacs is configured in emacs lisp and I switched to that in january of '22.
The first time I really wrote emacs lisp, in a standalone fashion, was last december for advent of code.
I then wrote a major mode for HAProxy config files that I made available via melpa.

I like emacs lisp. Especially with dash.el bringing idioms from clojure and cl-lib bringing stuff from common lisp, I have reason to suspect it is one of the most diverse lisp dialects out there.
I may elaborate on useful libraries and dev tools for elisp some other time.

One problem is that it's slow.
I'm not proclaiming emacs itself is slow, but especially in the context of numerical coding problems, as are common in advent of code, it is.
You have to be careful with how you code your solutions, otherwise both your memory and cpu usage can spike through the roof.
Mitigations include using vectors instead of lists, memoization, good search algorithms and using `benchmark`.

## Scheme

In february I read the [opinionated guide to scheme implementations](https://www.wingolog.org/archives/2013/01/07/an-opinionated-guide-to-scheme-implementations) and decided to give [gnu guile](https://www.gnu.org/software/guile/) a fair shot, as it's one of the few scheme dialects with a culture of interactive development. This bears repeating as many scheme dialects, notably racket, don't develop code in an interactive fashion that leverages the repl.
Guile uses guix as it's package manager, motivating the brief distro hop [I wrote about](https://port19.xyz/tech/nonguix/) last month.
After a couple days scheme ultimately began looking like a fruitless pursuit, as their implementation communities are tiny, as are their selections of available packages. \
The sole silver lining, the only use-case I'll concede that scheme is useful for, is reading and working through [SICP](https://www.goodreads.com/book/show/43713.Structure_and_Interpretation_of_Computer_Programs), the greatest computer science book ever written.

## Common Lisp

Immediately after playing with guile scheme, I read up on some lisp history and started learning common lisp.
I recommend reading the [road to common lisp](https://stevelosh.com/blog/2018/08/a-road-to-common-lisp/) if you happen to be interested in learning the language.
After setting up some basic emacs tooling, mostly just [sly-overlay](https://git.sr.ht/~fosskers/sly-overlay), I checked out a [youtube video](https://www.youtube.com/watch?v=LqBbGFMPcDI) by gavin freeborn about cl project management with quicklisp and asdf.

The common lisp community, tooling and package selection are all pretty good. I spent about two weeks on and off working through most of the [lisp koans](https://github.com/google/lisp-koans) to familiarise myself with language idioms.
I also coded a little graphic with [sketch](https://github.com/vydd/sketch), which is the cl equivalent to the drawing library I used with clojure: [quil.](https://github.com/quil/quil)

What made me put common lisp on an indefinite pause was the sheer size of it, but some of the common ways of doing things didn't help either.
Notable things I dislike are the four different levels of equality[²](https://stackoverflow.com/questions/547436/whats-the-difference-between-eq-eql-equal-and-equalp-in-common-lisp), an emphasis on iteration in the small and an emphasis on object orientation via CLOS in the large.
I'll note the condition system, having a fast native compiler and just cl tooling in general are all pretty nice.

## Conclusion

All this programming language tourism reinforces my focus on shell and python as my primary languages of choice.
Both are extremely well suited to linux administration[³](https://port19.xyz/tech/go-review/). \
Even beyond my area of occupation, python remains a compelling choice for lisp programmers as well, since semantically speaking it has [few differences](https://norvig.com/python-lisp.html) with lisp. \
The lisp that stays in my toolbox is emacs lisp, as developing and distributing the improvements I want to add to emacs is fun and easy.
