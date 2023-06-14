+++
title = "💻 Taking the javascript black pill"
date = 2023-06-14
description = "Towards more marketable projects"
+++

# Towards more marketable projects

This post can be seen as a continuation of my previous post [Web apps are marketable](https://port19.xyz/tech/webapps/).
I recommend you read it before this one.

Users, even technical ones, largely don't care about my tech stack.
Being on the web I'm already making a big concession towards my target audience, but it's not enough.
The ten monthly active user my next project might attract, won't be impressed if I code it's backend in clojure or rust.
Whatever product I ship, it has to have an appealing and responsive user interface, as well as plenty of high quality content.
When working towards that good first impression, clojure and rust do not help.

Most web applications we use today are just interfaces to a database.
The database holds the content and the context, and thus delivers the core value of the application.
A backend is just a historical remnant. It is a wrapper around that database, providing security and routing, among other things.
Nowadays solutions exist that let me build a web app without considering a backend first.
And perhaps more importantly, such tools answer all the questions I may have about hosting.
If you haven't caught on yet, I'm talking about firebase, or rather it's oss cousin [supabase](https://supabase.com/).
These provide you with a database, storage, authentication and serverless functions, plus some more obscure features.

So given the assumption that I can largely rely on third parties to figure out my hosting and backend, I now need to focus on user interfaces.
This website is a testament to the capabilities of plain html and css.
But this website is just a collection of documents I provide to you, the reader.
This blog is not some interactive web app that solves a problem you have.
Thus I am looking into javascript.

My UI framework of choice at the moment is [svelte](https://svelte.dev/), which makes onboarding accessible through their [fantastic tutorial](https://learn.svelte.dev/tutorial/welcome-to-svelte).
Svelte does not intimidate me, despite my total lack of javascript familiarity.
For the backend I'll rely on supabase as much as I can, but will look at [sveltekit](https://kit.svelte.dev/) for a server side solution when my project demands it.
Other tools that are notable are [vite](https://vitejs.dev/) for build tooling and [pnpm](https://pnpm.io/) for faster node package management.

As for my project idea, I'm planning to create an educational website.
I'm not sure what the topic of said website will be, it could be web scraping, awk, mathematics or something else entirely.
But in it's interface idea it should be split into a cohesive learning path, with each task directing to external relevant resources and highlighting a particular property or feature of the topic at hand. 
As the site grows it may be further divided into related sections.

As for the timeline, expect nothing of substance before Q4.
I have a lot of new things to learn, but am curious to do so.
We all know javascript is a flawed language at best, but the hosting platforms available as well as the evolving UI frameworks are compelling enough for me to grant it it's fair chance.
