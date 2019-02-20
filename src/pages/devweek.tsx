import * as React from 'react';
import PresentationLayout from '../layouts/presentation';
import { Link } from 'gatsby';

class DevWeekTwo extends React.Component {
  render() {
    return (
      <PresentationLayout>
        <p>Here are slides for my talk at Developer Week, February 21st 2019:</p>
        <p><a target="_blank" href="https://www.dropbox.com/s/8abh2m6mfkje4yv/KevinScott-2_21_19-intro_to_machine_learning_in_javascript.key?dl=0">Intro To Machine Learning in Javascript</a></p>
        <p>If you're looking for my other talk, <Link to="/devweek-1">you can find it here</Link>.</p>
        <hr />
        <p>If you're interested on learning how to build a Neural Network in Javascript, <a href="/" target="_blank">check out the book</a>!</p>
        <p><a href="/" target="_blank"><img src="https://dljsbook.com/dljscover.png" alt="Deep Learning With Javascript" title="Deep Learning With Javascript" /></a></p>
      </PresentationLayout>
    );
  }
}

export default DevWeekTwo;

