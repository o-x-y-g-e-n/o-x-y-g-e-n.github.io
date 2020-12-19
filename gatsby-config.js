const path = require(`path`)
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// const queries = require("./src/utils/algolia")

const feeds = [
  {
    serialize: ({ query: { site, allMarkdownRemark } }) => {
      return allMarkdownRemark.edges.map(edge => {
        const postUrl = path.join(
          site.siteMetadata.siteUrl,
          edge.node.fields.slug
        )
        return Object.assign({}, edge.node.frontmatter, {
          description: edge.node.frontmatter.description,
          date: edge.node.frontmatter.date,
          url: postUrl,
          guid: postUrl,
          custom_elements: [{ "content:encoded": edge.node.html }],
        })
      })
    },
    query: `
      {
        allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                description
                date
              }
              excerpt(truncate: true, pruneLength: 500, format: HTML)
            }
          }
        }
      }
    `,
    output: "/feed.xml",
    title: "Shivam Gohel - RSS Feed",
  },
]

const plugins = [
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    // keep as first gatsby-source-filesystem plugin for gatsby image support
    resolve: "gatsby-source-filesystem",
    options: {
      path: `${__dirname}/static/assets`,
      name: "uploads",
    },
  },
  {
    // keep as first gatsby-source-filesystem plugin for gatsby image support
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content/assets`,
      name: `assets`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content/research`,
      name: `research`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content/code`,
      name: `code`,
    },
  },
  `gatsby-transformer-json`,
  "gatsby-plugin-resolve-src",
  `gatsby-plugin-transition-link`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-styled-components`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `gatsby-starter-default`,
      short_name: `starter`,
      start_url: `/`,
      background_color: `#663399`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Shivam Gohel`,
      short_name: `shivamgohel.com`,
      start_url: `/`,
      background_color: `#fcfcfc`,
      theme_color: `#111111`,
      display: `minimal-ui`,
      icon: `content/assets/icon.svg`,
    },
  },
  {
    resolve: `gatsby-plugin-feed`,
    options: {
      query: `
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
            site_url: siteUrl
          }
        }
      }
    `,
      feeds,
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: "gatsby-remark-relative-images",
        },
        {
          resolve: "@pauliescanlon/gatsby-remark-sticky-table",
        },
        {
          resolve: "gatsby-remark-images-zoom",
        },
        {
          resolve: `gatsby-remark-images`,
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 650,
            linkImagesToOriginal: false,
          },
        },
        {
          resolve: "gatsby-remark-copy-linked-files",
          options: {
            destinationDir: `static/assets/`,
          },
        },
        {
          resolve: `gatsby-remark-responsive-iframe`,
          options: {
            wrapperStyle: `margin-bottom: 1.0725rem`,
          },
        },
        {
          resolve: `@raae/gatsby-remark-oembed`,
          options: {
            usePrefix: false,
            providers: {
              include: ["Youtube", "Twitter", "Codepen"],
              exclude: ["Reddit", "Flickr", "Instagram"],
            },
          },
        },
        `gatsby-plugin-catch-links`,
        `gatsby-remark-lazy-load`,
        `gatsby-remark-prismjs`,
        `gatsby-remark-external-links`,
        `gatsby-remark-smartypants`,
      ],
    },
  },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
]

if (process.env.CONTEXT === "production") {
  // const algolia = {
  //   resolve: `npm install --save gatsby-plugin-algolia-search`,
  //   options: {
  //     appId: process.env.GATSBY_ALGOLIA_APP_ID,
  //     apiKey: process.env.ALGOLIA_ADMIN_KEY,
  //     queries,
  //     chunkSize: 10000, // default: 1000
  //     enablePartialUpdates: true,
  //   },
  // }

  const analytics = {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GOOGLE_ANALYTICS_ID,
      head: false,
    },
  }

  // plugins.push(algolia)
  plugins.push(analytics)
}

module.exports = {
  siteMetadata: {
    name: "Shivam Gohel",
    title: `Shivam Gohel - Full Stack Developer`,
    short_name: "shivamgohel.com",
    start_url: "/",
    background_color: `#fcfcfc`,
    siteUrl: "localhost:8000",
    theme_color: `#111111`,
    display: `minimal-ui`,
    author: "Shivam Gohel",
    description: `Shivam Gohel's personal website.`,
    position: "Front-end Developer",
    social: {
      linkedinLink: `https://www.linkedin.com/in/shivamgohel/`,
      githubLink: `https://github.com/o-x-y-g-e-n`,
      mediumLink: `https://medium.com/@shivamgohel777`,
      gmailLink: 'mailto:shivamgohel777@gmail.com'
    },
  },
  plugins,
}
