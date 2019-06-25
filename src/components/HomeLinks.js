import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeLinks() {
  return <nav>
    <ul>
      <li><Link to="/villagers">Villagers</Link></li>
      <li><Link to="/buildings">Buildings</Link></li>
      <li><Link to="/skills">Skills</Link></li>
      <li><Link to="/minerals">Minerals</Link></li>
      <li><Link to="/artifacts">Artifacts</Link></li>
      <li><Link to="/fish">Fish</Link></li>
      <li><Link to="/festivals">Festivals</Link></li>
      <li><Link to="/crops">Crops</Link></li>
      <li><Link to="/artisan">Artisan</Link></li>
      <li><Link to="/shops">Shops</Link></li>
      <li><Link to="/monsters">Monsters</Link></li>
      <li><Link to="/crafting">Crafting</Link></li>
    </ul>
  </nav>
}
