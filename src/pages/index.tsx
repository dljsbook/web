import * as React from 'react';
// import Page from '../components/Page';
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
  <IndexLayout>

    <Jumbotron>
      <div>
        <img src="/dljscover.png" />
        <Body>
          <h1>Today is the day you build a Neural Network in Javascript.</h1>
          <p>Deep Learning is ushering in a sea change in the way we build software. Andrew Ng famously refers to AI as the "New Electricity": a change destined to become as ubiquitous as electricity, imbued in every product around us, that will revolutionize how we interact with technology.</p>
          <p>Deep Learning has traditionally required vast server farms of specialized GPU chips, a PhD degree, and huge petabytes of data. Recently, however, - just this year, in fact - its become feasible to deploy and train cutting-edge Neural Networks in your browser, using Javascript. </p>
          <p>Deep Learning With Javascript will teach you how to build a Neural Network in Javascript in your browser, today.</p>
          <Button>Pre-Order Your Copy</Button>
          <em>** $9.95 until 11/25, then $19.95 **</em>
        </Body>
      </div>
    </Jumbotron>
    <Section>
      <Contents>
        <h2>The Future of Deep Learning Is Your Browser and Phone</h2>
        <p>Consider: </p>
        <ul>
          <li>Apple's new NPU chip - specialized for Deep Learning - features a 60x increase over the 2017 model. We're just in the opening rounds of specialized hardware bringing AI to your computer and phone.</li>
          <li>Consumers are more conscious of privacy than ever before. Techniques that can keep Deep Learning on-device, without ever hitting a remote server, allow you to leverage Deep Learning techniques without handling people's data.</li>
          <li>Many types of sensor data - video, audio, or cutting-edge AR and VR techniques - are too big and slow to send back and forth to a remote server for realtime processing. Leveraging Deep Learning in the browser lets you handle sensor data in realtime with no lag.</li>
        </ul>
        <p>Deep Learning is coming to the computer on your desk and the phone in your pocket. And guess which technology is well positioned to take advantage of this change? You guessed it: Javascript.</p>
      </Contents>
    </Section>
    <Section blue>
      <Contents>
        <h2>What This Book Covers</h2>
        <p>This book is aimed at teaching Javascript developers how to leverage Deep Learning in the browser today. It's aimed at hackers looking to jump in quickly and learn through coding.</p>
        <p>This book includes:</p>
        <ul>
            <li>An overview of how Deep Learning works, various approaches and when to use them</li>
            <li>Techniques for manipulating, cleaning, and processing datasets, and how to effectively work with smaller datasets</li>
            <li>How Image Recognition works, and how to interpret what a Neural Network "sees" when it looks at an image</li>
            <li>How to effectively train a model in your browser, and tune it for better performance</li>
            <li>How to take models built by others and leverage them in your apps, tweaking them for your specific use case</li>
            <li>A step-by-step walkthrough of how to build an Image Classifier in your browser, from scratch</li>
          </ul>
          <p>Today is the day you build a Neural Network in Javascript.</p>
      </Contents>
    </Section>

    <Section>
      <Contents>
        <h2>FAQ</h2>


    <p>What happens after I purchase?</p>

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

      </Contents>
    </Section>
  </IndexLayout>
);

export default IndexPage;
