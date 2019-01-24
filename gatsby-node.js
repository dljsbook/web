/* globals Promise */
'use strict'

const path = require('path');
const fs = require('fs');
const { createFilePath } = require('gatsby-source-filesystem');
const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.

  if (node.internal.type === 'MarkdownRemark') {
    const { permalink, layout } = node.frontmatter
    const { relativePath } = getNode(node.parent)

    let slug = permalink

    if (!slug) {
      slug = `/${relativePath.replace('.md', '')}/`
    }

    // Used to generate URL to view this content.
    createNodeField({
      node,
      name: 'slug',
      value: slug || ''
    })

    // Used to determine a page layout.
    createNodeField({
      node,
      name: 'layout',
      value: layout || ''
    })
  } else if (node.internal.type === 'Mdx') {
    const {
      slug,
      path,
      ...rest
    } = node.frontmatter;

    createNodeField({
      node,
      name: `slug`,
      value: path || slug || createFilePath({ node, getNode })
    })

    Object.entries(rest).forEach(([name, value]) => {
      createNodeField({
        node,
        name,
        value,
      })
    });
  }
};

const getLayout = layout => {
  if (!layout) {
    return path.resolve(`./src/templates/page.js`);
  }

  const template = path.resolve(`./src/templates/${layout}.js`);
  if (fs.existsSync(template)) {
    return template;
  }

  return path.resolve(`./src/templates/${layout}/index.js`);
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(graphql(getAllMdxQuery()).then(result => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }

      // Create blog posts pages.
      result.data.allMdx.edges.forEach(({ node }) => {
        const { slug, layout } = node.fields;
        const nodePath = `/${node.parent.name}`;
        const template = getLayout(layout);
        createPage({
          path: slug || nodePath,
          component: componentWithMDXScope(
            template,
            node.code.scope,
          ),
          context: {
            id: node.id,
            slug,
          },
        });
      });
    }));
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: { $components: path.resolve(__dirname, "src/components") }
    }
  });
};

const getAllMdxQuery = () => `
  {
    allMdx {
      edges {
        node {
          id
          fields {
            sandbox
            layout
            slug
            date(formatString: "DD MMMM, YYYY")
            title
            description
          }
          parent {
            ... on File {
              name
              sourceInstanceName
            }
          }
          code {
            scope
          }
        }
      }
    }
  }
`;
