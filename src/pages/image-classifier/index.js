import * as React from 'react';
import styled from 'react-emotion';
import Page from '../../components/Page';
import Container from '../../components/Container';
import IndexLayout from '../../layouts';
import getOptions from './getOptions';
import { ImageClassifier } from '@dljsbook/ui';

const Body = styled.div`
  width: 100%;
  padding-right: 30px;
`;

/* eslint-disable */
export default class ImageClassifierPage extends React.Component {
  handleRef = div => {
    new ImageClassifier(div, getOptions())
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
};

