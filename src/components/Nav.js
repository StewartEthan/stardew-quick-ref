/** @jsx jsx */

import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { routeLinks } from './routing/routes'

const navStyle = css`
  --nav-column-count: 1;
  background-color: #fbebc2;
  border: 0.5em solid #744514;
  border-left-width: calc(0.5em - 2px);
  border-right-width: calc(0.5em - 2px);
  display: grid;
  grid-row-gap: 1.5em;
  grid-template-columns: repeat(var(--nav-column-count), 1fr);
  justify-content: space-between;
  margin: 0;
  padding: 1em 0;
  position: absolute;
  right: -1em;
  top: 100%;
  transform: translateX(-1em);
  transition: width 130ms ease-in-out, border-width 130ms ease-out;
  width: 100vw;

  &.closed {
    border-left-width: 0;
    border-right-width: 0;
    overflow: hidden;
    transform: translateX(0);
    white-space: pre;
    width: 0;

    a {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  a {
    color: #211122;
    /* padding: 0.75em 0; */
    text-align: center;
  }
  &::before, &::after {
    --size: 0.75em;
    background-color: #57656b;
    border: 3px solid #264651;
    border-radius: 50%;
    box-shadow: 1px 1px 3px #222220;
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

export default function Nav({ open, setOpen }) {
  return (
    <nav css={navStyle} className={open ? `open` : `closed`} onClick={evt => setOpen(evt.target.constructor !== HTMLAnchorElement)}>
      {routeLinks}
    </nav>
  )
}

Nav.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
}
