+++
title = "💻 Automatic Speech Recognition Overview"
date = 2026-09-26
description = "Mouse Button, Handy, VivaDicta, Whisper Large V3, Qwen3 1.7B ASR"
+++

After giving an overview of what I use for search and spending some time optimizing my speech recognition setup,
I would now like to share some of my tools for it.

## History

My history with voice recognition starts somewhere in 2023, where I started dictating a paper for college.
And it really kicked off when I dictated my entire bachelor's thesis in 2024.
Back then I used Whisper with its base model using the following script:

```sh
#!/bin/sh
echo "Recording. Press C-c to stop..."
ffmpeg -hide_banner -nostats -loglevel quiet -y -f alsa -i default "/tmp/audio.wav"
echo "Transcribing audio..."
whisper "/tmp/audio.wav" --model base --fp16 False --output_format txt -o /tmp/transcription
xclip -selection c < /tmp/transcription/audio.txt
echo "DONE! Check your Clipboard"
```

This dictation helped me greatly alleviate my hand pain and finger pain that is still present if I have days where I type a lot.
So for writing anything longer than two or three sentences, I really appreciate the option of dictating it.

## MacOS

What really sparked me to reinvestigate dictation for my workflow now in 2026 was the introduction of a new voice model natively in macOS 27.
This model I tried and used since early Q3 of this year, but I have not stopped there.

## Handy

On windows at work i quickly sought an equivalent and landed on the open source tool [Handy](https://handy.computer/).
This application provides an interface to many easily downloadable voice models, such as [Whisper Large V3](https://huggingface.co/openai/whisper-large-v3), which I now use, and [Qwen3 1.7B ASR](https://handy.computer/), which is also quite decent.
Then, after having used Handy for a while on the Windows PC, I decided to also use it on my Mac, so I can have the same voice model on both systems and align my speech patterns towards the quirks of each option.
On both platforms I have the dictation toggle bound to the forward mouse button.

## iOS

On iOS, I have spent some time looking for a good app for this and landed on [VivaDicta](https://vivadicta.com/).
VivaDicta is a good option because it is free and open source.
It's also convenient to import Voice Memos into it and to export the audio and/or the text from it.
I dictated a first draft of this post with the app on September 19th.

## Voice models

As for voice models, my recommendation leans towards [Qwen3 ASR 1.7B](https://huggingface.co/Qwen/Qwen3-ASR-1.7B) or [Whisper Large V3](https://huggingface.co/openai/whisper-large-v3).
You can use faster models or even the natively built-in models of macOS and Windows,
but if you spend any serious amount of time dictating, this doesn't make much sense.
I should also note that if you are a heavy user of AI tools, most of them have a dictation option built into their UI.

I hope this was interesting and you consider trying out a dictation tool, at least for longer writing sessions.
