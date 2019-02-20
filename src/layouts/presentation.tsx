import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import 'modern-normalize';
import '../styles/normalize';
// import '@fortawesome/fontawesome-free/css/all.css';
import Header from '../components/Header';
import LayoutRoot from '../components/LayoutRoot';
import LayoutMain from '../components/LayoutMain';
import Page from '../components/Page';
import Container from '../components/Container';
import IndexLayout from './index';
import styled from 'react-emotion';

const Body = styled.div`
  width: 100%;
  padding-right: 30px;

  a {
    font-weight: bold;
  }

  img {
    max-width: 300px;
    margin: 0 auto;
  }
`;

const PresentationLayout: React.SFC = ({ children }) => (
  <IndexLayout>
    <Page>
      <Container>
        <Body>
          {children}
        </Body>
      </Container>
    </Page>
  </IndexLayout>
);

export default PresentationLayout;
