+++
title = "💻 My Blogging System"
date = 2024-03-10
description = "A tour of what makes my blog totally awesome"
+++

*A tour of what makes my blog totally awesome*

I've been actively blogging for almost 2 years now, releasing over 50 posts in the process.
Along the way I optimised a bunch of parts of my publishing process and website. \
This post will cover all of the technical aspects of what powers this blog.

## Static Site Generator

My static site generator of choice is [Zola](https://github.com/getzola/zola).
What makes zola special is that I retain full control over all the HTML[¹](https://github.com/port19x/port19.xyz/tree/master/templates) and CSS[²](https://github.com/port19x/port19.xyz/blob/master/static/style.css) that ends up on my page, no theme bullshit like with Hugo.
It's written in rust and thus reasonably fast, building my whole website in <100ms.

The documentation is okay-ish.
My gripe with it is that the hard part, how to effectively leverage the templating engine, is almost entirely undocumented.
Also it's difficult to find large sites written in zola to copy-paste things from.
I'll claim mine is the biggest until proven otherwise.

I've previously written on Zola and my dislike for Hugo [here](https://port19.xyz/tech/zola/). \
Note that even Hugo is still leagues better than any of those javascript SSGs.

## Hosting

Site hosting is done via github pages.
That way I don't have to administrate linux servers in my free time as well.
Also no expiring certificates like on every other old blog I see nowadays.

If you end up self-hosting with a proper VPS, please take the necessary precautions and at least automate cert-rotation as well as downtime alerting.

I bought my domain from Njalla.
They're okay, a little expensive maybe.
It doesn't really matter where you buy your domain.

## Post Categories

I sort my posts by categories. Tags don't really make sense until you reach triple digits of posts.
On my landing page, you can filter the post categories with some convenient buttons at the top.
This client-side interactivity is implemented using [alpinejs](https://alpinejs.dev/).
I hacked that filtering together in an afternoon sometime last year, not having touched javascript before or since.

## Asset Management

I tend to convert any images I use in posts to jpegs. \
You can do this via imagemagick on most linux systems: `convert <input> asset.jpg`

Since my website uses unicode emojis for categories, and I don't want to ship 10 megs of junk on every request, I used subfont to create a minimal subset of the unicode font I use.
I've written on my usage of subfont [here](https://port19.xyz/tech/subfont/).

## Quality Assurance

To combat bit rot of my posts, I use a [dead link checker](https://github.com/hahwul/deadfinder) via github actions.
It's pretty slow, taking like 2 minutes to check my site.
It also doesn't give me the red X in CI that I want upon finding a dead link, but that's probably just a bug that I should report. \

If you're looking for an easy coding project, please write an asynchronous dead link checker with a github action to go along with it.

Sometime last year I checked my site with the various SEO checkers I could find, just to make sure my HTML head and other things are as compliant as they can be.
[Lighthouse](https://developer.chrome.com/docs/lighthouse/) gets you 90% of the way there and is the official tool bundled with chromium based browsers.
Just make sure you get the full score with lighthouse and you'll be fine.

I also check for [trailing whitespace](https://github.com/ocular-d/trailing-spaces), but that's probably excessive and doesn't matter.

## Misc

I disallow the GPTBot in my [robots.txt](https://github.com/port19x/port19.xyz/blob/master/templates/robots.txt), and recommend you do the same.

This website doesn't have an about page, which is fine since I don't currently syndicate my posts on hacker news, lobste.rs or, god forbid, reddit.
I might add one in the future, or I might not.

I hope this post is helpful to some of you. \
Being an internet landlord[³](https://youtu.be/SynQFoNMcQU) is fun, you should try it!

