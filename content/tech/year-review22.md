+++
title = "💻 2022 year review"
date = 2022-12-31
description = "Looking back on the past year"
+++

# Looking back on the past year

This year has been my first full year as a CS student.
I've learned a lot and made a ton of progress as a programmer.
I tried many programming languages and learned many tools that will help me in the future.
My linux setup and software selection has been continously refined to where it is now.
I'm proud of my work this year and want to take a few minutes to reflect it.

My top 3 good descisions this year:
1. learning emacs
2. learning git
3. learning clojure

My top 3 mistakes this year:
1. vimwiki / my attempt to go back to neovim
2. coding very little over the summer
3. an overemphasis on tools over competence

## Languages

### Shell
- easy to read, hard to write
- domain specific
- well suited for system task automation and string processing
- very intuitive for experienced linux terminal users

### Prolog
- conditional unification and variable binding are interesting concepts
- swi prolog sucks a bit less than other dialects
- maybe revisit in the future
- book: "logic programming with prolog"

### Lua
- one indexed arrays are cancer
- syntax is meh
- ecosystem is rather small
- hard to justify learning or spending time with
- boring / unenlightening
- löve2d not worth it on it's own

### Java
- massive pain in the ass
- unjustifiable to learn for intellectual progress
- not just unenlightening: it makes you a worse programmer
- oop is the most braindead ideology in programming
- swing just makes things more frustrating

### Go
- simplicity
- almost all basic list utilities missing
- unreasonably hard to juggle data with
- suprisingly vast ecosystem

### Haskell
- good for artificial coding problems/wrangling data
- extremely powerful for lists
- recursion thinking
- higher order funcitons (map, reduce, fold)
- nice syntax (guards, texas ranger, few special characters)
- steep onboarding if you want to make actual programs with it

### Clojure
- new main language
- extremely fast feedback loop
- nice syntax after you get used to it
- good to have cljs to have a browser deployment option
- enough libraries to support every large usecase
- very competent community members
- rich hickey is a great communicator
- very tasteful language design

### Common Lisp
- archaeic function names
- clojure has better ux
- common lisp may still be worth it for vast builtins and native compilation

## Tooling

### Emacs
- org mode is huge
- evil mode is a must
- magit is pretty neat
- prettify symbols mode is nice for math
- emms is a buggy mess
- emacs itself is quite buggy
- don't bother with gnu emacs
- emacs is slow
- emacs is not a replacement for a windowmanager + terminal applications
- emacs native comp greatly mitigates performance problems

### Git
- rebases
- tags, stashes
- multiple remotes
- pr-review-release workflow
- writing good release notes

### Dotfiles
- two git remotes
- semantic commits
- refining software selection
- pkgbuild as an install script
- literate config
- advanced bootstrapping
- more zsh functions

### Latex
- beautiful for papers
- hard to get a good org+latex setup up and running
- bad syntax by default. Solution: org-mode + latex
- good bibliography management and citations

### Zola
- timestamped posts list
- decent landing page
- decent css
- migrated old posts
- templating is neat
- simple deployment
- rss feed

### Others
- ffmpeg
- imagemagick
- sourcehut

## Projects

### Lead ani-cli (shell)
- people will contribute if you make it easy
- issue tags are a must have
- learning git is worth it
- shellcheck is nice
- shell is 3x as hard to write as python and 10x as hard to read
- removing features is harder than adding them
- semantic commits!
- managing outages

### Kicklistbot2 (clojure)
- leiningen
- clj-http, cheshire
- first application of clojures awesome data processing
  
### Dvd Animation (clojure)
- collisions can be tough
- functional state management via elm architecture
- first contact with cljs
- made a video tutorial series with it

### Redqu (clojure)
- never climb the tree when you can shoot down the apple
- reddit rss is counterintuitively easier to parse than json
- nix-clj has bad ux and doesn't really work + has huge build times
- standard clj build tools
- distributing clojure is a pain due to lack of native binaries
