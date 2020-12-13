import React from "react"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import SEO from "components/Seo"
import ResearchItem from "components/ResearchItem"
import GridTemplate from "components/GridTemplate"
import Pagination from "components/Pagination"
import Search from "components/Search"

const ResearchList = props => {
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/research/" : `/research/page/${currentPage - 1}`
  const nextPage = `/research/page/${currentPage + 1}`

  const list = props.data.allMarkdownRemark.edges
  console.log(list)
  const content = () => {
    return (
      <>
        {list.map(({ node }, i) => (
          <ResearchItem
            key={i}
            slug={node.fields.slug}
            date={node.frontmatter.date}
            title={node.frontmatter.title}
            description={node.frontmatter.description}
            tags={node.frontmatter.tags}
            timeToRead={node.timeToRead}
          />
        ))}
        <Pagination
          currentPage={currentPage}
          numPages={numPages}
          isFirst={isFirst}
          isLast={isLast}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </>
    )
  }

  const algolia = {
    appId: process.env.GATSBY_ALGOLIA_APP_ID,
    searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
  }

  return (
    <Layout>
      <SEO title="Research" />
      <GridTemplate>
        <Search algolia={algolia} callback={content()} props={props} />
      </GridTemplate>
    </Layout>
  )
}

export const BlogListQuery = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
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
          timeToRead
        }
      }
    }
  }
`

export default ResearchList
