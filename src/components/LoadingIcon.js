/** @jsx jsx */

import { css, jsx } from '@emotion/core'
import '../styles/SVBold.css'

const style = css`
  align-content: center;
  background-color: rgba(0,0,0,0.2);
  color: #cfffff;
  display: grid;
  font-family: 'SV Bold', 'Courier New', Courier, monospace;
  font-size: 2rem;
  height: 100vh;
  justify-content: center;
  letter-spacing: 0.1rem;
  text-shadow: 3px 3px #00002a;
  width: 100vw;
  
  div {
    animation: pulse infinite cubic-bezier(0.455, 0.03, 0.515, 0.955) 1600ms;
    display: inline-block;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(0.95); }
    50% { transform: scale(1); }
  }
`

export default function LoadingIcon() {
  return (
    <div css={style}>
      <div>Loading...</div>
    </div>
  )
}
