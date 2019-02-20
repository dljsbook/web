import * as React from 'react';

import Page from '../components/Page';
import Container from '../components/Container';
import IndexLayout from '../layouts';

import styled from 'react-emotion';

const Body = styled.div`
  width: 100%;
  padding-right: 30px;
`;

class DevWeekTwo extends React.Component {
  render() {
    return (
      <IndexLayout>
        <Page>
          <Container>
            <Body>
              <p>Here are slides for my talk at Developer Week, February 21st 2019:</p>
              <p><a href="https://www.dropbox.com/s/8abh2m6mfkje4yv/KevinScott-2_21_19-intro_to_machine_learning_in_javascript.key?dl=0">Intro To Machine Learning in Javascript</a></p>
              <p>If you're looking for my other talk, <a href="/devweek-1">you can find it here</a>.</p>
              <hr />
              <p>If you're interested on learning how to build a Neural Network in Javascript, <a href="/" target="_blank">check out the book</a>!</p>
              <p><a href="/" target="_blank"><img src="https://dljsbook.com/dljscover.png" style="max-width: 300px; margin: 0 auto;" alt="Deep Learning With Javascript" title="Deep Learning With Javascript" /></a></p>
            </Body>
          </Container>
        </Page>
      </IndexLayout>
    );
  }
}

export default DevWeekTwo;

