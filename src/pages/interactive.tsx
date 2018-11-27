import * as React from 'react';

import Page from '../components/Page';
import Container from '../components/Container';
import IndexLayout from '../layouts';

const SandboxPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <iframe
          src="https://codesandbox.io/embed/0p1yj5q3q0"
          sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        />
      </Container>
    </Page>
  </IndexLayout>
);

export default SandboxPage;
