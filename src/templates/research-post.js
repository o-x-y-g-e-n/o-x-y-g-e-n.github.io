import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import GridTemplate from "../components/GridTemplate"
import Content from "../components/Content"

import PostHeader from "../components/PostHeader"
import PostNav from "../components/PostNav"

const ResearchPost = props => {
  const post = props.data.markdownRemark
  const next = props.pageContext.next
  const previous = props.pageContext.previous

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={
          post.frontmatter.image
            ? `https://felipefialho.com${post.frontmatter.image.publicURL}`
            : "https://felipefialho.com/assets/og-image.jpg"
        }
      />
      <GridTemplate>
        <div itemScope itemType="http://schema.org/Article">
          <PostHeader
            image={post.frontmatter.image}
            tags={post.frontmatter.tags}
            date={post.frontmatter.date}
            title={post.frontmatter.title}
            description={post.frontmatter.description}
            timeToRead={post.timeToRead}
          />
          <Content>
            <div
              itemProp="articleBody"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </Content>
          <PostNav previous={previous} next={next} />
        </div>
      </GridTemplate>
    </Layout>
  )
}

export default ResearchPost

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(locale: "en-in", formatString: "DD MMMM YYYY")
        description
        title
        tags
        image {
          id
          publicURL
          childImageSharp {
            fluid(maxWidth: 1280, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      timeToRead
    }
  }
`
