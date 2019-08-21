---
layout: post
title: (Don't) Always Trust Your Inner Critic
author: arit
categories: growth
image: assets/images/inner-critic.jpg
tags: featured
comments: true
---

I am six months into my first dev job, and have had some time to reflect on my experience so far. I don't think I have ever been this in-tune with and plugged-in to a job; I think it is due to the very deliberate way I pivoted into my Software Engineering career. 😂

In particular, **my inner dialogue while at work has changed significantly**. When I started my job, I interpreted everything - every comment, every critique, every code review, every grimace at my code, EVERYTHING - as an indictment on my programming abilities. I came away from every code review with the refrain: "I need to get better, or they will not keep me", or "I'm never going to learn enough to be considered good at my job". It got so bad that if my manager, or the project lead, began walking towards my desk, I would think, "Uh-oh, my code must be wrong; I've made a mistake again; I've broken staging" and on and on...

However, most of these moments when my code was scrutinized were not because my code was "wrong". Instead, each moment tended to fall into one of the following buckets:

1. The project's specs were failing because my code - while right - was conflicting with another code block somewhere. Scenarios like these have led me to become more familiar with our codebases, and to always think in terms of how I can re-use and/or improve existing code.

2. The build test on my pull-request wasn't passing, or the code coverage was below threshold because I hadn't written tests for all functionality that I had added.

3. The method names I had chosen were not aligned with some naming conventions closely enough, or they just weren't clear enough to the code reviewer

4. There was one project where I was tasked to write specs for a large method. I was unaware that the team was expected to abstract away any component of that method that we were testing. So I wrote my test in the context of that larger method. When the reviewer sent my pull-request back as "wrong", instead of internalizing the word "wrong", I went over, defended the correctness of my test, and then discovered about the abstracting we were doing. I felt empowered after this incident; for the first time, I didn't cower in self-judgement.

When I graduated bootcamp, I thought that the hardest part of my first dev job would be directly related to coding - learning, making mistakes, being corrected, learning again. However, the most challenging part has been overcoming my  negative self-talk and not projecting those emotions unto my teammates, making them "guilty" for "not supporting" me and my learning. I have become much better at not taking feedback and scrutiny personally. I am learning to speak up and defend coding decisions that I have made, even if I ultimately change what I coded. And I have finally started owning the truth that I AM a Software Engineer, and a damn good one too!

{% include tweet-card.html quote="As #CodeNewbies, let us silence negative self-talk and see feedback on our code for what it is: information we can use to become even better!" %}

I encourage anyone with the same struggles that I have discussed above: give voice to your internal dialogue and be willing to ask yourself why you are having those thoughts or drawing those conclusions. Look critically at the feedback you are receiving - does it really conclude with your 'ineptitude'? Or merely suggesting tweaks to your approach? Maybe that person just doesn't understand your code - not that your code is non-sensical? I think it is helpful to remind ourselves: **Don't take it personal - at least, at first**. This reminder can help us to step out of our negative self-talk and see feedback on our code for what it is: information we can use to become even better.

