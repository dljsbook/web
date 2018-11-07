import * as React from 'react';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

import Page from '../components/Page';
import Container from '../components/Container';
import IndexLayout from '../layouts';
import Jumbotron from '../components/Jumbotron';
import ToC from '../components/ToC';

// interface PageTemplateProps {
//   data: {
//     site: {
//       siteMetadata: {
//         title: string
//         description: string
//         author: {
//           name: string
//         }
//       }
//     }
//     markdownRemark: {
//       html: string;
//       excerpt: string;
//       tableOfContents: string;
//       frontmatter: {
//         title: string;
//         description: string;
//       };
//     };
//   };
// }

const Body = styled.div`
  flex: 0 0 75%;
  max-width: 75%;
  padding-right: 30px;
`;

/* eslint-disable */
const PageTemplate = ({ data, __mdxScope }) => {
  const post = data.mdx;
  return (
    <IndexLayout>
      <Jumbotron
        title={post.fields.title}
        description={post.fields.description}
      />
      <Page>
        <Container>
          <Body>
            <MDXRenderer scope={__mdxScope}>
              {post.code.body}
            </MDXRenderer>
          </Body>
          { /*
          <ToC contents={data.markdownRemark.tableOfContents} />
          */ }
        </Container>
      </Page>
    </IndexLayout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      tableOfContents
      code {
        body
      }
      fields {
        title
        description
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
