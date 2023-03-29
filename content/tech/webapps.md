+++
title = "💻 Web apps are marketable"
date = 2023-03-29
description = "friction cripples adoption"
+++

# Friction cripples adoption

One of the biggest factors stopping potential users from adopting your software is the friction involved in said adoption process.

## Friction in native applications

If you distribute a native application, the best case for a smooth adoption process would be as follows:
1. The user clicks on a link to you projects install instructions
2. The user immediately sees a command involving his native package manager and copies it
3. The user already has a terminal open and pastes the command
4. The user hits enter and isn't prompted for any further confirmation
5. The user launches your application

This is a 5 step adoption process assuming extremely favourable conditions.
Step 2 could be 2 steps if you support many native package managers and the user has to find his one first.
Step 3 could be preceded by opening the terminal.
Step 4 could be extended to prompt for several more interactions, as is standard with yay the AUR helper.
Step 5 could be delayed because your user needs to read your documentation first to see how to launch your application.

You quickly end up with a 10 step process that, despite taking only a minute or two, delays the adoption of your software and introduces enough friction for many users to never bother to check out your offering.

## Friction in web apps

Contrast this with 90% of decent web apps: You click a link and are already using the software.
This is a one step process taking maybe 5 seconds with bad internet.
Even if your web app is corporate garbage, displaying a cookie banner and an email form, it's only 2 more clicks to get rid of those.
And this only highlights the friction on a mere time axis.

Web apps come with an additional benefit of trust.
The web browser is giving some sense of safety to the users, as it protects them from ill intentioned developers.
Lastly, users might be less hesitant to adopt a web app, since it takes no additional storage and, assuming the browser is already open anyway, it might take less computing resources than many poorly written native applications.

## Languages for the full stack web

Assuming I have convinced you that much of your time may be better spent developing web apps, you might now think about the tools required.
I'd like to recommend you use programming languages that are well suited to both back-end and front-end code.
I am currently only aware of two programming languages that fit this criteria: Typescript and Clojure.
Typescript is extremely popular and tRPC makes connecting the front-end to the back-end very straightforward.
I personally prefer Clojure. It is a functional lisp with the reference implementation, also called Clojure, running on the JVM.
The other major implementation is Clojurescript which, as typescript, compiles to JavaScript.
Both implementations work together really well and, thanks to the languages emphasis on data oriented applications, they integrate nicely with all major databases.
For next level coherence you can even choose to use Datomic as your database.
Created by the same author, it is bound to support many of the idioms you'll be used to and work well with your functional gem of a full stack web app.
