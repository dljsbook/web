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
  console.log(data);
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

// export const query = graphql`
//   query PageTemplateQuery($slug: String!) {
//     site {
//       siteMetadata {
//         title
//         description
//         author {
//           name
//         }
//       }
//     }
//     allSitePage {
//       edges {
//         node {
//           path
//         }
//       }
//     }
//     markdownRemark(fields: {slug: {eq: $slug}}) {
//       html
//       excerpt
//       tableOfContents
//       frontmatter {
//         title
//         description
//       }
//     }
//     mdx(id: {eq: "6ee945eb-e5e5-5f02-aba6-b9bd0547da3b"}) {
//       id
//       parent {
//         ... on File {
//           name
//           sourceInstanceName
//         }
//       }
//       code {
//         scope
//       }
//     }
//   }
// `;
