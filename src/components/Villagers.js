import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import Villager from './villagers/Villager'

export default function Villagers({ match }) {
  return (
    <div>
      <h1>Villagers</h1>
      <Route exact path={match.path} component={() => `Voluptate amet fugiat dolore quis. Ullamco deserunt deserunt veniam dolor. In velit excepteur anim eu velit commodo ullamco eu. Esse et enim minim Lorem mollit irure non culpa consectetur laborum nisi consectetur. Reprehenderit occaecat reprehenderit duis minim nulla laborum ullamco duis incididunt commodo.`} />
      <Route path={`${match.path}/:villager`} component={Villager} />
    </div>
  )
}

Villagers.propTypes = {
  match: PropTypes.object
}
