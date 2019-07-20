import React from 'react'
import { GlobalContext } from '../context/GlobalContext'

export function useHeaderHeight() {
  const [ globalState, setGlobalState ] = React.useContext(GlobalContext)
  const headerRef = React.useCallback(node => {
    if (node) {
      setGlobalState({ ...globalState, headerHeight: node.offsetHeight })
    }
  }, [])
  return [ globalState.height, headerRef ]
}
