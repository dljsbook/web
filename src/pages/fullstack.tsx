import React from 'react';
import PresentationLayout from '../layouts/presentation';

const FullStack = () => (
  <PresentationLayout>
    <p>Here are slides for my talk May 17th, 2019:</p>
    <p><a target="_blank" href="https://www.dropbox.com/s/ptj3y807tz7osth/Ask%20What%20AI%20Can%20Do%20For%20You.key?dl=0">Ask What AI Can Do For You</a></p>
    <hr />
    <p>If you're interested on learning how to build a Neural Network in Javascript, <a href="/" target="_blank">check out the book</a>!</p>
    <p><a href="/" target="_blank"><img src="https://dljsbook.com/dljscover.png" alt="Deep Learning in Javascript" title="Deep Learning in Javascript" /></a></p>
    <hr />
    <p><strong>Additional Resources</strong></p>
    <p>Here are links to the Codepens:</p>
    <ul>
      <li><a target="_blank" href="https://codepen.io/thekevinscott/pen/Jxameq">A Simple Neural Network</a></li>
      <li><a target="_blank" href="https://codepen.io/thekevinscott/project/editor/DvGbxP">Transfer Learning for Images</a></li>
    </ul>
    <p>Information on hardware performance improvements <a target="_blank" href="https://heartbeat.fritz.ai/ios-12-core-ml-benchmarks-b7a79811aac1">can be found on Fritz.AI's blog</a>.</p>
    <p><a target="_blank" href="https://cs.nyu.edu/~fergus/papers/zeilerECCV2014.pdf">Link to the paper <em>Visualizing and Understanding Convolutional Networks</em> by Matthew D. Zeiler and Rob Fergus can be found here</a>. It explores how different layers of a Network learn visual features, vital in enabling Transfer Learning.</p>
    <hr />
    <p>Finally, I always appreciate feedback! <a href="https://twitter.com/thekevinscott" target="_blank">Shoot me a message on Twitter</a> and let me know how you think things could be improved.</p>
    <p>Thanks! &mdash; Kevin</p>
  </PresentationLayout>
);

export default FullStack;
