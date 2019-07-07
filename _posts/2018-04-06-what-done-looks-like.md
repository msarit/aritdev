---
layout: post
title: "What 'Done' Looks like: Test-Driven Development"
author: arit
categories: tdd
image: assets/images/tdd.jpeg
tags: featured
comments: false
---

As part of my current project — building an Instagram-like app called “Grammable” — I’m being introduced to the efficient world of Test-Driven Development. We’re using the RSpec gem to run tests on our Rails apps. I like it, I like it a lot. I appreciate being able to test my app’s functionality without reloading my browser a million times (no exaggeration).

Some aspects of the test-writing process have stumped me though. For example, here’s my code testing whether a user who didn’t create a post (known as a ‘gram’) is prevented from editing it:

I use the FactoryBot gem to DRY my code up, instead of repeatedly including the code block to create a gram and/or user. Now, the way I understood the code above was: since the gram’s creator is signing in, why is the test passing, i.e. not allowing ‘user’ to edit the gram? Turns out, there are TWO users created within this test. The ‘factory’ that dictates gram creation associates each gram with a user (its ‘creator’):

However, the ‘user’ defined in my test is completely different, and isn’t associated with the gram that was created. The nuance seems obvious, but imagine having to practice this discernment while working with a codebase thousands of lines long. It makes more sense to choose a variable name (‘diff_user’ in this case) that clues the reader in:

Another sticking point I encountered had to do with my “destroy” action, namely ensuring that the browser returned a 404 error when attempting to delete a non-existent gram:

My initial reasoning was: “Since we are dealing with a non-existent gram, what’s the point of signing a user in?” I was thinking along the lines of “a gram belongs to a user; no gram, so no user”. So I commented out the ‘user’ creation-and-sign-in code and ran my tests again. ️Instead of a 404 Not-Found error, I got a 302 Found  
Redirect response. Redirect? But why? And WHERE? Well, my app was redirecting to the Sign-In page, which was behavior I had configured in my gram controller:  

My gram controller requires users to sign-in before accessing any actions defined therein (including the “destroy” action), and my test was simply confirming this. So I re-added the user creation and sign-in code and all tests passed successfully.

---

I remember sharing with my mentor early-on in my learning: “Jeremy, it’s frightfully tempting to merely reproduce the code being taught to me, without properly grasping why it’s there, what it’s doing, and what happens without it.” The hangups I describe above may seem quite juvenile, but what I value is the approach by which I came across them:  **questioning everything**  (well,  **_almost_**  everything). I aim to become an expert programmer through actually understanding what I’m learning, not memorizing or winging it.