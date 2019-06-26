/** @jsx jsx */

import { Link } from 'react-router-dom'
import { css, jsx } from '@emotion/core'
import { routes } from './routing/routes'

const headerStyle = css`
  background-color: #ddf;
  padding: 0.5em 1em 0.25em;
  position: sticky;
  top: 0;
  z-index: 1;

  nav {
    display: grid;
    grid-auto-flow: column;
  }
`

export default function Header() {
  return (
    <header css={headerStyle}>
      <nav>
        {routes.map(route =>
          <Link to={route.url} key={route.url}>{route.label}</Link>
        )}
      </nav>
    </header>
  )
}
