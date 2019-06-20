/** @jsx jsx */

import { css, jsx } from '@emotion/core'
import '../styles/SVBold.css'

const style = css`
  align-content: center;
  background-color: rgba(0,0,0,0.2);
  display: grid;
  font-family: 'SV Bold', 'Courier New', Courier, monospace;
  font-size: 2rem;
  height: 100vh;
  justify-content: center;
  letter-spacing: 0.1rem;
  width: 100vw;
  
  div {
    animation: pulse infinite 1.5s;
    display: inline-block;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`

export default function LoadingIcon() {
  return (
    <div css={style}>
      <div>Loading...</div>
    </div>
  )
}