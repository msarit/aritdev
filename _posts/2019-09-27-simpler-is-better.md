---
layout: post
title: Simpler is Better, if it gets the job done
author: arit
categories: technical newbie
image: assets/images/simpler-better.jpg
tags: featured
custom_excerpt: 'Today at work, my teammate reviewed the following code I had written...'
comments: true
---

Today at work, my teammate reviewed the following code I had written:

{% gist a8aa9667832e3d50091e5d388e137ef1 %}

In a nutshell, my `build_page_data` method builds an object called `categories` which contains a number of objects (each one representing a `category`). The variable `@page_data` contains several rows of information where, for one `group_id`, there are several `features`. So, there could be 10 rows each with the same `group_id`, but with a distinct `feature`.

My teammate - let's call him "David" - commented that Lines 7, 8 & 18 confused him and weren't terribly intuitive. I explained to him how the loop on Line 7 checked to see if we'd moved unto a new `group_id` to build a new `category` object, while Line 8 populated the `features` attribute of the last `category` object (after being sure that we'd collected all associated features). Line 18 made sure to populate the last row's `features` attribute (edge case).

Did my explanation bring on a headache for you just now? Because it did for David. He asked me if there was a way to build the data without keeping track of which row I was currently on (i.e. using a pointer). He suggested that:

1. If the `categories` object did not have a hash with the `group_id` of the row I was on, then I could be sure that I was on a new `group_id`
2. As long as the `group_id` didn't change with each iteration, I could simply push the `features` hashes into the features array for that category

{% include tweet-card.html quote="As a #CodeNewbie, I'm learning to challenge myself by asking: Can my code be simpler? What can I do away with and still accomplish my goal?" %}

I went back to <del>the drawing board</del> my IDE and worked on implementing David suggestions. First, in the loop iterating through `@page_data`, I included a guard that made sure that either a category with the current `group_id` existed, or one was created. Next, I pushed the `features` of each row into the features array of their associated category. Finally I returned the completed `categories` object:

{% gist 43549390817935ef860e05c1ac2801af %}

I sat back and marveled at the **simplicity** of my refactored `build_page_data` method! All edge cases were accounted for, and I had cut the size of my method in HALF (from 16 lines to 8)! This experience exemplifies why I'm so grateful for my current role - I am learning at what sometimes feels like an exponential rate, and getting paid while doing so! This refactor brought me such satisfaction, and challenged me to always ask: "Can my code be simpler? What can I do away with and still accomplish my goal?" I'm also grateful for a team that <del>teaches me to fish</del> challenges me to think and grow, rather than simply hand me the answers.