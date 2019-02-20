import * as React from 'react';
import Page from '../../components/Page';
import Container from '../../components/Container';
import IndexLayout from '../../layouts';

const url = 'https://codepen.io/thekevinscott/pen/Jxameq';

class RedirectPage extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      window.location.href = url;
    }, 200);
  }

  render() {
    return (
      <IndexLayout>
        <Page>
          <Container>
            <p>Redirecting to:</p>
            <p>{url}</p>
          </Container>
        </Page>
      </IndexLayout>
    );
  }
}

export default RedirectPage;
