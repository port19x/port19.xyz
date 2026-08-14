+++
title = "💻 Claude for Code Review in Github Actions"
date = 2026-08-14
description = "learnings from ani-cli v5"
+++

AI somehow got good at code, but other than writing it, it can also review it now.
In this post, I will show you how you can integrate Claude into your project with GitHub Actions to review pull requests.

90% of my AI usage during the development of [ani-cli v5](https://github.com/pystardust/ani-cli/releases/tag/v5.0) was getting Claude to review the current state of the v5 branch and nitpick small problems. I would say that around 60-70% of the raised issues were false positives, but the remaining 30-40% were actually valuable nitpicks that prevented some real issues, sped up the development and made me ship faster with greater confidence.

Afterwards, I had the idea that you could theoretically have Claude review each pull request automatically, and do so in a way that is tailored to the needs of ani-cli.
I abandoned that idea, not because it is unfeasible, but because AI companies are very unreliable and I don't want to commit to paying my Claude subscription long-term for a CI enhancement that my fellow maintainers are unenthusiastic about at best.

The basic premise is using the [official GitHub Action](https://github.com/anthropics/claude-code-action) by Anthropic and adding a personal OAUTH token to the repository secrets.
This sidesteps the issue of not having full ownership permissions, which would be necessary for installing Claude or other AI agents as an app.
Then the main work is tweaking a prompt and finding the right model to use.

## Prompt

[Link to workflow file](https://github.com/port19x/ani-cli/blob/master/.github/workflows/claude-review.yml)

The prompt that I settled on:

```
REPO: ${{ github.repository }}
PR NUMBER: ${{ github.event.pull_request.number }}

Review this shell script change. ani-cli is POSIX-sh: no bashisms,
no awk, no wget. Base version at ./ani-cli, PR version at
pr-head/ani-cli. Only post comments, never edit files.

Gather first: `gh pr diff`, plus, if ani-cli changed, verbatim

    shellcheck -s sh -o all -e 2250 pr-head/ani-cli
    shfmt -i 4 -ci -d pr-head/ani-cli

Then produce exactly two things, in this order.

1. One top-level `gh pr comment`, always, even when both linters
are clean. The only place prose belongs. What the change does,
whether the approach holds up, any logic, portability or security
concern the linters cannot see, plus the version verdict below.
Under 150 words, no headings, no recap of the inline comments.
Never mention your own tooling, environment or limitations in any
comment. If the linter output is missing, review the diff and say
nothing about it.

2. One inline comment per linter finding, prose-free. The body is
one line plus a ```suggestion fence holding the minimal fix,
nothing else. For shellcheck that line is a markdown link to
https://www.shellcheck.net/wiki/SC0000 titled with the code; for
shfmt it is the literal `shfmt -i 4 -ci`, including the backticks.
The fence replaces exactly the lines you anchor to, closing braces
included, so count both before posting. Never post a comment
correcting an earlier one; drop the fence if unsure.

Version verdict: if ani-cli changed and `version_number="X.Y.Z"` is
unchanged or lower than base, say so and give the base patch number
incremented by one. Never judge minor or major. If it already
increased, say nothing.
```

## Examples

In order to test the viability of Claude as a reviewer, I opened one good pull request and one bad pull request.
While the bad pull request could get away with Opus 5 medium, the good one benefited a good deal from Opus 5 extra.
Check them out yourself:
- [Opus 5 medium Bad](https://github.com/port19x/ani-cli/pull/9)
- [Opus 5 medium Good](https://github.com/port19x/ani-cli/pull/10)
- [Opus 5 extra Bad](https://github.com/port19x/ani-cli/pull/18)
- [Opus 5 extra Good](https://github.com/port19x/ani-cli/pull/17)

I should note that Sonnet 5 and Haiku 4.5 both failed at posting github comments, they were too stupid to use the MCP.

## Conclusion

If you have an open source project with actual outside contributors, and you are paying for an AI subscription, you'll benefit from a setup like this.
It will speed up your review process and make contributing easier for outsiders and inexperienced developers.
Keep in mind that AI, as good as it is currently, still lacks good judgement and taste, so you'll need to be aware of the false positives that will inevitably crop up.
Overall, if you like AI, I think this is one good way to integrate it.

*While this post is about AI, it was entirely written and edited by me. The only tool that’s technically AI that was involved in the process is MacOS 27 dictation. AI as a field is developing at an incredible pace, so if this post is more than a year old treat it as a historical artifact.*
