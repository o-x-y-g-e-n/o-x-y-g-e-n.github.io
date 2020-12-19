import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ReactGA from "react-ga"

import * as S from "./styled"

const trackClick = item => {
  ReactGA.event({
    category: "Social",
    action: "click",
    label: `Social - ${item}`,
  })
}

const Social = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              linkedinLink
              githubLink
              mediumLink
              gmailLink
            }
          }
        }
      }
    `
  )

  return (
    <S.Social>
      <S.SocialItem
        href={site.siteMetadata.social.githubLink}
        title="Github"
        onClick={() => trackClick("Github")}
      >
        <S.SocialGithub />
      </S.SocialItem>
      <S.SocialItem
        href={site.siteMetadata.social.linkedinLink}
        title="LinkedIn"
        onClick={() => trackClick("LinkedIn")}
      >
        <S.SocialLinkedin />
      </S.SocialItem>
      <S.SocialItem
        href={site.siteMetadata.social.mediumLink}
        title="Medium"
        onClick={() => trackClick("Medium")}
      >
        <S.SocialMedium />
      </S.SocialItem>
      <S.SocialItem
        href={site.siteMetadata.social.gmailLink}
        title="Mail"
        onClick={() => trackClick("Gmail")}
      >
        <S.SocialGmail />
      </S.SocialItem>
    </S.Social>
  )
}

export default Social
