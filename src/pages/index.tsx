import * as React from 'react';
import Page from '../components/Page';
import IndexLayout from '../layouts';
import styled from 'react-emotion';

const Button = styled.button`
    display: block;
    padding: 20px 40px;
    background: rgb(31, 182, 255);
    color: white;
    text-transform: uppercase;
    width: 100%;
    font-weight: bold;
    font-size: 26px;
    border: none;
`;

const Jumbotron = styled.div`
  background-color: rgb(37,54,76);
  min-height: 600px;
  color: white;
  padding: 40px;

  > div {
    display: flex;
    flex-direction: row;
    max-width: 800px;
    margin: 40px auto;
  }

  h1, h2, h3 {
    color: rgb(31, 182, 255);
  }

  img {
    max-height: 450px;
    box-shadow: 0 2px 18px rgba(0,0,0,0.6);
    margin-right: 40px;
    display: block;
  }

`;

const Body = styled.div`
`;


const Contents = styled.div`
  max-width: 800px;
  margin: 40px auto;
`;

interface ISectionProps {
  blue?: boolean;
}

const Section = styled.div<ISectionProps>`
  background: white;
  color: rgba(0, 0, 0, 0.6);
  h1, h2, h3 {
    color: rgb(31, 182, 255);
  }

  ${props => props.blue ? `
  background: rgba(31,182,255,0.12);
  ` : null}
`;

const IndexPage = () => (
  <p>
** $9.95 until 11/25, then $19.95 **

Today is the day you build a Neural Network in Javascript.

Deep Learning is ushering in a sea change in the way we build software. Andrew Ng famously refers to AI as the "New Electricity": a change destined to become as ubiquitous as electricity, imbued in every product around us, that will revolutionize how we interact with technology.

Deep Learning has traditionally required vast server farms of specialized GPU chips, a PhD degree, and huge petabytes of data. Recently, however, - just this year, in fact - its become feasible to deploy and train cutting-edge Neural Networks in your browser, using Javascript. 

Deep Learning With Javascript will teach you how to build a Neural Network in Javascript in your browser, today.

The book will be released December 23rd, and you can pre-order until 11/25 for $9.95. After 11/25, the pre-order price will be $19.95.



The Future of Deep Learning Is In Edge Devices

Consider: 

1) Apple's new NPU chip - specialized for Deep Learning - features a 60x increase over the 2017 model. We're just in the opening rounds of specialized hardware bringing AI to your computer and phone.

2) Consumers are more conscious of privacy than ever before. Techniques that can keep Deep Learning on-device, without ever hitting a remote server, allow you to leverage Deep Learning techniques without handling people's data.

3) Many types of sensor data - video, audio, or cutting-edge AR and VR techniques - are too big and slow to send back and forth to a remote server for realtime processing. Leveraging Deep Learning in the browser lets you handle sensor data in realtime with no lag.

Deep Learning is coming to the computer on your desk and the phone in your pocket. And guess which technology is well positioned to take advantage of this change? You guessed it: Javascript.



What This Book Covers

This book is aimed at teaching Javascript developers how to leverage Deep Learning in the browser today. It's aimed at hackers looking to jump in quickly and learn through coding.

This book includes:

* An overview of how Deep Learning works, various approaches and when to use them

* Techniques for manipulating, cleaning, and processing datasets, and how to effectively work with smaller datasets

* How Image Recognition works, and how to interpret what a Neural Network "sees" when it looks at an image

* How to effectively train a model in your browser, and tune it for better performance

* How to take models built by others and leverage them in your apps, tweaking them for your specific use case

* A step-by-step walkthrough of how to build an Image Classifier in your browser, from scratch



Today is the day you build a Neural Network in Javascript.



FAQ

What happens after I purchase?

On December 23rd, you'll get an email delivery with the PDF, Kindle (.mobi), and .epub files. You'll also be subscribed to receive future updates of the book for free.

Do I need a math or statistics background to use this book?

No! Math or Statistics background is not required. We will touch on theory as it applies to the Deep Learning models you will build, but there will be little-to-no math or statistics.

Do I need to know Javascript to use this book?

We'll be using modern Javascript to demonstrate techniques and build the Neural Networks and spending little time delving into Javascript. However, a passing familiarity should be all you need.

What if this book is too advanced for me?

Unlimited money-back guarantee: if you're not happy with your purchase, email kevin@hitheory.com and you will get your money back, no questions asked (well, I will ask you how the book could be improved!)

What if this book is not advanced enough for me?

Take advantage of the unlimited money-back guarantee!

What if I buy this book today, and next year it's out of date?

Buying the book today guarantees you unlimited access to future updates in digital format.

Also, though the tools will change, the basics of building a Neural Network and techniques for training and tuning will stay the same.
  </p>

);

const IndexPageBackup = () => (
  <IndexLayout>

    <Jumbotron>
      <div>
        <img src="/dljscover.png" />
        <Body>
          <h1>Learn to Use the Power of AI</h1>
          <p>Artificial Intelligence is a game changer, and it's happening right now. However, getting started has often required deep knowledge of advanced math and statistics, along with a wide range of opaque and low-level tools.</p>
          <p>Build Real Projects With AI will get you building actual, usable applications in your browser that leverage Artificial Intelligence, Deep Learning, and Machine Learning, with no math or statistics background required!</p>
          <Button>Buy Your Copy</Button>
          <p>$49.99 | $29.99</p>
        </Body>
      </div>
    </Jumbotron>
    <Section>
      <Contents>
        <h2>"Machine Learning is hard. How do you guys do it?"</h2>

        <p>Been reading and studying a lot on data science, machine learning and deep learning for about 5~7weeks. I found it is very hard. To many things to learn and cover such as statistics, maths, programming. Programming is really hard for me. How long does it normally take to be proficient in python? I've been reading intro to ml and DL with Python but I found that everytime I have to simply manipulate the libraries used in the book such as sklearn (to loop between different range of parameters in kNN), I still cant do it. I've also been reading some codes in kaggle by some data scientists, but most of the codes use wide number of libraries and functions that I've never even heard of to clean, manipulate and visualize the data and model. I feel the learning curve for programming side of ML is too steep for me that I want to give up learning ML and data science.</p>

        <p>- a discussion on Reddit</p>
      </Contents>
    </Section>
    <Section blue>
      <Contents>
        <h2>BUILD REAL PROJECTS WITH AI</h2>
        <p>One of the reasons getting up to speed with in the field is so difficult is because there's so much to learn at once. Many tutorials assume deep familiarity with advanced math and statistics, including linear algebra, matrix calculus, and numerical optimization. On top of that, there's an entire ecosystem in Python of tools specific to data science - things like numpy, scikit, pandas, and Jupyter notebooks, along with pre-existing statistical approaches to machine learning - that are yet another set of things to learn before you can start building.</p>
        <p>Don't get me wrong - this ecosystem is amazing, and hugely useful. But when you’re just starting out, there’s nothing more demoralizing than spending hours struggling to understand a new concept and realizing you're weeks or months from a working prototype. You don't learn to play the piano by reading books for year on music theory; you play.</p>
        <p>The best way to learn is to leverage that excitement that got you interested in the first place. I'm smitten with the possibilities AI affords us to explore our creativity. There’s nothing more invigorating than watching your creation come to life - especially when that creation leverages the mind blowing awesomeness of AI! </p>
        <p>That's what this book offers: an opportunity to explore the fundamentals of AI with no math or statistics background assumed. We'll walk through a number of easily consumable, immediately useful applications of deep learning. You won't become an expert in the field (that'll take much longer!), but you will gain a foundation to build real working applications, now, and have a framework with which to continue exploring the field.</p>
      </Contents>
    </Section>
    <Section>
      <Contents>
        <h3>Live Object Recognition</h3>
        <p>Live image recognition is a huge value add, whether you're building a website or a mobile app. </p>
        <p>It's also a perfect use case for something to build directly in the browser, so you're not streaming huge chunks of data to the server for processing and then sending them back.</p>
        <p>We'll build a tool that can recognize images in real time.</p>
        <h3>Text Prediction</h3>
        <p>Predictive text can have huge productivity gains for users. With recent advances it's not hard to bring this to your app.</p>
        <p>We'll walk through a simple app that leverages this technology, and show how you can build the same functionality into your website.</p>


        <h3>Chatbots</h3>

        <p>Chatbots have proliferated across Facebook Messenger and WeChat. While still in their nascency, a bit of artificial intelligence can go a long way to providing a superior user experience.</p>
        <p>We’ll analyze users’ sentiment, and parse parts of speech to tease out what users are asking for and how best to respond. </p>
        <h3>Filters</h3>

        <p>Ever wonder how Snapchat filters work, or Google Hangouts slaps a mustache onto your face? </p>
        <p>Wonder no more. We're gonna build that.</p>
      </Contents>
    </Section>
    <Section>
      <Contents>
        <h2>The Author</h2>
        <p>After more than ten years of experience building apps for brands like Venmo and GE Healthcare, I'm building bleeding-edge AI software.</p>
        <p>I think AI tools are the most exciting development in technology since... well, since I've been working in the field! </p>
        <p>The browser is an ideal medium for getting started with AI. Why?</p>
        <p>Everybody has one. There's nothing to install.</p>
        <p>It's interactive. You'll see the effects in real time.</p>
        <p>Comes with sensors. Webcam, location, you name it.</p>
        <p>Concentrate on what matters - building Real Projects with AI.</p>
          <Button>Buy Your Copy</Button>
      </Contents>
    </Section>
  </IndexLayout>
);

export default IndexPage;
