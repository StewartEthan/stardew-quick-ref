import React from 'react'
import PropTypes from 'prop-types'
import { useVillager } from './useVillager'

export default function Villager({ match }) {
  const villagerInfo = useVillager(match.params.villager)
  return villagerInfo ? <div>Villager component for {villagerInfo.name}</div> : `Loading villager details...`
}

Villager.propTypes = {
  match: PropTypes.object
}
