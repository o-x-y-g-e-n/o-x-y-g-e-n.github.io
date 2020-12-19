import React from "react"

// import ButtonLink from 'components/ButtonLink'
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import GridTemplate from "../components/GridTemplate"
import ResearchList from '../components/ResearchList'
import Author from "../components/Author"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <GridTemplate>
        <Author fullText />
        <ResearchList />
      </GridTemplate>
    </Layout>
  )
}

export default IndexPage
