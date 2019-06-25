/** @jsx jsx */

import { Link } from 'react-router-dom'
import { css, jsx } from '@emotion/core'

const navStyle = css`
  --nav-column-count: 1;
  background-color: #fbebc2;
  border: 0.5em solid #744514;
  border-left-width: calc(0.5em - 2px);
  border-right-width: calc(0.5em - 2px);
  display: grid;
  grid-template-columns: repeat(var(--nav-column-count), 1fr);
  justify-content: space-between;
  margin: 0.5em auto 2em;
  padding: 1em 0;
  position: relative;
  transform: translateX(-1em);
  width: calc(100% + 2em);
  a {
    color: #211122;
    padding: 0.75em 0;
    text-align: center;
  }
  &::before, &::after {
    --size: 0.75em;
    background-color: #57656b;
    border: 3px solid #264651;
    border-radius: 50%;
    content: '';
    height: var(--size);
    position: absolute;
    top: calc(var(--size) / -2);
    width: var(--size);
  }
  &::before {
    left: var(--size);
  }
  &::after {
    right: var(--size);
  }
  @media screen and (min-width: 400px) {
    --nav-column-count: 2;
  }
  @media screen and (min-width: 650px) {
    --nav-column-count: 3;
  }
  @media screen and (min-width: 750px) {
    --nav-column-count: 4;
  }
`

export default function HomeLinks() {
  return (
    <nav css={navStyle}>
      <Link to="/villagers">Villagers</Link>
      <Link to="/buildings">Buildings</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/minerals">Minerals</Link>
      <Link to="/artifacts">Artifacts</Link>
      <Link to="/fish">Fish</Link>
      <Link to="/festivals">Festivals</Link>
      <Link to="/crops">Crops</Link>
      <Link to="/artisan">Artisan</Link>
      <Link to="/shops">Shops</Link>
      <Link to="/monsters">Monsters</Link>
      <Link to="/crafting">Crafting</Link>
    </nav>
  )
}
