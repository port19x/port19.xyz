+++
title = "💻 PHP Language Review"
date = 2024-07-18
description = "Surprisingly nice"
+++

For quite a while now I have wanted to develop a dynamic website.[¹](https://port19.xyz/tech/webapps/)
In that pursuit I looked at Python Django, even going through the whole tutorial.
I was almost certain that this would be the best way to do things, but frustrations with the deployment process made me hesitant to go any deeper.

Luckily, a hacker news post about [mildly dynamic websites](https://news.ycombinator.com/item?id=40729671) gave me
the impulse to at least give PHP a quick try since the author claimed its ease of deployment to be unparalleled
and its usefulness for especially smaller applications to far exceed that of the heavyweight full-stack frameworks
like Python Django or Ruby on Rails.

So, on a fateful evening, I thought to myself: "What's the worst that can happen?
Let's just spend an hour or two trying to make a PHP website on a platform as a service provider."

My expectations were that within about two hours I would get *something* up and running, but those were far exceeded.
Within less than an hour, including the time spent relearning SQL basics and creating my account at [nearlyfreespeech.net](https://www.nearlyfreespeech.net/), I had a dynamic website up and running.
I took note of the ["speedrun checkpoints"](https://github.com/port19x/php-monorepo/tree/master/1-origin), if you want to check exactly how much time I spent on what.


This experiment made me very optimistic about PHP and so on the next evening I implemented
[fizzbuzz](https://github.com/port19x/php-monorepo/blob/master/2-fizzbuzz/index.php) and about a week later I re-implemented an old project of mine, a Clash Royale kicklist generator that at the time of writing is [still online](https://kicklistbot.nfshost.com/).

In the weeks since, I have bought myself used copies of [Programming PHP](https://www.oreilly.com/library/view/programming-php-4th/9781492054122/) and the [SQL Pocket Guide](https://www.oreilly.com/library/view/sql-pocket-guide/9781449397586/) and have made a [monorepo](https://github.com/port19x/php-monorepo/) for future PHP projects.

If the positive sentiment of this little review surprises you, keep in mind that I'm talking about the old-school PHP as in *throw everything into a single file and use a small SQLite DB* PHP.
I'm not talking about the modern *object-oriented Laravel Symphony PHP* that requires a team of agile™ web developers to build things with.

It's [PHP the wrong way](https://phpthewrongway.com/), and I love it.
