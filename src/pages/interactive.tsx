import * as React from 'react';
import styled from 'react-emotion';

import Page from '../components/Page';
import IndexLayout from '../layouts';

const Container = styled.div`
display: flex;
height: 100%;
width: 100%;

iframe {
width: 100%;
height: 100%;
border: none;
}
`;

const SandboxPage = () => (
  <Container>
    <iframe
      src="https://codesandbox.io/embed/0p1yj5q3q0"
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    />
  </Container>
);

export default SandboxPage;
