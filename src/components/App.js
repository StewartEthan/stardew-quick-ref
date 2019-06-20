/** @jsx jsx */

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { css, jsx } from '@emotion/core'
import LoadingIcon from './LoadingIcon'
import '../App.css'

// All routing components should be lazy loaded like this
const Home = React.lazy(() => import('./Home'))
// const Home = React.lazy(() => new Promise(res => setTimeout(res, 2000)).then(() => import('./Home')))
// const Other = React.lazy(() => import('./Other'))

const mainStyle = css`
  background-color: #fff;
  display: grid;
  margin: 0 auto;
  max-width: 750px;
  min-height: 100vh;
  padding: 0 1em;
`

function App() {
  return (
    // Header here
    <Router>
      {/* All routes must go within suspense to support lazy loading */}
      <React.Suspense fallback={<LoadingIcon />}>
        <main css={mainStyle}>
          <Route exact path="/" component={Home} />
          {/* <Route path="/other" component={Other} /> */}
        </main>
      </React.Suspense>
    </Router>
    // Footer here
  )
}

export default App
