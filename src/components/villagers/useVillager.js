import React from 'react'

export function useVillager(villagerName) {
  const [ villager, setVillager ] = React.useState()
  React.useEffect(() => {
    (async function(){
      const villagerInfo = await import(`./${villagerName}`)
      setVillager(villagerInfo.default)
    }())
  }, [ villagerName ])
  return villager
}
