import React from 'react'
import PropTypes from 'prop-types'
import VillagerList from './villagers/VillagerList'

export default function Villagers({ match }) {
  const { villager = `` } = match.params
  return (
    <div>
      <h1>Villagers</h1>
      <p>Please note that this page only includes marriage candidates and the NPCs who can be given gifts. If you're looking for information about any of the other NPCs that aren't in the list below, such as Marlon or Mr. Qi, they can be found <a href="https://stardewvalleywiki.com/Villagers#Non-giftable_NPCs" target="_blank" rel="noreferrer noopener">on the official wiki</a>.</p>
      <VillagerList currentVillager={villager} />
    </div>
  )
}

Villagers.propTypes = {
  match: PropTypes.object
}
