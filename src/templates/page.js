import * as React from 'react';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { MDXProvider } from "@mdx-js/tag";

import Page from '../components/Page';
import Container from '../components/Container';
import IndexLayout from '../layouts';
import Jumbotron from '../components/Jumbotron';
import ToC, { addAnchorLinks } from '../components/ToC';
import ImageClassifier from '$components/ImageClassifier';

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

const DEPTH = 3;

/* eslint-disable */
const PageTemplate = ({ data, __mdxScope }) => {
  const post = data.mdx;
  return (
    <MDXProvider
      components={{
        ...addAnchorLinks(DEPTH),
      }}
    >
      <IndexLayout>
        <Jumbotron
          title={post.fields.title}
          description={post.fields.description}
        />
        <Page>
          <Container>
            <Body>
              <ImageClassifier />
              <MDXRenderer scope={__mdxScope}>
                {post.code.body}
              </MDXRenderer>
            </Body>
            <ToC contents={post.tableOfContents} depth={DEPTH} />
          </Container>
        </Page>
      </IndexLayout>
    </MDXProvider>
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
