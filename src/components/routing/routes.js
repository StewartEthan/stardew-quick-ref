import React from 'react'
import { Link } from 'react-router-dom'

export const routes = [
  { url: `/villagers/:villager?`, label: `Villagers`, component: `Villagers` },
  { url: `/bundles`, label: `Bundles`, component: `Bundles` },
  { url: `/skills`, label: `Skills`, component: `Skills` },
  { url: `/minerals`, label: `Minerals`, component: `Minerals` },
  { url: `/artifacts`, label: `Artifacts`, component: `Artifacts` },
  { url: `/fish`, label: `Fish`, component: `Fish` },
  { url: `/festivals`, label: `Festivals`, component: `Festivals` },
  { url: `/crops`, label: `Crops`, component: `Crops` },
  { url: `/artisan`, label: `Artisan Goods`, component: `ArtisanGoods` },
  { url: `/shops`, label: `Shops`, component: `Shops` },
  { url: `/monsters`, label: `Monsters`, component: `Monsters` },
  { url: `/crafting`, label: `Crafting`, component: `Crafting` },
]

export const routeLinks = routes.map(route =>
  <Link to={route.url} key={route.url}>{route.label}</Link>
)
