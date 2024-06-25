+++
title = "💻 Optimizing Unicode Fonts with Fonttools"
date = 2024-06-25
description = "Good riddance subfont!"
+++

*good riddance subfont*

This week I added a nicer house emoji to the footer and added heading anchors to all my `<h2>`s in the tech category.
So to make sure everyone can actually see those I had to re-optimize my font of choice.
Previously I have written about [how to use subfont](https://port19.xyz/tech/subfont/) for this, but it's a pain to work with and despite my own documentation I didn't manage to make it work again on its latest version.

Thank god I found [fonttools](https://fonttools.readthedocs.io/en/latest/subset/). \
First I grepped for all emojis in my website via a hideous grep command I found [on stackoverflow](https://stackoverflow.com/questions/43242440/javascript-regular-expression-for-unicode-emoji/45138005):
```
grep -IPorh "[\x{1f300}-\x{1f5ff}\x{1f900}-\x{1f9ff}\x{1f600}-\x{1f64f}\x{1f680}-\x{1f6ff}\x{2600}-\x{26ff}\x{2700}-\x{27bf}\x{1f1e6}-\x{1f1ff}\x{1f191}-\x{1f251}\x{1f004}\x{1f0cf}\x{1f170}-\x{1f171}\x{1f17e}-\x{1f17f}\x{1f18e}\x{3030}\x{2b50}\x{2b55}\x{2934}-\x{2935}\x{2b05}-\x{2b07}\x{2b1b}-\x{2b1c}\x{3297}\x{3299}\x{303d}\x{00a9}\x{00ae}\x{2122}\x{23f3}\x{24c2}\x{23e9}-\x{23ef}\x{25b6}\x{23f8}-\x{23fa}]" | sort -u | tr -d "\n"
```
*(no, I'm not gonna format this and break the copy-pastability)*

Then I slapped the result onto the following fonttools command: \
`fonttools subset NotoColorEmoji-Regular.ttf --flavor="woff2" --text=`

That's all. Just a short post for myself in a couple months time.
