+++
title = "💻 X86 vs M4 Mac Mini Benchmarks"
date = 2025-05-23
description = "Justifying my upgrade"
+++

I'm too lazy to write a large introductory paragraph, so take a look at the [X86 PC Part List](https://pcpartpicker.com/list/MdvgQd) and head straight to the benchmarks.

## Benchmarks

### Power

- Idle: 55W vs 5W
- Youtube 1080p: 75W vs 5W
- [Speedometer 3.1](https://browserbench.org/Speedometer3.1/) Brave: 110W peak vs 15W peak
- Super Mario Sunshine 4K: 120W-130W vs 18-24W
- XCOM 2 4K Minimal Menu: 200W vs 30W
- Peak: 275W in Overwatch 2 vs 36W compiling Emacs

### Performance

- [Speedometer 3.1](https://browserbench.org/Speedometer3.1/) Brave: 23.6 vs 48.9
- XCOM 2 4K Minimal Menu: 40FPS vs 15FPS
- [Emacs Lisp Benchmark](https://github.com/enzuru/native-comp-elisp-benchmarks#submit-your-own) Default GC Threshold: [30.95s](https://github.com/enzuru/native-comp-elisp-benchmarks/blob/master/cpu/intel-i3-14100F.org#results-with-default-gc-cons-threshold) vs [20.65s](https://github.com/enzuru/native-comp-elisp-benchmarks/blob/master/cpu/apple-m4.org#results-with-default-gc-cons-threshold)
- [Emacs Lisp Benchmark](https://github.com/enzuru/native-comp-elisp-benchmarks#submit-your-own) Comp 8MB GC Threshold: [20.87s](https://github.com/enzuru/native-comp-elisp-benchmarks/blob/master/cpu/intel-i3-14100F.org#results) vs [16.01s](https://github.com/enzuru/native-comp-elisp-benchmarks/blob/master/cpu/apple-m4.org#results)

## Amortisation

With my current electricity contract, I pay a little over 1€ per 3KWh.
Being mostly at home right now I use about 500Wh more power per day with the X86 PC than the M4.
This can accumulate with just 10 hours doing light PC work, 5 hours playing Gamecube at 4k or most often a combination of the two.
500Wh * 30 = 15 KWh = 5€ per month

The M4 Mac Mini cost 600€.
Given local used market pricing and liquidity, I can easily sell my X86 PC for 300€.
This gives a 300€ adjusted upgrade price.
Since 5\*12 = 60 and 60\*5 = 300, it would take five years for this upgrade to completely pay for itself.

Given my track record with computers its highly unlikely that I will actually keep the M4 Mac Mini for 5 years, but I feel like its still important to point out that the reduced electricity cost slowly amortises my upgrade and slowly decreases the adjusted upgrade cost towards zero.
Disregarding the excellent resell value of Apple Hardware, consider the following alternative outcomes:
- I upgrade in 1 year, leading to 240 euro adjusted cost / 12 months = 20 Euro a month
- I upgrade in 2 years, leading to 180 euro adjusted cost / 24 months = 7.5 Euro a month
- I upgrade in 3 years, leading to 120 euro adjusted cost / 36 months = 3.33 Euro a month
- I upgrade in 4 years, leading to 60 euro adjusted cost / 48 months = 1.25 Euro a month

## Apple Synergy

In the meantime, I'll enjoy the synergy this M4 Mac Mini has with my Iphone and, to a lesser extent, my Apple Watch.
The biggest pain on linux has always been transferring files from my phone to my pc and the reverse.
This is made trivial by iCloud, or alternatively by Airdrop.
The productivity trio of Calendar, Notes and Reminders also works better when available on both PC and Phone.

I will of course continue to miss sensible placements of special characters and my middle click paste, but in terms of gaming, the linux/windows exclusive parts of my steam library are played through and retro gaming works just as well on mac os nowadays.
Programming is also marginally worse on Mac, but I'm not sinking massive amounts of time into programming these days anyway.
