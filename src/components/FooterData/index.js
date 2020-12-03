import React from "react"

import Container from "../../components/Container"

import * as S from "./styled"

const FooterData = () => {
  return (
    <S.FooterData>
      <Container>
        ©2020 shivamgohel.com
        <a className="link" href="/policies">
          Privacy Policy
        </a>
        <a
          className="link"
          href="https://github.com/felipefialho/felipefialho.com/blob/master/LICENSE"
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
