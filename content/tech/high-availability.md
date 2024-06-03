+++
title = "💻 High Availability"
date = 2024-06-03
description = "How many nines do you need?"
+++

# How many nines do you need?

I consider myself to be a linux admin, or devops engineer as the kids say, so the goal of [high availability](https://en.wikipedia.org/wiki/High_availability) is one without which I'd be much less optimistic about my career. I want to put out this article to take a step back and cover in broad strokes what level of availability you may want to aspire towards and what measures you can take to achieve it.

## First Nine - 90%

*9 days downtime per quarter*

Not cracking the first nine is bad, even for hobby projects. To dip below the first nine, you need to ban the term "best practice" from your vocabulary, make pervasive use of all available hipster technology and abstain from any monitoring of any kind. The only way for you to dip below 90% availability that I can empathise with is if you run your server at home in a country with bad internet, like Germany.

If you follow your intuition and just throw your binary at a random VPS host, you'll get the first nine.
And even in the event of an outage, you can take a day off before addressing it without adverse effect.

## Second Nine - 99%

*22 hours downtime per quarter*

To get the second nine I recommend you sign up for some free uptime monitoring service like [uptimerobot](https://uptimerobot.com/) and configure it to send you email notifications on downtime. I'd say this level is perfectly appropriate for small personal projects or early public projects in the "move fast and break things" phase. \
Bonus points for using version control and doing a recovery test every so often.

## Third Nine - 99.9%

*131 minutes downtime per quarter*

At this point you *need* monitoring, ideally a little more than just third party uptime monitoring. You need to configure the monitoring software to wake you up at night if the server fails, or alternatively have some primitive failover mechanism that kicks in automatically. Such a failover mechanism could be an [active-passive](https://developers.cloudflare.com/load-balancing/load-balancers/common-configurations/) setup behind a reverse proxy, where you have another instance of your application running all the time ready to take over. This is also a good point to stop rolling out updates on a Friday afternoon and to establish some holistic testing procedure.

## Fourth Nine - 99.99%

*13 minutes downtime per quarter*

Kubernetes! DevOps! Cloud! Congratulations, you're now the target audience for many shiny new things and evidently have enough of a business to throw some money at people like me. At this point your product needs to have reached some level of maturity and the infrastructure people need to put failover mechanisms into place that catch every common and expectable failure mode.

This is also getting into ghost hunting territory, as even moderately complex systems can have hard to predict failure conditions and the relatively short time for recovery means that one regular outage, even if handled to the standards of a fortune 500 tech firm, can ruin your availability stat for the year.

Maybe Kubernetes is the answer, maybe not. Add me to any team of software devs and I'll get you that third nine, but for the fourth you'll have to get me some colleagues. With a bit of luck, we'll figure it out.

## Mythical Fifth Nine

*79 seconds downtime per quarter*

If the fourth nine requires hiring a couple of people, the fifth and beyond require hiring dozens, plus some very favourable conditions and/or luck. Even a product like [Google Calendar](https://www.theverge.com/2019/6/18/18683625/google-calendar-down-worldwide-outage-404-error), [Reddit](https://www.macrumors.com/2024/04/25/reddit-is-down-on-iphone-and-web/) or [Discord](https://techcrunch.com/2024/03/05/discord-is-down-for-some-users/?guccounter=1) can be down for about an hour, easily ruining the fifth nine for a decade.

## Before The First Nine

Make backups of your code. A git repository is sufficient for that, so you're probably good already.
If you offer a stateful service, make regular backups of the application state, e.g. the customer data.
This is why people are so conservative when it comes to storage: an outage is an inconvenience, loss of data is a company killer.

I hope this was a nice read and I got someone motivated to at least slap uptimerobot onto their blog.
Maybe in a few years I'll have some snake oil to sell that promises that next nine, but for now this will do.
