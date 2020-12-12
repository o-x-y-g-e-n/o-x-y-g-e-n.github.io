import React from "react"
import ReactGA from "react-ga"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

import DateTime from "../../components/DateTime"
import BoxHandler from "../../components/BoxHandler"

import * as S from "./styled"

const trackClickCode = item => {
  ReactGA.event({
    category: "Code",
    action: "click",
    label: `Code - Going to ${item}`,
  })
}

const CodeImg = ({ imageSrc }) => {
  const { images } = useStaticQuery(
    graphql`
      query {
        images: allFile(filter: { sourceInstanceName: { eq: "code" } }) {
          edges {
            node {
              extension
              relativePath
              childImageSharp {
                fluid(maxWidth: 300, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  )

  const image = images.edges.find(image => {
    return image.node.relativePath === imageSrc.relativePath
  })

  return <S.Image fluid={image.node.childImageSharp.fluid} />
}

const Code = ({ content }) => {
  return (
    <S.CodeList>
      {content.map(({ node }) => {
        return (
          <S.CodeItem
            key={node.id}
            href={node.path}
            title={node.title}
            type={node.type}
            onClick={() => trackClickCode}
          >
            <BoxHandler>
              <CodeImg imageSrc={node.imageSrc} />
              <DateTime>{node.date}</DateTime>
              <S.Title>{node.title}</S.Title>
              <S.Text>{node.description}</S.Text>
            </BoxHandler>
          </S.CodeItem>
        )
      })}
    </S.CodeList>
  )
}

Code.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Code
