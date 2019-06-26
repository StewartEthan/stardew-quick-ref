/** @jsx jsx */

import { css, jsx } from '@emotion/core'
import { routeLinks } from './routing/routes'

const headerStyle = css`
  background-image: linear-gradient(to bottom, #002790, #0373dc);
  max-height: 100vh;
  overflow: auto;
  padding: 0.5em 1em 0.25em;
  position: sticky;
  top: 0;
  z-index: 1;

  nav {
    display: grid;

    a {
      color: #f8ffff;
    }
  }
`

export default function Header() {
  return (
    <header css={headerStyle}>
      <nav>
        {routeLinks}
      </nav>
    </header>
  )
}
