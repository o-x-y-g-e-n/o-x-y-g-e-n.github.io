const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const researchPost = path.resolve(`./src/templates/research-post.js`)

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                date(locale: "en-in", formatString: "DD MMM[,] YYYY")
                description
                title
                tags
              }
            }
            next {
              fields {
                slug
              }
              frontmatter {
                title
                date(locale: "en-in", formatString: "DD MMM[,] YYYY")
              }
            }
            previous {
              fields {
                slug
              }
              frontmatter {
                title
                date(locale: "en-in", formatString: "DD MMM[,] YYYY")
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) throw result.errors

    // Create research posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
        component: researchPost,
        context: {
          slug: node.fields.slug,
          // the order is different here because of the DESC order
          previous: next,
          next: previous,
        },
      })
    })

    // Create research post list pages
    const postsPerPage = 10
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/research/` : `/research/page/${i + 1}`,
        component: path.resolve("./src/templates/research-list.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  fmImagesToRelative(node)

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `research` })
    createNodeField({
      node,
      name: `slug`,
      value: `research/${slug.slice(12)}`,
    })
  }
}
