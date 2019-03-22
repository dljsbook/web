import * as React from 'react';
import PresentationLayout from '../layouts/presentation';

class DevWeekTwo extends React.Component {
  render() {
    return (
      <PresentationLayout>
        <p>Here are slides for my talk at ByteConf, March 22nd, 2019:</p>
        <p><a target="_blank" href="https://www.dropbox.com/s/ptj3y807tz7osth/Ask%20What%20AI%20Can%20Do%20For%20You.key?dl=0">Ask What AI Can Do For You</a></p>
        <hr />
        <p>If you're interested on learning how to build a Neural Network in Javascript, <a href="/" target="_blank">check out the book</a>!</p>
        <p><a href="/" target="_blank"><img src="https://dljsbook.com/dljscover.png" alt="Deep Learning With Javascript" title="Deep Learning With Javascript" /></a></p>
      </PresentationLayout>
    );
  }
}

export default DevWeekTwo;

