/** @jsx jsx */

import React from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'

import { GlobalContext } from '../context/GlobalContext'
import Villager from './Villager'
import { villagerInfo } from './villagerInfo'

const villagerListStyle = css`
  display: grid;
  grid-row-gap: 1em;
  justify-items: start;
  padding-bottom: 1em;
`

function getVillagers(sortFn) {
  return Object.entries(villagerInfo)// .sort(sortFn)
}
// function sortAlpha(villagerA, villagerB) {}
// function sortBirthday(villagerA, villagerB) {}
// function sortMarriage(villagerA, villagerB) {}

export default function VillagerList({ currentVillager }) {
  const currentRef = React.useRef(null)
  const [ globalState ] = React.useContext(GlobalContext)
  const { headerHeight } = globalState
  React.useEffect(() => {
    if (currentRef && currentRef.current) {
      window.scrollTo(0, currentRef.current.offsetTop - headerHeight)
    }
  }, [ currentRef, headerHeight ])
  return (
    // Controls somewhere
    <div css={villagerListStyle}>
      {
        getVillagers(villagerInfo).map(([ key, villager ]) => {
          if (villager.key === currentVillager) {
            return <Villager key={key} villager={villager} view="full" ref={currentRef} />
          }
          return <Villager key={key} villager={villager} view="minimal" />
        })
      }
    </div>
  )
}

VillagerList.propTypes = {
  currentVillager: PropTypes.string
}
