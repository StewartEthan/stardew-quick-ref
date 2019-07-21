/** @jsx jsx */

import React from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'
import Select from 'react-select'

import { GlobalContext } from '../context/GlobalContext'
import Villager from './Villager'
import { villagerInfo } from './villagerInfo'

const villagerControlStyle = css`
  display: grid;
  font-size: 0.75em;
  grid-column-gap: 0.5em;
  grid-template-columns: repeat(2, 1fr);
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
  console.log({ sortType, sortOrder })
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
  const sortTypeOptions = [
    { value: `alpha`, label: `Sort Alphabetically` },
    { value: `bday`, label: `Sort by Birthday` },
    { value: `marriage`, label: `Sort by Marriage Status` },
  ]
  const sortOrderOptions = [
    { value: `asc`, label: `Sort Ascending` },
    { value: `desc`, label: `Sort Descending` },
  ]
  return (
    <>
      <div css={villagerControlStyle}>
        <Select onChange={option => setSortType(option.value)} defaultValue={sortTypeOptions[0]} options={sortTypeOptions} />
        <Select onChange={option => setSortOrder(option.value)} defaultValue={sortOrderOptions[0]} options={sortOrderOptions} />
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
