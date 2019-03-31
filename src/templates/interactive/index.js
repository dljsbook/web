import * as React from 'react';
import { graphql } from 'gatsby';
// import MDXRenderer from 'gatsby-mdx/mdx-renderer';
// import { MDXProvider } from "@mdx-js/tag";
import {
  // Header,
  Body,
  Container,
} from './components';

/* eslint-disable */
const Sandbox = ({ sandbox }) => {
  const qs = [
    'autoresize=1',
    'expanddevtools=0',
    'hidenavigation=1',
  ];
  const src = `https://codesandbox.io/s/${sandbox}?${qs.join('&')}`;
  const options = [
    'allow-top-navigation',
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
};

const createSandbox = () => {
  const code = `console.log('hii');`;
  const html = '<div id="root"></div>';

  return fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      files: {
        "package.json": {
          content: {
            dependencies: {
              react: "latest",
              "react-dom": "latest"
            }
          }
        },
        "index.js": {
          content: code
        },
        "index.html": {
          content: html
        }
      }
    })
  }).then(x => x.json()).then(data => data.sandbox_id);
}

const forkSandbox = () => {
  return fetch('https://cors-anywhere.herokuapp.com/https://codesandbox.io/api/v1/sandboxes/movkjqoq88/fork', {
    method: 'POST',
    headers: new Headers({
      'Origin': 'localhost:8000',
      'X-Requested-With': 'localhost:8000',
    }),
  }).then(r => r.json()).then(r => {
    console.log(r);
    return r.data.id;
  });
};

const USE_CACHE = false;

const getSandbox = () => {
  try {
    if (USE_CACHE) {
      // const sandboxId = '4q47307rvx';
      const sandboxId = localStorage[window.location.pathname];
      if (sandboxId) {
        console.log('sandbox id saved to local storage', sandboxId);
        return Promise.resolve(sandboxId);
      }
    }
  } catch(err) { }

  console.log('create sandbox from scratch');
  return forkSandbox().then(sandboxId => {
    if (sandboxId) {
      console.log('sandboxId', sandboxId);
      localStorage[window.location.pathname] = sandboxId;
    }
    return sandboxId;
  });
}

class PageTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sandboxId: null,
    };
  }

  componentDidMount() {
    const {
      data: {
        mdx: {
          fields: {
            sandbox,
          },
        },
      },
    } = this.props;

    window.location = `https://codesandbox.io/s/github/dljsbook/templates/tree/dist/${sandbox}`;
    // getSandbox().then(sandboxId => {
    //   this.setState({
    //     sandboxId,
    //   });
    // });
  }

  render() {
    const {
      data,
      __mdxScope,
      ...rest
    } = this.props;
    const post = data.mdx;
    const {
      sandbox,
    } = post.fields;
    return (
      <Container>
        { /*
        <Header>
          Deep Learning in Javascript: A Hacker's Guide to Getting Started With Neural Networks
        </Header>
        */ }
        <Body>
          {this.state.sandboxId && (
            <Sandbox sandbox={this.state.sandboxId} mdxScope={__mdxScope} />
          )}
        </Body>
      </Container>
    );
  }
}

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
