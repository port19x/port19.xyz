+++
title = "💻 How to auto-align your claude usage windows"
date = 2026-08-14
description = "stretch your weekly limit further"
+++

I've been using Claude for three weeks now, and want to share a small but impactful lifehack for getting more usage out of the weekly limit by aligning your five-hour usage windows to your actual daily schedule.
The basic premise is that Claude supports scheduled tasks. In Claude code and since sometime this week also in the regular Claude chat.

## How To

What you do is you go ahead and you make a [scheduled task](https://code.claude.com/docs/en/scheduled-tasks) that uses the cheapest model available, currently Haiku 4.5, and that runs once every five or so hours in my case I use 5 AM, 10 AM, 3 PM and 8 PM. Then you give it a very short prompt to keep token use minimal and then it should work.
The effect is that now if you sign into Claude and send your first message at 8 AM, you will have your first reset 2 hours later at 10 AM rather than having to wait all the way until 1 PM to continue your work if you happen to lean on the AI a little more heavily or have tasks that eat up tokens for one reason or another.
With the Claude weekly limit being roughly 10 to 15 five-hour usage windows, this has helped me to make the most out of the AI that I pay for, and already came in clutch a couple of times.
Keep in mind time zones!

## Copy Pasta

Prompt: `are you awake? If yes, say "good morning"`\
[CEST](https://en.wikipedia.org/wiki/Central_European_Summer_Time) cron expression: `0 3,8,13,18 * * *`

## Effort Cost

While we are on the point of optimizing Claude usage, I would also like to share my mental model regarding cost of Opus 5 and Sonnet 5 at different effort levels.
Normalized to Sonnet 5 medium being 1 consult the following table:

| Effort | Sonnet 5 | Opus 5 |
|--------|----------|--------|
| low    | 0.5      | 1      |
| medium | 1        | 2      |
| high   | 2        | 4      |
| extra  | 3        | 6      |
| max    | 5        | 10     |

*While this post is about AI, it was entirely written and edited by me. The only tool that’s technically AI that was involved in the process is MacOS 27 dictation.
AI as a field is developing at an incredible pace, so if this post is more than a year old treat it as a historical artifact.*
