import * as React from 'react';
// import Page from '../components/Page';
import IndexLayout from '../layouts';
import styled from 'react-emotion';

const Button = styled.a`
    display: block;
    padding: 20px 40px;
    background: rgb(31, 182, 255);
    color: white;
    text-transform: uppercase;
    text-align: center;
    width: 100%;
    font-weight: bold;
    font-size: 26px;
    border: none;
    margin: 10px 0;
    cursor: pointer;
`;

const BuyContainer = styled.div`
text-align: center;

em {
opacity: 0.8;

}
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

  h1 {
    color: rgb(31, 182, 255);
    font-size: 44px;

    span {
      display: block;
      color: white;
      text-decoration: underline;
    }
  }

  img {
    max-height: 600px;
    box-shadow: 0 2px 18px rgba(0,0,0,0.6);
    margin-right: 40px;
    display: block;
  }

`;

const Headline = styled.h2`
  max-width: 800px;
  margin: 60px auto 100px auto;
  font-size: 50px;
  color: white;
  opacity: 1.0;
  text-align: center;

  span {
    color: rgb(31, 182, 255);
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
  padding: 40px 0;

  h1, h2, h3 {
    color: rgb(31, 182, 255);
  }

  h2 {
    margin-bottom: 40px;
    font-size: 50px;
  }

  li, p {
    font-size: 20px;
  }

  li {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
  }

  ${props => props.blue ? `
  background: rgba(31,182,255,0.12);
  ` : null}
`;

interface IQuestionProps {
  question: string;
  children: JSX.Element|string|(string|undefined|JSX.Element)[];
}

const Price = () => (
  <span>$19.95</span>
)

const Question = ({
  question,
  children,
}) => (
  <>
    <p><strong>{question}</strong></p>
    {children}
  </>
);

const BuyButton = () => (
  <BuyContainer>
    <Button href="https://gum.co/dljsbook?wanted=true">Pre-Order Your Copy</Button>
    <em><Price /></em>
  </BuyContainer>
);

const IndexPage = () => (
  <IndexLayout>
    <Jumbotron>
      <div>
        <img src="/dljscover.png" />
        <Body>
          <h1>Today is the day you build a <span>Neural Network</span> in Javascript.</h1>
          <p>Deep Learning is ushering in a sea change in the way we build software. Andrew Ng famously refers to AI as the "New Electricity": a change destined to become as ubiquitous as electricity, imbued in every product around us, that will revolutionize how we interact with technology.</p>
          <p>Deep Learning has traditionally required vast server farms of specialized GPU chips, a PhD degree, and huge petabytes of data. Recently, however, - just this year, in fact - its become feasible to deploy and train cutting-edge Neural Networks in your browser, using Javascript. </p>
          <BuyButton />
        </Body>
      </div>
      <Headline><span>Deep Learning With Javascript</span> will teach you how to build a Neural Network in your browser, today.</Headline>
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
        <BuyButton />
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
        <BuyButton />
      </Contents>
    </Section>

    <Section>
      <Contents>
        <h2>FAQ</h2>

        <Question question="What happens after I purchase?">
          <p>On December 23rd, you'll get an email delivery with the PDF, Kindle (.mobi), and .epub files. You'll also be subscribed to receive future updates of the book for free.</p>
        </Question>

        <Question question="Do I need a math or statistics background to use this book?">
          <p>No! Math or Statistics background is not required. We will touch on theory as it applies to the Deep Learning models you will build, but there will be little-to-no math or statistics.</p>
        </Question>

        <Question question="Do I need to know Javascript to use this book?">
          <p>We'll be using modern Javascript to demonstrate techniques and build the Neural Networks and spending little time delving into Javascript. However, a passing familiarity should be all you need.</p>
        </Question>

        <Question question="What if this book is too advanced for me?">
          <p>Unlimited money-back guarantee: if you're not happy with your purchase, email kevin@hitheory.com and you will get your money back, no questions asked (well, I will ask you how the book could be improved!)</p>
        </Question>

        <Question question="What if this book is not advanced enough for me?">
          <p>Take advantage of the unlimited money-back guarantee!</p>
        </Question>

        <Question question="What if I buy this book today, and next year it's out of date?"> 
          <p>Buying the book today guarantees you unlimited access to future updates in digital format.</p>
          <p>Also, though the tools will change, the basics of building a Neural Network and techniques for training and tuning will stay the same.</p>
        </Question>
        <BuyButton />
      </Contents>
    </Section>
  </IndexLayout>
);

export default IndexPage;
