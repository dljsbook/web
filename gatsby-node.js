/* globals Promise */
'use strict'

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.

  switch (node.internal.type) {
  case 'MarkdownRemark': {
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
  }
    break;
  case 'Mdx': {
    const slug = createFilePath({ node, getNode });
    const title = node.frontmatter.title;
    const date = node.frontmatter.date;
    const description = node.frontmatter.description;

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

    createNodeField({
      node,
      name: `title`,
      value: title,
    })

    createNodeField({
      node,
      name: `date`,
      value: date,
    })

    createNodeField({
      node,
      name: `description`,
      value: description,
    })
  }
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  id
                  fields {
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
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }
        // Create blog posts pages.
        result.data.allMdx.edges.forEach(({ node }) => {
          const { slug } = node.fields;
          // const path = `/${node.parent.sourceInstanceName}/${node.parent.name}`;
          const nodePath = `/${node.parent.name}`;
          createPage({
            path: nodePath,
            component: componentWithMDXScope(
              path.resolve('./src/templates/page.js'),
              node.code.scope,
            ),
            context: {
              id: node.id,
              slug,
            },
          });
        });
      })
    );
  });
};
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const allMarkdown = await graphql(`
//     {
//       allMarkdownRemark(limit: 1000) {
//         edges {
//           node {
//             fields {
//               layout
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   if (allMarkdown.errors) {
//     console.error(allMarkdown.errors)
//     throw new Error(allMarkdown.errors)
//   }

//   allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     const { slug, layout } = node.fields

//     createPage({
//       path: slug,
//       // This will automatically resolve the template to a corresponding
//       // `layout` frontmatter in the Markdown.
//       //
//       // Feel free to set any `layout` as you'd like in the frontmatter, as
//       // long as the corresponding template file exists in src/templates.
//       // If no template is set, it will fall back to the default `page`
//       // template.
//       //
//       // Note that the template has to exist first, or else the build will fail.
//       component: path.resolve(`./src/templates/${layout || 'page'}.tsx`),
//       context: {
//         // Data passed to context is available in page queries as GraphQL variables.
//         slug
//       }
//     })
//   })
// }
//

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: { $components: path.resolve(__dirname, "src/components") }
    }
  });
};
