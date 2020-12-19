import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import GridTemplate from "../components/GridTemplate"
import Author from "../components/Author"
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="A bit about me" />
      <GridTemplate>
        <Author fullText={true} />
      </GridTemplate>
    </Layout>
  )
}

export default IndexPage
