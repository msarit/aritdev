---
layout: post
title: "Forem Issue Walkthrough"
author: arit
categories: newbie growth team
image: assets/images/walkthru.jpg
image_credit: 'Photo by <a href="https://unsplash.com/@anniespratt">Annie Spratt</a> on Unsplash'
tags: featured
custom_excerpt: 'I created a walkthrough video that shows my troubleshooting process when tackling coding issues at work.'
comments: true
---

I learned a lot from working on a [Forem issue](https://github.com/forem/forem/issues/10061), where comments containing Comment Liquid Tags were rendered invalid if the tagged comment was later deleted.

Yes. That was a mouthful.

I created a [walkthrough video](https://www.loom.com/share/78abdc62f7624a54b578e12466046c6e) sharing my troubleshooting process. If you would rather read, I have reproduced my process below the video image. 😊

---

[![Image of Video](https://dev-to-uploads.s3.amazonaws.com/i/nedv11akpe58hf69f27y.png)](https://www.loom.com/share/78abdc62f7624a54b578e12466046c6e)

---

Say _**Arit**_ creates a comment, and then _**Bene**_ creates their comment and includes a Liquid Tag to Arit's comment:

![Comment By Arit](https://dev-to-uploads.s3.amazonaws.com/i/uv7w2uu4wyi04hd9p2zr.png)

![Comment By Bene](https://dev-to-uploads.s3.amazonaws.com/i/qsmnsu0r8qu9582jqk43.png)

![Bene Comment with Liquid Tag to Arit Comment](https://dev-to-uploads.s3.amazonaws.com/i/dpd2yzpicx76dc3mm6v4.png)

Next, Arit deletes her comment. When Bene goes to edit her comment containing the tag to Arit's now-deleted comment, she sees an error message. Also, the permalink to Bene's comment 404's.

![Arit Deletes Comment](https://dev-to-uploads.s3.amazonaws.com/i/l9s1kstpa2k2tnwrixah.png)

![Bene Edits Comment](https://dev-to-uploads.s3.amazonaws.com/i/nj0lum6c5gjsbogqtobk.png)

![Bene Comment Error](https://dev-to-uploads.s3.amazonaws.com/i/7uxt9hc1l2kgf41pwdsm.png)

![Bene Comment 404s](https://dev-to-uploads.s3.amazonaws.com/i/j7b8ugm658l8k0dlb5ge.png)

---

Looking in [the code](https://github.com/forem/forem), the `app > liquid_tags > comment_tag.rb` file initializes and renders the tagged comment. The `app > views > comments > _liquid.html.erb` file is the actual tagged-comment view.

Looking at the `find_comment` method in `comment_tag.rb`, we see that the error message raised by the exception matches what we see in the application:

{% highlight ruby linenos %}
def find_comment(id_code)
   Comment.find(id_code.to_i(26))
rescue ActiveRecord::RecordNotFound
   raise StandardError, "Invalid comment ID or comment does not exist"
end
{% endhighlight %}

Intuitively, I felt like a good solution would be to return a message like "Comment Not Found" within the Liquid Tag, while leaving the enclosing comment intact. But I was not sure how to bypass the error exception in order to accomplish this.

After a short tete-a-tete with my teammate [Rhymes](https://dev.to/rhymes) (🙏🏾), I learned a [key difference](https://dev.to/rhymes) between the `.find` and `.find_by` methods: if the record is not found, `.find` always raises an exception while `.find_by` returns `nil`.

By calling `.find_by`, I could then render different views in `_liquid.html.erb`, depending on whether the local `comment` variable (passed into the `render` method) existed.

{% highlight ruby linenos %}
def find_comment(id_code)
   Comment.find_by(id_code.to_i(26))
end
{% endhighlight %}

{% highlight ruby linenos %}
<div class="liquid-comment">
  <% if comment %>
    <div class="details">
      <a href="/<%= comment.user.username %>">
      ...
      ...
  <% else %>
    <div class="body">
      <p>Comment Not Found</p>
    </div>
  <% end %>
</div>
{% endhighlight %}

But when I tested my implementation, I got another error:

{% highlight text %}
Unsupported argument type: 53 (Integer)
{% endhighlight %}

The only code I changed that accepts an argument was the `find_comment` method. I realized that `.find_by` requires me to specify which attribute to search by. Furthermore, the `Comment.id_code` attribute is a string, not an integer. So I made the appropriate corrections:

{% highlight ruby linenos %}
 def find_comment(id_code)
    Comment.find_by(id_code: id_code)
 end
{% endhighlight %}

Testing my local application, everything worked as expected :tada::

![It's Working](https://dev-to-uploads.s3.amazonaws.com/i/fvz1sfrsbb015yuy8mu5.png)

---

Figuring out how to solve a certain coding problem is sometimes akin to detective work. 🔎 You use the clues provided in the codebase (or by other devs) to figure out what needs to be changed, and where.

I hope this was helpful to someone. 😄 Thanks for reading/watching!