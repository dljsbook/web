import * as React from 'react';
import PresentationLayout from '../layouts/presentation';
import { Link } from 'gatsby';

class DevWeekOne extends React.Component {
  render() {
    return (
      <PresentationLayout>
        <p>Here are slides for my talk at Developer Week, February 20th, 2019:</p>
        <p><a target="_blank" href="https://www.dropbox.com/s/il187u01dyqp9se/KevinScott-2_20_19-ask_what_ai_can_do_for_you.key?dl=0">Ask What AI Can Do For You</a></p>
        <p>If you're looking for my other talk, <Link to="/devweek">you can find it here</Link>.</p>
        <hr />
        <p>If you're interested on learning how to build a Neural Network in Javascript, <a href="/" target="_blank">check out the book</a>!</p>
        <p><a href="/" target="_blank"><img src="https://dljsbook.com/dljscover.png" alt="Deep Learning With Javascript" title="Deep Learning With Javascript" /></a></p>
      </PresentationLayout>
    );
  }
}

export default DevWeekOne;
