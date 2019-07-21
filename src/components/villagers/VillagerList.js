/** @jsx jsx */

import React from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'

import { GlobalContext } from '../context/GlobalContext'
import Villager from './Villager'
import { villagerInfo } from './villagerInfo'

const villagerControlStyle = css`
  display: grid;
  grid-column-gap: 0.5em;
  grid-template-columns: auto auto;
  justify-content: start;
  margin-bottom: 1em;
`
const villagerListStyle = css`
  display: grid;
  grid-row-gap: 1em;
  justify-items: start;
  padding-bottom: 1em;
`

function sortAlpha(villagerA, villagerB) {
  return villagerA.key < villagerB.key ? -1 : 1
}
const seasons = [ `spring`,`summer`,`fall`,`winter` ]
function sortBirthday(villagerA, villagerB) {
  const [ seasonNameA, dayA ] = villagerA.birthday.split(` `)
  const [ seasonNameB, dayB ] = villagerB.birthday.split(` `)
  const seasonA = seasons.indexOf(seasonNameA.toLowerCase())
  const seasonB = seasons.indexOf(seasonNameB.toLowerCase())
  if (seasonA !== seasonB) return seasonA - seasonB
  return Number(dayA) - Number(dayB)
}
function sortMarriage(villagerA, villagerB) {
  if (villagerA.marriage && !villagerB.marriage) return -1
  if (!villagerA.marriage && villagerB.marriage) return 1
  return villagerA.key < villagerB.key ? -1 : 1
}
const sortFns = {
  alpha: sortAlpha,
  bday: sortBirthday,
  marriage: sortMarriage
}
function getVillagers(sortType, sortOrder) {
  const sortFn = sortFns[sortType] || (() => 0)
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
    <>
      <div css={villagerControlStyle}>
        <select onChange={evt => setSortType(evt.target.value)}>
          <option value="alpha" selected>Sort Alphabetically</option>
          <option value="bday">Sort by Birthday</option>
          <option value="marriage">Sort by Marriage Status</option>
        </select>
        <select onChange={evt => setSortOrder(evt.target.value)}>
          <option value="asc" selected>Sort Ascending</option>
          <option value="desc">Sort Descending</option>
        </select>
      </div>
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
    </>
  )
}

VillagerList.propTypes = {
  currentVillager: PropTypes.string
}
