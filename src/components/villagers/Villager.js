import React from 'react'
import PropTypes from 'prop-types'

export default function Villager({ villager }) {
  return villager ? <div>Villager component for {villager.name}</div> : `No valid villager provided`
}

Villager.propTypes = {
  villager: PropTypes.object.isRequired
}
