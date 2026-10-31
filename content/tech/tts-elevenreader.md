+++
title = "💻 Overview of TTS and Elevenreader"
date = 2026-10-31
description = "As speech is easier than typing, listening is easier than reading"
+++

*As speech is easier than typing, listening is easier than reading*

- [Artificial Analysis TTS Leaderboard](https://artificialanalysis.ai/text-to-speech/models)
- [ElevenReader Ultra referral link](https://elevenreader.io/referral/DpElTEHX)
- [Read aloud TTS web extension](https://chromewebstore.google.com/detail/read-aloud-tts-text-to-sp/npdkkcjlmhcnnaoobfdjndibfkkhhdfn)

## The Core Problem

The core problem with text-to-speech is that it has to transform the low fidelity medium that is text into the high fidelity medium that is speech in audio.
Hence, scaling is similar to how an image classifier is extremely easy to run, but image diffusion is pretty hard to run.
So while there are great results to be had in dictation on local machines of even very modest power, text-to-speech has steeper requirements.

What makes the whole thing worse is that text-to-speech has to be well integrated.
Dictation can be an extension to the microphone.
From a logical perspective, it's mostly just an input device, while a good reader that makes a text-to-speech model useful needs to integrate in many different places to earn its keep.
That could be in the browser via a web extension, in the file system as some kind of layer with which you can open epubs or pdf files in a specialized application.
Or it could be on the operating system such that you can highlight some text and have it read aloud.
Or it can be for audiobooks.

In any case, it is clear that it is vastly more effort from a user interface design perspective to design a good text-to-speech experience than it is to design a good speech-to-text experience.

## Local Options

If you want to use local models anyway, you have different options.
The most widely integrated is Kokoro, which is a pretty small language model and somewhat sufficient for English.
If you want to use a different language model, you probably can, but in that case, you either have to use the vibe coded wrapper of someone else or have to have your own agent write something for you.
The built-in voices in Windows and MacOS are painful to listen to, even in english, so don't even bother for the foreseeable future, though I expect this to get better long term.

There is also a middle ground where I know that Microsoft Edge supports some cloud voice models and there are some free extensions which also offer them.
I've linked such an extension at the top.

## ElevenReader

Within the field of text-to-speech and, to a lesser degree, speech-to-text, ElevenLabs has been the dominant AI lab for several years at this point and is the benchmark that everything else is compared against.
It is, as of writing right now, by far the best option in terms of quality.

Now, ElevenLabs offers a consumer product called ElevenReader, which supports several different integrations.
One being a web extension that I have successfully tried with blog posts, another being their built-in ebook store with many free options and then you also have the option of uploading your own file with support for pdf, epub and txt by default.

As for pricing there is a generous free tier that gives you 10 hours of generated audio per month, not counting any of the freely available ebooks or ebooks you have purchased.
If you upgrade you can pay 11 USD a month and will get 24 hours of generated audio per day meaning, outside of hoarding, you will never run out of usage.
This paid option also unlocks some additional free ebooks as well as giving you the option to download both ebooks as well as self-generated audio.
This way you can listen to it on your phone on the go.
However these downloads are still in app and not a portable file format.
I like the builtin voice "Brian".

## Conclusion

I haven now listened to a blog posts, a german newspaper article and a [whole play](https://elevenreader.io/audiobooks/pygmalion-audiobook/C3dW4amPdEb8goUehV1W).
I've listened to the play on a little night hike along the local river that I just returned from, pretty cool.
For me, the search for a good TTS is finished, I'm using ElevenReader in the Browser and on iOS, and will happily pay for it.

[Happy Halloween](https://elevenreader.io/audiobooks/frankenstein-audiobook/q8SnK4V9NhKxJuZwF73S)
