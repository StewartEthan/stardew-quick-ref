/** @jsx jsx */

import React from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'
import Villager from './villagers/Villager'
import { villagerInfo } from './villagers/villagerInfo'
import { GlobalContext } from './context/GlobalContext'

const villagerListStyle = css`
  display: grid;
  grid-row-gap: 1em;
  justify-items: start;
`

export default function Villagers({ match }) {
  const { villager: villagerName = `` } = match.params
  const currentRef = React.useRef(null)
  const [ globalState ] = React.useContext(GlobalContext)
  const { headerHeight } = globalState
  React.useEffect(() => {
    if (currentRef && currentRef.current) {
      window.scrollTo(0, currentRef.current.offsetTop - headerHeight)
    }
  }, [ currentRef, headerHeight ])
  return (
    <div>
      <h1>Villagers</h1>
      <p>Please note that this page only includes marriage candidates and the NPCs who can be given gifts. If you're looking for information about any of the other NPCs that aren't in the list below, such as Marlon or Mr. Qi, they can be found <a href="https://stardewvalleywiki.com/Villagers#Non-giftable_NPCs" target="_blank" rel="noreferrer noopener">on the official wiki</a>.</p>
      {/* TODO: Sorting controls */}
      <div css={villagerListStyle}>
        {
          Object.entries(villagerInfo).map(([ key, villager ]) => {
            if (villager.key === villagerName) {
              return <Villager key={key} villager={villager} view="full" ref={currentRef} />
            }
            return <Villager key={key} villager={villager} view="minimal" />
          })
        }
      </div>
    </div>
  )
}

Villagers.propTypes = {
  match: PropTypes.object
}
