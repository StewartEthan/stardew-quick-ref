/** @jsx jsx */

import React from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'

const portraitStyle = css`
  background-color: #daad72;
  border: 6px ridge #ad6d00;
  height: 128px;
  width: 128px;
`

export default function VillagerPortrait({ villager, alt, placeholder = ``, marriage }) {
  const [ portrait, setPortrait ] = React.useState(placeholder)
  React.useEffect(() => {
    import(`../../static/img/villagers/${villager}-portrait.png`).then(img => setPortrait(img.default))
  }, [ villager ])
  return <img css={portraitStyle} src={portrait} alt={alt} />
}

VillagerPortrait.propTypes = {
  villager: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  placeholder: PropTypes.oneOfType(`string`, `object`),
  marriage: PropTypes.bool.isRequired
}
