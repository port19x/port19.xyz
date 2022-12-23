+++
title = "💻 Why I like Monoliths"
date = 2022-12-01
+++

# On Monoliths

## Why do people gravitate to modular architectures

_"Scalability": both in terms of performance and project size_
I may choose to write another article about this phenomena, but for some reason developers fear performance issues more than anything else.
For this article it's enough to say that your pet project will likely never have any issues regarding performance.
Even a raspberry pi will handle the traffic of several thousands of daily users for most scenarios.

More important to most developers, they allow for a more rigid separation of concerns, useful for scaling a development team to more than 2-3 devs.
If your scope becomes large enough you can no longer have a whole team work on one closely coupled set of classes / modules / files with code.
It is also worth noting that some applications inherently benefit from some form of modularization: a website without backend is, through technical means, limited in what it can accomplish.
The point I'm trying to make in this, admittedly, ranty article is not that a microservice architecture is _never_ a good idea for anything.
My point is that it's almost always a bad idea for small projects.

## The beauty of the monolith

I believe I can sell you the upsides of developing a monolith far better than the downsides of everything else.
A monolith, in the way I use the term, is any one self contained programm that is not strongly separated into pieces on a conceptual level.
You may still have different files where you write code in, but at it's core the system is interdependent and tightly coupled.
A monolith
 - Encourages minimalism / discourages feature creep
 - Leaves complexity to be tackled head on in code, rather than to be abstracted away
 - Is easy to grasp and reason about
 - Is easy to deploy / package
 - Is easy to finish
 - Can reach a high degree of polish

## The design process

As a matter of product design, let's return to the example of a website.
After answering the basic questions, what it is and who it's for, ask yourself wether it needs a backend.
Do you need to dynamically change contents on the page? No? Maybe don't use a backend.
Do you need to store and/or process user data? No? Why use a backend.
Is your website just a pile of documents to be viewed in a browser? Yes? Use html, css and maybe a static site generator. No backend.
Is your website capable of running purely on the clientside? Yes? Write some js and don't dare to phone home to a backend.

*Modularize as little as possible, but as much as necessary*

If one minor feature would require modularization, but it doesn't contribute much to the overall value: *just don't include it*

## Don't solve problems you don't have

You have enough problems as is. You have a product to develop. A project to hack on.
You gain nothing from preparing yourself for an unlikely future.
