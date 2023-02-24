+++
title = "💻 Clojure: 6 months later"
date = 2023-02-24
description = "Not everything is a nail"
+++

# Not everything is a nail

## Background & Projects

Half a year ago, after spending about a month learning haskell, I eventually switched to clojure because I had trouble actually making programs with it.
I picked up the language quite quickly, largely thanks to that previous exposure to functional programming, but also because [clojure for the brave and the true](https://www.braveclojure.com/clojure-for-the-brave-and-true/) is awesome.
After reading the first couple of chapters I jumped into my [first project](https://port19.xyz/kicklistbot2/data-processing-with-clojure.html) and reimplemented the ranking logic of a discord bot I had used more than a year prior for clash royale clan management.
Then I wrote a [dvd-animation](https://port19.xyz/dvd-animation/) with quil, a 2D graphics library.
I even did my best to keep up with advent of code, doing the [first week](https://port19.xyz/aoc-2022-week-1/) and documenting it via orgmode.
Then things slowed down and after [redqu](https://github.com/port19x/redqu), a reddit rss media scraper leveraging babashka, I only published some [template repo](https://github.com/port19x/clj-template-repo) and did some stuff on codewars I guess.

## I'm not a programmer

Then, last weekend, it hit me.
It was something so obvious and important, yet obscured by my tunnel vision on functional programming:
*I'm primarily a sysadmin.*
The programs I write are short and achieve simple goals.
They are used through the terminal and often use network connections.
They run and then they exit.
I'm not a "software developer", building large applications that run on some server for all eternity.
Me being decent at coding is merely an accident, and should no longer stop me from growing the relevant skills for administration.
This alone made me discard clojure as a viable language, but further problems with it quickly became obvious.

## Application domains

One of the primary problems that frustrated me throughout my clojure journey was its platform.
My scripts run ad-hoc, remember? Why the heck would I want a jvm or javascript platform for those.
Ideally, I could just distribute a binary, which is possible if you spend an evening setting up graalvm and praying that stuff works, but it's clearly not intended.
And even an interpreter, like babashka, only solves half of the problem. With babashka I can run stuff more easily, but if I actually want to distribute my application, I have to tell people to install some very obscure dependency, that is far from being included in most linux distros repositories.

Another problem is clojures poor fitness for CLI applications.
Parsing arguments... does not spark joy.
Sure, it's doable and it's better than in many bad corporate languages of old, but it doesn't remotely compete with the default admin languages that I'll mention later.
And forget about terminal user interfaces.
There exists a gum wrapper for babashka, but at that point you might as well leave.

Now another domain I like to toy around with on occasion is 2D graphics.
And quil is actually somewhat usable for that, and probably a really good library if you want to create generative art.
But for games it's lackluster at best, because thanks to how clojure and functional programming works, managing state is a huge chore.
This is hardly quils fault, but noteworthy enough for me to include it.

So since clojure is a hosted language that's hard to distribute, is mediocre at networking and cli apps as well as being not great at 2D graphics, I'm moving on.
I'll miss my pipes, my higher order functions, multi-arity and the repl, but they are all sacrifices I'm willing to make to have a language that is actually good at the things I'm trying to do.

## So what now?

Well, first of all, I'll be shifting some focus away from programming to infrastructure administration.
For that purpose I opened an account with [digital ocean](https://m.do.co/c/e3fad703cc9b) and started playing with [ansible](https://docs.ansible.com/ansible/latest/getting_started/index.html), which I plan on continuing.
Some things I plan on setting up on that VPS through ansible:
- security hardening
- firewall
- web server, preferably nginx
- monitoring, preferably with prometheus and grafana
- a git server
- docker

In terms of programming languages: Shell, Go, Python, in that order.
- Shell is perfect for automation of system tasks and a must have for linux users.
- Go is by far the best for terminal user interfaces, while also being awesome at network programming and capable at 2D graphics with [ebiten](https://ebitengine.org/).
- Python has by far the most libraries, is best at webscraping and is also pretty good with networks and automation.

Clojure is perhaps the best programming language out today in terms of good language design and power.
But even with the best hammer I had to realize at some point that not everything is a nail.
I'll keep you guys updated on further developments, especially once the VPS is set up with most of the things mentioned above.
