'use strict'

module.exports = {
  siteMetadata: {
    title: 'Deep Learning with Javascript',
    description: 'DLJS',
    siteUrl: 'https://dljsbook.com',
    author: {
      name: 'Kevin Scott',
    }
  },
  plugins: [
    // I *think* this conflicts with Gumroad
    // {
    //   resolve:'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: 'UA-112845439-6',
    //   },
    // },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/favicon.png',
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_self",
              rel: "nofollow"
            }
          },
          // 'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://dljsbook.com',
      }
    },
    {
      resolve: 'gatsby-remark-toc',
      options: {
        header: 'Table of Contents', // the custom header text
        include: [
          'content/**/*.(md|mdx)' // an include glob to match against
        ],
        // mdastUtilTocOptions: {
        //   maxDepth: 2
        // }
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
