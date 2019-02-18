import * as React from 'react';
import styled from 'react-emotion';
import Page from '../components/Page';
import Container from '../components/Container';
import IndexLayout from '../layouts';
// import {
//   ActivationFunctions,
//   ACTIVATION_FUNCTION,
// } from '@dljsbook/ui';

const Body = styled.div`
  // flex: 0 0 75%;
  // max-width: 75%;
  width: 100%;
  padding-right: 30px;
`;

const Fn = styled.div`
  text-align: center;
  flex: 1;

  label {
    font-size: 24px;
  }

  div {
  }
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

/* eslint-disable */
export default class AFnsPage extends React.Component {
  componentDidMount() {

// const aFns = new ActivationFunctions();
  }

  handleRef = () => () => {}
  // handleRef = fn => div => aFns.render(div, fn);

  shouldComponentUpdate = () => false;

  render() {
    return (
      <IndexLayout>
        <Page>
          <Container>
            hi
          </Container>
        </Page>
      </IndexLayout>
    );
  }
};
