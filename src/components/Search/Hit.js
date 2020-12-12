import React from "react"
import PropTypes from "prop-types"

import ResearchItem from "../ResearchItem"

const Hit = props => {
  const { hit } = props

  return (
    <ResearchItem
      slug={hit.fields.slug}
      date={hit.date}
      title={hit.title}
      description={hit.description}
      tags={hit.tags}
      timeToRead={hit.timeToRead}
    />
  )
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
}

export default Hit
