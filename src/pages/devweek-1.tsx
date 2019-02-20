import * as React from 'react';

import Page from '../components/Page';
import Container from '../components/Container';
import IndexLayout from '../layouts';

import styled from 'react-emotion';

const Body = styled.div`
  width: 100%;
  padding-right: 30px;
`;

class DevWeekOne extends React.Component {
  render() {
    return (
      <IndexLayout>
        <Page>
          <Container>
            <Body>
              <p>Here are slides for my talk at Developer Week, February 20th, 2019:</p>
              <p><a href="https://www.dropbox.com/s/il187u01dyqp9se/KevinScott-2_20_19-ask_what_ai_can_do_for_you.key?dl=0">Ask What AI Can Do For You</a></p>
              <p>If you&quot;re looking for my other talk, <a href="/devweek-2">you can find it here</a>.</p>
              <hr />
              <p>If you&quot;re interested on learning how to build a Neural Network in Javascript, <a href="/" target="_blank">check out the book</a>!</p>
              <p><a href="/" target="_blank"><img src="https://dljsbook.com/dljscover.png" style="max-width: 300px; margin: 0 auto;" alt="Deep Learning With Javascript" title="Deep Learning With Javascript" /></a></p>
            </Body>
          </Container>
        </Page>
      </IndexLayout>
    );
  }
}

export default DevWeekOne;
