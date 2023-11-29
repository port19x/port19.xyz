+++
title = "💻 Optimizing Unicode Fonts with Subfont"
date = 2023-11-29
description = "From 23 Megabytes to 12 Kilobytes"
+++

# From 23 Megabytes to 12 Kilobytes

So this website uses a small handful of unicode emojis to visually indicate different elements, most notably post category.
Since not every browser handles these well, I supply googles [noto color emoji](https://fonts.google.com/noto/specimen/Noto+Color+Emoji) font as a fallback.
This font is about as large as my whole website, so sending it on every request is a non-starter.
[Subfont](https://github.com/Munter/subfont) to the rescue!
A command line tool and generally available via npm.

Since this is a javascript project by someone I assume to be a frontend dev, it makes some weird assumptions.
By default it will spit out the optimized font as a massive base64 glob inside your css file. \
I don't want that.
The workaround [¹](https://github.com/Munter/subfont/issues/155) is to specify more than one format.

1. If you've optimized the font previously and need to cover new glyphs, temporarily replace it with the larger parent font
2. Make sure you're in a temporary directory as this will spit out a whole lot of garbage
3. `subfont --formats='woff2,woff' -r -d -o . https://port19.xyz`
4. Locate the optimized font in the `subfont` directory

That's all. Just a quick reference for my future self, but maybe someone else finds it useful as well.
