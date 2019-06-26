/** @jsx jsx */

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { css, jsx } from '@emotion/core'
import LoadingIcon from './LoadingIcon'
import Header from './Header'
import { routes } from './routing/routes'
import '../App.css'

// All routing components should be lazy loaded like this
const Home = React.lazy(() => import(`./Home`))
const routeComponents = routes.reduce((components, route) => {
  components[route.component] = React.lazy(() => import(`./${route.component}`))
  return components
}, {})
// const Home = React.lazy(() => new Promise(res => setTimeout(res, 2000)).then(() => import('./Home')))

const mainStyle = css`
  background-color: #f8ffff;
  /* box-shadow: 0 10px 25px #222220; */
  display: grid;
  margin: 0 1em;
  max-width: 750px;
  min-height: 100vh;
  padding: 0 1em;
`

function App() {
  return (
    <Router>
      <Header />
      {/* All routes must go within suspense to support lazy loading */}
      <React.Suspense fallback={<LoadingIcon />}>
        <main css={mainStyle}>
          <Route exact path="/" component={Home} />
          {routes.map(route =>
            <Route path={route.url} component={routeComponents[route.component]} key={route.label} />
          )}
        </main>
      </React.Suspense>
      {/* Footer here */}
    </Router>
  )
}

export default App
