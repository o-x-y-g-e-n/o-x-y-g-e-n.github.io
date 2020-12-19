import React from "react"

import Container from "../../components/Container"

import * as S from "./styled"

const FooterData = () => {
  return (
    <S.FooterData>
     <Container>
        ©2020 o-x-y-g-e-n.github.io
        <a className="link" href="/policies">
          Privacy Policy
        </a>
        <a
          className="link"
          href="https://github.com/o-x-y-g-e-n/o-x-y-g-e-n.github.io/blob/master/LICENSE"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms of Use
        </a>
      </Container>
    </S.FooterData>
  )
}

export default FooterData
