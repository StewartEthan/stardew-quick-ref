import React from 'react'
import { Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Villager from './villagers/Villager'
import { villagerInfo } from './villagers/villagerInfo'

export default function Villagers({ match }) {
  return (
    <div>
      <h1>Villagers</h1>
      <p>Ea in ut magna occaecat non adipisicing veniam aliquip ullamco officia amet ullamco sint nostrud. Dolor aliquip sunt non consequat nostrud do. Officia et ad qui excepteur voluptate officia. Mollit adipisicing incididunt labore voluptate irure Lorem non laboris voluptate ea irure incididunt magna. Consectetur nisi mollit do deserunt ex adipisicing ad. Sit ex duis consequat adipisicing sint officia qui laboris Lorem anim eiusmod enim ea nisi. Amet labore ea laborum ullamco.</p>
    </div>
  )
}

Villagers.propTypes = {
  match: PropTypes.object
}
