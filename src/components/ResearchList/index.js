import React from 'react'
import ReactGA from 'react-ga'
import { useStaticQuery, graphql } from 'gatsby'

import Button from '../Button'
import ResearchItem from '../ResearchItem'

import * as S from './styled'

const trackClickAllResearch = () => {
  ReactGA.event({
    category: 'Research',
    action: 'click',
    label: `Research - Click to view all Research`
  })
}

const blogListQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(locale: "pt-br", formatString: "DD MMM[,] YYYY")
            description
            title
            tags
          },
          timeToRead
        }
      }
    }
  }
`

const ResearchList = () => {
  const allBlogList = useStaticQuery(blogListQuery)
  const list = allBlogList.allMarkdownRemark.edges

  return (
    <S.ResearchList>
      <S.Title>Latest Blog</S.Title>
      <S.Nav>
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
      </S.Nav>
      <div style={{ textAlign: 'center' }}>
        <Button to='/research/' onClick={() => trackClickAllResearch()}>
          View all posts
        </Button>
      </div >
    </S.ResearchList >
  )
}

export default ResearchList
