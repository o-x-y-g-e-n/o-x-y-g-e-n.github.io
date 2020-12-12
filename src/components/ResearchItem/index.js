import React from "react"
import PropTypes from "prop-types"
import ReactGA from "react-ga"

import { getActiveTheme } from "../../utils/themes"
import DateTime from "components/DateTime"
import BoxHandler from "components/BoxHandler"
import Tags from "components/Tags"

import * as S from "./styled"

const trackClick = ({ item, label }) => {
  ReactGA.event({
    category: "Research",
    action: "click",
    label: `${label || "Research List"} - Go to ${item}`,
  })
}

const ResearchItem = ({
  slug,
  date,
  timeToRead,
  title,
  tags,
  description,
  isMini,
}) => {
  return (
    <S.ResearchItem
      to={`/${slug}`}
      cover
      direction="down"
      duration={1}
      title={title}
      bg={getActiveTheme()}
      onClick={() => trackClick(title)}
    >
      <BoxHandler>
        {date && (
          <DateTime>
            {date}
            {timeToRead && <span> · {timeToRead} min read</span>}
          </DateTime>
        )}
        <S.Title isMini={isMini}>{title}</S.Title>
        {description && <S.Subtitle>{description}</S.Subtitle>}
        {tags && <Tags tags={tags} />}
      </BoxHandler>
    </S.ResearchItem>
  )
}

ResearchItem.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  timeToRead: PropTypes.number,
  tags: PropTypes.array,
  description: PropTypes.string,
  isMini: PropTypes.bool,
}

export default ResearchItem
