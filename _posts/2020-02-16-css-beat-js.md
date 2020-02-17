---
layout: post
title: When CSS beat Javascript
author: arit
categories: newbie technical
image: assets/images/css-beat-js.jpg
tags: featured
custom_excerpt: "As a bootcamp-educated developer, I would always feel the pressure to quickly level up to the 'higher' programming languages, and 'graduate' from HTML and CSS."
comments: true
---

My team was building out several React components for the front-end of what would be a highly-trafficked app. One of these components required that if the page's subtitle was longer than 70 characters, we inserted a break at the 70-character point, for the sentence to continue on a new line. Checking the database that supplied the app's data, we determined that no subtitle was longer than 140 characters. So we'd probably need to break subtitles only once.

Another dev had created the subtitle component, and I was tasked with adding another feature to it. I opened the file and saw this function for fulfilling the subtitle's 70-character width requirement:

{% gist 5d3ff91517fffbf3c0e4da7f6f3b261b %}

It took me several minutes to understand what the function was doing:
- First the sentence (***`string`***) is split into an array of its words (***`tokens`***), and a counter `i` is initialized to 1.
- Next, accounting for spacing, we add the lengths of each word in ***`tokens`*** together. With each addition, we check if the total is less than 70; if so, we add the length of the next word to our total.
- The goal is to identify the word before which the sentence is at or just below 70 characters (indicated by the incrementing `i` value), and then break the sentence at that word (this is what the `return` line does).

The approach was effective - it met task requirements. **But could it be simpler?**

I thought so, and googled "limit sentence length to number of characters html css". I discovered the `ch` property, one of several font-relative CSS units. `1ch` is equal to the width of the zero ('0') character of the current font-family, at the current font-size. It is important to note that the `ch` value will change for different font-families. But considering that my team follows very strict typography standards, I wasn't worried about this potential variation in the `ch` value.

I set the maximum width of the subtitle's container equal to `70ch`:

{% gist 008bf63baaac95ff5af6d299a099f24d %}

It was very satisfying to have my fellow devs review and embrace my implementation as the simpler approach indeed.

<hr />

As a bootcamp-educated developer, I would always feel the pressure to quickly level up to the 'higher' programming languages, and 'graduate' from HTML and CSS. With more experience, however, I'm finding that it is not about how bloated my developer tool belt is. It always comes back to: Can I solve this problem/implement this feature? How will I do it? How simple is it? How understandable? How maintainable?

{% include tweet-card.html quote="It's not about how bloated our developer tool belts are. It always comes back to: How can I solve this problem? How simple is my implementation? How understandable? How maintainable?" %}