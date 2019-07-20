import React from 'react'
import PropTypes from 'prop-types'

const GlobalContext = React.createContext([ {}, () => {} ])

const GlobalProvider = (props) => {
  const [ globalState, setGlobalState ] = React.useState({})
  return (
    <GlobalContext.Provider value={[ globalState, setGlobalState ]}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalProvider }

GlobalProvider.propTypes ={
  children: PropTypes.any
}
