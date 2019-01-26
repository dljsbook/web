---
layout: book
title: "Introduction"
slug: "/introduction"
date: "2018"
description: "A definition of terms, history, and use cases of Deep Learning"

---

https://www.technologyreview.com/s/612404/is-this-ai-we-drew-you-a-flowchart-to-work-it-out/

> Machine learning to determine when someone is talking, or when someone is typing

## Who This Is For

This is a book for Javascript Developers interested in Deep Learning.

I assume you're familiar with Javascript - or at least confident enough to fake your way through it.

We're going to spend a majority of the time discussing Deep Learning concepts, and very little time if any explaining Javascript-specific concepts. For resources to help with learning Javascript, see the Appendix.

We're also going to be focused solely on applications of Deep Learning in Javascript. There is a rich and deep field of study, much of which unfortunately falls outside the scope of this book. My hope is that the next few chapters can serve as your first stop on a long path of self-study and learning.

We'll be using a library called `Tensorflow.js` for the duration of this book. There are a number of supporting libraries you can install, or include on your HTML page. You can install them all with:

```
npm install dljsbook
```

Alternatively, include them with:

```
<script />
```

## What is Deep Learning

**Machine Learning** is the practice of teaching computers to learn things and make predictions. This can encompass a wide array of use cases, such as: what is the expected price of this house? Is this a picture of a dog or a cat? Will this stock price go up or down, and by how much?

**Deep Learning** is a subset of Machine Learning. The "Deep" part refers to the architecture of the network, specifically that it has many layers (it is "deep").

Machine Learning, when used in contrast to Deep Learning, can also be shorthand for traditional statistical methods - things like k-means, random forests, etc. - in contrast to more recent Deep Learning methods.

You'll often hear **Artificial Intelligence** bandied about as well. This is a broad term and, when used in a sentence, can refer to anything from Logistic Regression to Skynet presaging the extermination of humanity.

For the duration of this book I’ll stick to “Deep Learning” to make clear we're focused on building neural nets with deep layers.

https://www.explainthatstuff.com/introduction-to-neural-networks.html

## What are Neural Networks Good For

Deep Learning has a lot of applications.

Lots of examples. Weave some history in here.

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

## Kicking the tires

Example

## Overview

Deep Learning is an absurdly deep field.

The first step in the deep learning pipeline is the **data**.

Data must be prepared for consumption by the neural network. At the very minimum, this means ensuring that the data is numeric. There are a number of other needs that we'll address in the next chapter.

From there, we design the architecture of our **model**. In this phase, we design our model, drawing on a previous set of knowledge to help inform design, based on our data and what we're trying to predict. We may also leverage pretrained models that others have trained and released into the wild.

Finally, we **train** our model. Neural networks have two phases: training and inference.

When running in inference mode, neural networks consume data and make predictions on that data. So you might feed the network a particular image of a beach, with the expectation that the model will predict "beach".

When running in training mode, the neural network does all of the same steps - consumes data and makes predictions - but it also measures the accuracy of its predictions, and then *modifies itself* to become a little bit more accurate.

The formal names for these two processes are **forward propagation** and **back propagation**, respectively.

This is not a strictly linear process. Bugs can arise in data and models. Often you'll start with a small dataset, build a simple model, train it and glean some insights. Those insights may lead you to experiment with different model architectures; they may also suggest changes to your dataset that can lead to better performance. Therefore its better to think of this process as a loop, instead of a linear process.

In this book, we'll discuss these three parts independently - **data**, **training**, and **architecture** - in that order.


> A typical neural network has anything from a few dozen to hundreds, thousands, or even millions of artificial neurons called units arranged in a series of layers, each of which connects to the layers on either side. Some of them, known as input units, are designed to receive various forms of information from the outside world that the network will attempt to learn about, recognize, or otherwise process. Other units sit on the opposite side of the network and signal how it responds to the information it's learned; those are known as output units. In between the input units and output units are one or more layers of hidden units, which, together, form the majority of the artificial brain. Most neural networks are fully connected, which means each hidden unit and each output unit is connected to every unit in the layers either side. The connections between one unit and another are represented by a number called a weight, which can be either positive (if one unit excites another) or negative (if one unit suppresses or inhibits another). The higher the weight, the more influence one unit has on another. (This corresponds to the way actual brain cells trigger one another across tiny gaps called synapses.)
