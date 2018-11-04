---
layout: page
title: "Introduction"
slug: "/introduction"
date: "2018"
description: "A definition of terms, history, and use cases of Deep Learning"

---

## Who This Is For

This is a book for Javascript Developers interested in Deep Learning.

I assume you're familiar with Javascript - or at least confident enough to fake your way through it.

We're going to spend a majority of the time discussing Deep Learning concepts, and very little time if any explaining Javascript-specific concepts. For resources to help with learning Javascript, see the Appendix.

We're also going to be focused solely on applications of Deep Learning in Javascript. There is a rich and deep field of study, much of which unfortunately falls outside the scope of this book. My hope is that the next few chapters can serve as your first stop on a long path of self-study and learning.

## What is Deep Learning

Let's start with some definitions so we're on the same page.

### Sub heading

**Machine Learning** is the practice of teaching computers to make predictions. This can encompass a wide array of use cases, such as: what is the expected price of this house? Is this a picture of a dog or a cat? Will this stock price go up or down, and by how much?

**Deep Learning** is a subset of Machine Learning. The "Deep" part refers to the architecture of the network, specifically that it has many layers (it is "deep").

Machine Learning, when used in contrast to Deep Learning, can also be shorthand for traditional statistical methods - things like k-means, random forests, etc. - in contrast to more recent Deep Learning methods.

You'll often hear **Artificial Intelligence** bandied about as well. This is a broad term and, when used in a sentence, can refer to anything from Logistic Regression to Skynet presaging the extermination of humanity.

![](https://imgs.xkcd.com/comics/skynet.png)

*For the duration of this book I’ll stick to “Deep Learning” to make clear we're focused on building neural nets with deep layers*.

---

Deep Learning has a long history. The guy who originally invented it thought that all computers would program themselves. The reality is considerably more mundane. AI Winters.

Today, Deep Learning is a hot topic, both in academia and industry. It moves quickly. At the same time, there are lots of examples of deeps acting badly.

You may have encountered Deep Learning in use on your phone, predicting which words you're likely to type next, or prompting you to tag your friends it predicts are in a photo. Less visibly, deep learning is likely monitoring your inbox for spam (and also monitoring you for spam!) More broadly, an autonomous agent might use it to decide which move to make next in a game of Go. Or a self-driving car might use it to decide whether to speed up or slow down. Hedge funds use it to predict what
to buy, stores use it to forecast demand. Magazines and newspapers use it to automatically generate summaries of sports games. It is used to understand your speech in your home assistant.

More worringly, deep learning is increasingly used for military and authoritatian purposes. Recently, China was able to pick a dissident out of a crowd of 40,000.

New technologies often have the capacity to be used for good or evil. My hope is that by introducing this technology to you, you will go on to be one of the good ones. Javascript helps expand the pool of people able to participate.

## Deep Learning & Javascript

Deep Learning has a rich and storied history in a wide variety of languages. Javascript is not one of them.

That's beginning to change. The experience of writing Javascript has improved mightily in the past few years, and has seen substantial investment from browser makers as a runtime. When it comes to speed, Node.js is a viable contender to Python on the Server. New research techniques have made it possible to leverage powerful techniques in the browser without powerful hardware.

Still, it is undoubtedly early days for Deep Learning in Javascript. There's a number of reasons I believe Javascript promises to be a great environment for Deep Learning.

> "Any application that can be written in JavaScript, will eventually be written in JavaScript." <footer class="blockquote-footer">&mdash; Jeff Atwood, Cofounder of StackOverflow</footer>

1. Javascript is ubiquitous. Every computer and phone running a browser is capable of running Javascript. It has the largest installed runtime of any language in the world. You can open your browser console, right now, and begin building a neural network without having to install any software. And as an educational tool, there's nothing better than the language you already know.

2. Javascript can enable rich interactions. These can create powerful feedback mechanisms and tools. No round trips to the server.

3. running in the browser or phone, Javascript also has direct access to device sensors, enabling real time reading of things like accelerometers and GPS. Even webcam data.

4. perhaps the most compelling reason is privacy. With Javascript, data never has to leave your device. All the computation happens locally. Not only is this a selling point for consumers, I believe this can be compelling to companies as well, looking to avoid the liability of being responsible for customer data touching their servers.

I would be remiss if I did not note the obvious downsides that come with Deep Learning in Javascript. You won't be processing petabytes of data in your browser anytime soon. Most consumer grade computers lack the massive GPUs that large tech companies use to perform cutting edge research. And despite the wonders of the `npm` bazaar, Javascript's ecosystem still lags behind when it comes to scientific and mathematical tools common in languages like Python.

However, if there's one thing I know about Javascript, it's that change is constant, and it's hard to imagine these will be problems years from now.


## Organization

Each section will feature one or two datasets, generally becoming more complex.

Ready to take the next step? [Let's start with the basics](/basics).

We'll be using Tensorflow.js throughout this book.

# Talk stuff

What is machine learning
