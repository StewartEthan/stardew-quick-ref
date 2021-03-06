/** @jsx jsx */

import React from 'react'
// import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'
import { Link } from 'react-router-dom'
import personPlaceholder from '../../static/img/villagers/person-placeholder.svg'
import VillagerPortrait from './VillagerPortrait'
import mermaidPendant from '../../static/img/mermaid-pendant.png'

const minimalStyle = css`
  align-items: baseline;
  display: grid;
  grid-column-gap: 0.25em;
  grid-template-columns: auto auto;
`
const fullStyle = css`
  background-color: #363636;
  border-radius: 4px;
  color: #f8ffff;
  display: grid;
  grid-gap: 0.25em;
  grid-template-areas:
    "portrait name hide"
    "portrait bday ."
    "portrait marriage ."
    "gift gift gift";
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto 1fr auto;
  justify-self: stretch;
  padding: 0.375em;
  text-shadow: 1px 1px 4px black;

  & > img {
    grid-area: portrait;
  }
  .name {
    grid-area: name;
    margin-top: 0.25em;
  }
  .bday {
    grid-area: bday;
  }
  .marriage {
    grid-area: marriage;
  }
  a {
    color: currentColor;
    font-size: 0.875em;
    grid-area: hide;
    text-decoration: none;

    &::before, &::after {
      color: transparent;
      transition: color 120ms linear;
      text-shadow: none;
    }
    &::before {
      content: '[ ';
    }
    &::after {
      content: ' ]';
    }
    &:hover {
      &::before, &::after {
        color: currentColor;
        text-shadow: inherit;
      }
    }
  }
`
const marriageCommonStyle = css`
  position: relative;
  .mermaid-pendant {
    --pendant-base-size: 48px;
    --pendant-size: var(--pendant-base-size);
    height: var(--pendant-size);
    width: var(--pendant-size);
  }
`
const marriageMinimalStyle = css`
  .mermaid-pendant {
    --pendant-size: calc(var(--pendant-base-size) / 2);
  }
`

export default React.forwardRef(({ villager, view = `minimal` }, ref) => {
  const styles = [ view === `minimal` ? minimalStyle : fullStyle ]
  if (villager.marriage) {
    styles.push(marriageCommonStyle)
    if (view === `minimal`) styles.push(marriageMinimalStyle)
  }
  if (view === `minimal`) {
    return (
      <div css={styles}>
        <Link to={`/villagers/${villager.key}`}>{villager.name}</Link>
        {villager.marriage ? <img className="mermaid-pendant" src={mermaidPendant} alt="Can be married by player" /> : null}
      </div>)
  }
  const marriageIndicatorStyle = css`
    position: relative;
    &::after {
      color: #7cfc00;
      content: '${villager.marriage ? `✓`: `🚫`}';
      font-size: 24px;
      left: 36px;
      position: absolute;
      top: 24px;
    }
  `
  return <div css={styles} ref={ref}>
    <VillagerPortrait villager={villager.key} alt={`Portrait of ${villager.name}`} marriage={villager.marriage} placeholder={personPlaceholder} />
    <span className="name">{villager.name}</span>
    <span className="bday">{villager.birthday}</span>
    <span className="marriage" css={marriageIndicatorStyle} title={`${villager.name} can${villager.marriage ? `` : `not`} be married by the player`}>
      <img className="mermaid-pendant" src={mermaidPendant} alt={`${villager.name} can${villager.marriage ? `` : `not`} be married by the player`} />
    </span>
    <Link to="/villagers">Hide</Link>
  </div>
})

// Villager.propTypes = {
//   view: PropTypes.oneOf([ `full`, `minimal` ]),
//   villager: PropTypes.shape({
//     key: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     birthday: PropTypes.string.isRequired,
//     marriage: PropTypes.bool.isRequired,
//     gifts: PropTypes.shape({
//       love: PropTypes.arrayOf(`string`),
//       like: PropTypes.arrayOf(`string`),
//       neutral: PropTypes.arrayOf(`string`),
//     }).isRequired
//   }).isRequired,
// }
