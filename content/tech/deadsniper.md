+++
title = "💻 I coded my own dead link checker"
date = 2024-08-27
description = "Go is an acquired taste"
+++

*Go is an acquired taste*

## Foreshadowing

As foreshadowed in my post explaining [my blogging setup](https://port19.xyz/tech/blog/#quality-assurance), I always wanted a faster dead link checker to run on my evergrowing website.
My [dislike for go](https://port19.xyz/tech/go-review/) made me procrastinate on this project for quite a while.
Then, last Friday I finally had some motivation to code some go and ended up writing the v1.0 of my own dead link checker in about two hours.
Some async bug fixes and feature additions later and it now sits at v1.4, ~170LoC and is available as a github action as well.
I estimate that I now spent ~10h total on it.

## Go Review Revised

I must say that go as a language to me feels similar to php in the sense that I dislike its lack of elegance, but can't resist it for its incredible deployment path. Nothing easier than `scp`-ing an `index.php` and nothing easier than uploading a statically linked go binary to github releases.

The concurrency model and error handling are pretty neat, as is the tooling.

One thing that still bugs me is that go has no list membership function, so I have to code my own like this:

```go
func contains(slice []int, item int) bool {
	for _, v := range slice {
		if v == item {
			return true
		}
	}
	return false
}
```

But at least I can amuse myself by doing [argument parsing with gotos](https://github.com/port19x/deadsniper/blob/ce6d506bd4f9fa2f2f3c2513eb109ba81e5e5bb3/main.go#L107-L124), among other affronts to the clean-code crowd.

## Deadsniper

If you're in the market for a dead link checker to min-max your website quality please do check out [deadsniper](https://github.com/port19x/deadsniper), you'll like it.
I also consider the code to be well written and commented overall, so if you want to see an example of goroutines in action, there are worse codebases than mine to investigate.

As a final sales pitch, check out this help text:

```
Usage: deadsniper [options] <link to sitemap.xml>

Options:
  -h | --help    print this help text
  -V | --version print the version number
  -s | --strict  allow only HTTP 200 response codes
  -t | --timeout set the request timeout in seconds (default 5)

Examples:
  deadsniper https://port19.xyz/sitemap.xml
  deadsniper -V
  deadsniper --strict https://port19.xyz/sitemap.xml
  deadsniper -t 1 -s https://port19.xyz/sitemap.xml
```