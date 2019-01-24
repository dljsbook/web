import * as React from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { MDXProvider } from "@mdx-js/tag";
import {
  Header,
  Container,
} from './components';

/* eslint-disable */
const Body = ({ sandbox, body, mdxScope }) => {
  if (sandbox) {
    const qs = [
      'autoresize=1',
      'expanddevtools=0',
      'hidenavigation=1',
    ];
    const src = `https://codesandbox.io/embed/${sandbox}?${qs.join('&')}`;
    const options = [
      'allow-modals',
      'allow-forms',
      'allow-popups',
      'allow-scripts',
      'allow-same-origin',
    ].join(' ');

    return (
      <iframe
        src={src}
        sandbox={options}
      />
    );
  }

  return (
    <MDXRenderer scope={mdxScope}>
      {body}
    </MDXRenderer>
  );
};

const PageTemplate = ({ data, __mdxScope, ...rest }) => {
  const post = data.mdx;
  const {
    sandbox,
  } = post.fields;
  return (
    <MDXProvider components={{}}>
      <Header>
        Deep Learning With Javascript: A Hacker's Guide to Getting Started With Neural Networks
      </Header>
      <Container>
        <Body sandbox={sandbox} mdxScope={__mdxScope} body={post.code.body} />
      </Container>
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
      code {
        body
      }
      fields {
        sandbox
        title
        description
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
