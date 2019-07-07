---
layout: post
title: "Mo' Money, Mo' Prob… wait, I mean, More Features, More Learning"
author: arit
categories: projects, learning
image: assets/images/momoney.jpeg
tags: 
---

As I progress through The Firehose Project, I find that most of my organic learning happens when I attempt to go beyond the specifications of the apps we build. My experience with our our Javascript-powered Single Page Application (SPA) project was no different. The app was simple: a Rails-based To-Do List, with individual tasks stored in the database. The goal was to manipulate the Document Object Model (or “DOM”) using jQuery, such that a page reload was unnecessary to display, add and mark tasks as done.

I wanted to add a “delete task” feature, and my ever-encouraging mentor pushed me to configure this functionality myself. I was able to define the action that actually deletes the task from the database:

However, I needed to refresh the SPA to remove the deleted task from the page — which was a no-no, because it side-stepped DOM-manipulation. After several fruitless stackExchange searches 😤, I resorted to adding “**location.reload();**” at the end of my  **_deleteTask_**  function, automatically reloading the page after a task was deleted. A page refresh triggers the following code that fetches all tasks present in the database; since my deleted task no longer existed, it wouldn’t be fetched — effectively “deleting” it from the page:

After reporting my cheating to Jeremy 😞, we spent our next session building my  **deleteTask**  functionality out. Our first step was to see what was happening after the delete action fired, using the debugger feature of Chrome Developer Tools. We discovered that the data that was passed as part of the successful task deletion was  _undefined_. “So what?” you may ask. Well, even though the actual task was gone from the database, we needed a parameter related to said task with which to update its representation in the DOM, so that the deleted task is removed from the page. Upon examining my  **tasks_controller**, we saw that I was not rendering the JSON representation of the deleted task in my destroy method:

This may be a little confusing, returning information on a non-existent task. Think of it this way: your mom asks you to throw some spoilt milk away. 🤢 Afterwards, she asks: “Hey, what was the expiration date on that milk?” This is information you can give her without fetching the discarded milk bottle out of the trash.

After including “**render json: task**” within my destroy method, we re-ran the SPA with debugger. This time, the unique identification number of the deleted task was passed as part of  **_data_**. We then called the “**.remove()**” method on the DOM representation of the deleted task, thereby removing it from the page:

SUCCESS!! Or so we thought. While testing the entire SPA, we discovered that, unless the page was reloaded, we couldn’t delete any tasks we had just added. 😣 It made sense, seeing as a task’s access to the  **_deleteTask_**  function was granted when the app fetched all tasks from the database (which happens during a page refresh),  **but NOT upon task creation**:

![](https://miro.medium.com/max/1396/1*3QoL_PZMK-zBBK8vS4lBTg.png)

To remedy this, we updated the new task action with code that called the  **_deleteTask_**  function when an element with the “**.delete**” class is clicked. Then all was right with the world. 🌍

----------

In my earlier articles, I’ve mentioned my deep concern that I would merely traverse my bootcamp’s material, regurgitating code and apps but not really understanding what was going on. However, those concerns are steadily lessening as I continue to challenge myself past my prescribed projects. I do not take for granted my zeal for going the extra mile, nor do I boast about it. Rather, I’m grateful for the roadblocks that said zeal bumps me into, and the resulting opportunities to learn something properly.