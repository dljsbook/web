import * as React from 'react';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { MDXProvider } from "@mdx-js/tag";

const Container = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  background: black;
  position: relative;

  &:after {
    content: "Loading";
    color: white;
    position: absolute;
    text-align: center;
    top: 50%;
    width: 100%;
    margin-top: -100px;
    z-index: 1;
  }

  > * {
    flex: 1;
  }

  iframe {
    position: relative;
    z-index: 2;
    width: 100% !important;
    height: 100% !important;
    border: 0 !important;
    border-radius: 0 !important;
    overflow: hidden;
  }
`;

const Header = styled.div`
  background: hsl(206,100%,68%);
  color: white;
  padding: 10px 20px;
`;

const Body = ({ sandbox, body, mdxScope }) => {
  if (sandbox) {
    const src = `https://codesandbox.io/embed/${sandbox}?autoresize=1&expanddevtools=1&hidenavigation=1`;
    const options = 'allow-modals allow-forms allow-popups allow-scripts allow-same-origin';
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

/* eslint-disable */
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
