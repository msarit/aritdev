---
layout: post
title: Ruby As A Second Language
author: arit
categories: ruby
image: assets/images/secondlang.jpeg
tags: 
comments: false
---

This week’s coding challenge  [in my bootcamp](https://thefirehoseproject.com/)  had my brain all knotted up. I was already fatigued from solving (most of) 32 CodeWars katas, but I was scheduled to discuss said challenge — titled “Image Blur 2” — with my mentor Jeremy. I decided to see if I could make any sense of the challenge, which went as follows:

> **_Using Ruby, transform a grid of ones and zeroes such that any zeroes above, beneath and to the sides of a “1” are turned to “1”s (as depicted in the image below)_**

![](https://miro.medium.com/max/798/1*oB_-cC1FtnWthNXYHtm9Jw.png)

The pink “1s” used to be zeroes (credit: The Firehose Project)

We are currently learning object-oriented programming, so I knew the resulting algorithm would consist of Class and Method definitions. But not even a snippet of a solution would come to me — not that evening, anyhow. So I decided to describe my would-be code in plain English:

> 1. Locate the cells with a value of “1”.  
> 2. Check whether there are rows above, beneath or to the sides of said cell.  
> 3. Check whether the cells adjacent to said cell in these rows have a value of 1.  
> 4. If yes, leave unchanged; if not, change the value of adjacent cells to 1.  
> 
> _Location of cell-in-question: array[row][column]_
> 
> _Cell above: array[row-1][column]_
> 
> _Cell below: array[row+1][column]_
> 
> _Cell on Left: array[row][column-1]_
> 
> _Cell on Right: array[row][column+1]_

The only code-y part of my write-up is the location of an element within the grid (“_array[row][column]_”). I emailed my write-up to Jeremy and called it a night. During our session the next day, Jeremy explained that the challenge consisted of 2 main objectives, and that my “vague” conceptualization had all-but-fulfilled the harder objective (whaa???). We spent the rest of the evening translating my write-up to actual code and creating test-cases to ensure my algorithm’s robustness.

This experience has markedly increased my confidence in approaching algorithms; before now, I believed that **if I wasn’t “thinking in Ruby” from the get, then my work wasn’t really legit**. After all, it is said that native speakers of a language THINK (not just speak) in that language, right? Well, I’m certainly not expert in Ruby (yet!), but I realize that it’s okay — even effective! — to translate from a language that I’m already comfortable with.