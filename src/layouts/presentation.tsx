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

type StaticQueryProps = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
};

const PresentationLayout: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        allMdx(sort: { fields: [fields___date], order: DESC }) {
          edges {
            node {
              excerpt
              fields {
                slug
                date(formatString: "DD MMMM, YYYY")
                title
              }
            }
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: 'gatsbyjs, gatsby, javascript, sample, something' }
          ]}
        />
        <Header title={data.site.siteMetadata.title} />
        <LayoutMain>
          <IndexLayout>
            <Page>
              <Container>
                <Body>
                  {children}
                </Body>
              </Container>
            </Page>
          </IndexLayout>
        </LayoutMain>
      </LayoutRoot>
    )}
  />
);

export default PresentationLayout;
