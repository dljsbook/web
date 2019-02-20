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
              hi
            </Body>
          </Container>
        </Page>
      </IndexLayout>
    );
  }
}

export default DevWeekOne;
