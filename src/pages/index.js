import React from "react"
import ReactGA from "react-ga"

// import ButtonLink from 'components/ButtonLink'
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import GridTemplate from "../components/GridTemplate"
// import BlogList from '../../components/BlogList'
import Author from "../components/Author"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <GridTemplate>
        <Author fullText/>
        {/* <BlogList /> */}
      </GridTemplate>
    </Layout>
  )
}

export default IndexPage
