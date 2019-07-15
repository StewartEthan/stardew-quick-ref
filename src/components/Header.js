/** @jsx jsx */

import React from 'react'
import { css, jsx } from '@emotion/core'
import { Link } from 'react-router-dom'
import { routeLinks } from './routing/routes'
import Nav from './Nav'

const headerStyle = css`
  /* background-image: linear-gradient(to bottom, #002790, #0373dc); */
  background-color: #222220;
  color: #f8ffff;
  max-height: 100vh;
  padding: 0.3em 1em;
  position: sticky;
  top: 0;
  z-index: 1;

  .heading {
    color: #f8ffff;
    margin: 0;
  }

  @media screen and (min-width: 600px) {
    .mobile-heading {
      display: none;
    }
  }
  @media screen and (max-width: 599px) {
    .desktop-heading {
      display: none;
    }
  }
`

export default function Header() {
  const [ menuOpen, setMenuOpen ] = React.useState(false)
  return (
    <>
      <header css={headerStyle}>
        <Link to="/">
          <h1 className="heading desktop-heading">Stardew Valley Reference</h1>
          <h1 className="heading mobile-heading">SDV Ref</h1>
        </Link>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {/* MOBILE ICON GOES HERE */}
          <span>Menu</span>
        </button>
        <Nav open={menuOpen}>
          {routeLinks}
        </Nav>
      </header>
    </>
  )
}
