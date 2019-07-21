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

function sortAlpha(villagerA, villagerB) {
  console.log({ a: villagerA, b: villagerB })
  return villagerA.key < villagerB.key ? -1 : 1
}
function sortBirthday(villagerA, villagerB) {}
function sortMarriage(villagerA, villagerB) {}
const sortFns = {
  alpha: sortAlpha,
  bday: sortBirthday,
  marriage: sortMarriage
}
function getVillagers(sortType, sortOrder) {
  const sortFn = sortFns[sortType] || (() => 0)
  console.log({ sortType, sortOrder, sortFn: sortFn.toString() })
  return Object.values(villagerInfo).sort((a, b) => {
    return sortOrder === `desc` ? sortFn(b, a) : sortFn(a, b)
  })

}

export default function VillagerList({ currentVillager }) {
  const currentRef = React.useRef(null)
  const [ sortType, setSortType ] = React.useState(`alpha`)
  const [ sortOrder, setSortOrder ] = React.useState(`asc`)
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
        getVillagers(sortType, sortOrder).map(villager => {
          if (villager.key === currentVillager) {
            return <Villager key={villager.key} villager={villager} view="full" ref={currentRef} />
          }
          return <Villager key={villager.key} villager={villager} view="minimal" />
        })
      }
    </div>
  )
}

VillagerList.propTypes = {
  currentVillager: PropTypes.string
}
