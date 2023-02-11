+++
title = "💻 Hugo is inexcusably bad"
date = 2022-12-24
description = "Why this blog uses Zola instead of Hugo"
+++

# Why this blog uses Zola instead of Hugo

Before I get started, I should note that hugo is still less horrible than most of the crimes committed by javascript devs and pushed as static site generators.

## Hugo onboarding is a nightmare

I spent several hours across a few days trying to get hugo to suit my needs.
As with every static site generator, getting the first piece of html served is no problem and I got through the basics fast.
Getting just a little further, I really enjoyed luke smiths video and followed [his tutorial](https://www.youtube.com/watch?v=ZFL09qhKi5I) with his theme, [lugo](https://github.com/LukeSmithxyz/lugo).
Aside from some things not looking as expected because of some recent commits that I rolled back things somewhat worked.
But now I wanted to customize and get the directory structure to make sense.

## What the fuck is a theme

Essentially defaults. Defaults that hugo seems to not have out of the box.
You can overwrite anything set in the themes directory in your own directories.
The themes directory and it's contents just mimic the directory structure at the root of your project.
"Using Hugo without a theme" spit out pretty garbage search results.
But one forum post stuck out and actually managed to answer the simple question of wether it's possible.
[It is](https://discourse.gohugo.io/t/solved-is-a-theme-a-requirement/2154), by just copying the themes files directly into the projects local folder.
That ship has sailed for me, then and there.
I want to write my own templates and craft my own website.
The vast majority of hugo users prefers precrafted templates and layouts and only customizes those sporadically.

## Towards a less cringe alternative

I stopped for the day and browsed some of [bugswriters](https://www.youtube.com/@bugswriter_) videos.
His [introduction to zola](https://www.youtube.com/watch?v=V_qy1BnEMCc) quickly had me sold.
Actually usable documentation.
A non-moronic directory structure.
No theme required by default, you write the templates yourself.
Unpolluted search results when checking for details.
Thats where I left off.  Convinced of zola but not yet applying it.

So the better answer to "Using Hugo without a theme" would have been "Use zola"

## Migration

Then, yesterday, I started migrating most of my blog posts from vimwiki to markdown and Zola.
After having ported 2 articles I made sure to spice up my landing page, which I did for a few hours.
Understanding how to generate sorted sections was a matter of understanding the templating language.
But luckily [Tera](https://tera.netlify.app/docs/#getting-started) is just as well documented as [Zola](https://www.getzola.org/documentation/getting-started/overview/) itself.
I rewrote my css, being inspired by [lukesmiths webpage](https://lukesmith.xyz/) in many details.
To get back the categories I used by convention in vimwiki, I just prepended the site title with a unicode character and then filtered by those.
Taxonomies/tags are inherently hard to work with, zola makes it somewhat accessible but I don't want to deal with them until I have a real need.
After several hours of crafting my webpage it has become what you see now.
I'm sure I'll hack away at the css some more and my index.html will grow organically.
But it's mostly done and I'm very happy I went with zola over hugo.
