import * as React from 'react';

import Page from '../../components/Page';
import Container from '../../components/Container';
import IndexLayout from '../../layouts';
// import getOptions from './getOptions';
// import { ImageClassifier } from '@dljsbook/ui';

import styled from 'react-emotion';

const Body = styled.div`
  width: 100%;
  padding-right: 30px;
`;

class ImageClassifierPage extends React.Component {
  handleRef = div => {
    console.log('hi');
    // const options = getOptions();
    // new ImageClassifier(div, options)
  }

  shouldComponentUpdate = () => false;

  render() {
    return (
      <IndexLayout>
        <Page>
          <Container>
            <Body>
              <div ref={this.handleRef} />
            </Body>
          </Container>
        </Page>
      </IndexLayout>
    );
  }
}

export default ImageClassifierPage;
