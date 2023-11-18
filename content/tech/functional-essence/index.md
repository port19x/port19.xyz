+++
title = "💻 The Essence of Functional Programming"
date = 2023-11-18
description = "My attempt at a better explanation"
+++

<figure>
<img src="./consing.png" height="300vw">
<figcaption><i>
My attempt at a better explanation
</i></figcaption>
</figure>

## State

**The key premise of functional programming is that there shall be no mutable global state.**

Every other property of functional programming can be derived from this key premise.
Every semantic tool that is foreign to the imperative programmer exists to make handling immutable global state possible and ergonomic.
I do not consider the absence of (side-) effects or functional purity to be a defining factor, your programm needs to interact with the world after all.

## Lists

In object oriented programming the most prominent composite data structure is the object, derived from classes.
In functional programming it is the variable sized, sometimes nested, list.

Some people make the case that recursion taking the place of loops is something that sets functional programming apart from imperative programming.
I disagree.
It is the treatment of the list as a holistic unit that semantically enriches functional programming over it's imperative counterpart.
Whether you recurse through a list or loop it, explicitly taking time to look at each element individually, while sometimes necessary, isn't elegant either way.

Functional programming languages provide a rich collection of list functions, often making it possible to forego recursion entirely.
Some of these are called higher order functions, which means they take one or more functions as their input.
Some of my favorites that are often absent in the imperative languages I know:
[`map`](https://clojuredocs.org/clojure.core/map),
[`filter`](https://clojuredocs.org/clojure.core/filter),
[`reduce`](https://clojuredocs.org/clojure.core/reduce),
[`apply`](https://clojuredocs.org/clojure.core/apply),
[`partition`](https://clojuredocs.org/clojure.core/partition),
[`take-while`](https://clojuredocs.org/clojure.core/take-while),
[`identity`](https://clojuredocs.org/clojure.core/identity),
[`drop`](https://clojuredocs.org/clojure.core/drop)

## Composition

Since functions in functional programming are pure, at least with regards to global state, they can be readily broken up and composed as necessary.
In my time practicing functional programming, the functions I defined were often just compositions of 5-10 readily available functions with one or two lamdas thrown in.
The prevelance of composition is about as high as in shell scripting, where the pipe enables expressive solutions by composing the utilities of the surrounding environment.
