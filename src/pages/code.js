import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Code from "../components/Code"

const CodeJsonQuery = graphql`
  query {
    allCodeJson {
      edges {
        node {
          id
          path
          title
          date
          description
          imageSrc {
            relativePath
          }
        }
      }
    }
  }
`

const CodePage = () => {
  const data = useStaticQuery(CodeJsonQuery)

  return (
    <Layout>
      <SEO
        title="Code"
        lang="en"
        description="Check here all my open source projects and some experiences about coding"
      />
      <Code content={data.allCodeJson.edges} />
    </Layout>
  )
}

export default CodePage
