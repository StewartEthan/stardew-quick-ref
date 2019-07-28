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
  grid-template-areas:
    "filter"
    "sort-type"
    "sort-order";
  grid-template-columns: 1fr;
  grid-gap: 0.5em;
  justify-content: start;
  margin-bottom: 1em;

  label {
    grid-area: filter;

    input {
      appearance: none;
      width: 100%;

      &::-webkit-search-cancel-button {
        cursor: pointer;
        margin-bottom: 0.25em;
        transform: scale(1.5);
      }
    }
  }

  @media screen and (min-width: 600px) {
    grid-template-areas:
      "filter filter"
      "sort-type sort-order";
    grid-template-columns: repeat(2, 1fr);
  }
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
function getVillagers(sortType, sortOrder, filterParam = ``) {
  const sortFn = sortFns[sortType] || (() => 0)
  const filter = new RegExp(filterParam, `i`)
  return Object.values(villagerInfo)
    // TODO: Potential future improvements:
    // - fuzzy match
    // - search by gift prefs
    .filter(villager => {
      const { name, birthday, key } = villager
      return [ key, name, birthday ].some(prop => filter.test(prop))
    })
    .sort((a, b) => {
      return sortOrder === `desc` ? sortFn(b, a) : sortFn(a, b)
    })

}

export default function VillagerList({ currentVillager }) {
  const currentRef = React.useRef(null)
  const [ sortType, setSortType ] = React.useState(`alpha`)
  const [ sortOrder, setSortOrder ] = React.useState(`asc`)
  const [ filter, setFilter ] = React.useState(``)
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
  function getOptionBackground(state) {
    if (state.isSelected) return { backgroundImage: `linear-gradient(to bottom, #002790, #0373dc)` }
    if (state.isFocused) return { backgroundColor: `rgba(3, 115, 220, 0.25)` }
    return { backgroundColor: `#f8ffff` }
  }
  const selectStyleOverrides = {
    control: styles => ({ ...styles, backgroundColor: `#f8ffff` }),
    option: (styles, state) => ({
      ...styles,
      ...getOptionBackground(state),
      color: state.isSelected ? `#f8ffff` : `#222220`
    }),
  }
  return (
    <>
      <div css={villagerControlStyle}>
        <label for="villagerFilterInput">
          <input id="villagerFilterInput" type="search" placeholder="Type to filter by name or birthday" onChange={evt => setFilter(evt.target.value)} />
        </label>
        <Select onChange={option => setSortType(option.value)} defaultValue={sortTypeOptions[0]} options={sortTypeOptions} styles={selectStyleOverrides} isSearchable={false} />
        <Select onChange={option => setSortOrder(option.value)} defaultValue={sortOrderOptions[0]} options={sortOrderOptions} styles={selectStyleOverrides} isSearchable={false} />
      </div>
      <div css={villagerListStyle}>
        {
          getVillagers(sortType, sortOrder, filter).map(villager => {
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
