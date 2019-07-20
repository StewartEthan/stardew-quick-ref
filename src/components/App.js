/** @jsx jsx */

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { css, jsx } from '@emotion/core'
import { GlobalProvider } from './context/GlobalContext'
import LoadingIcon from './LoadingIcon'
import Header from './Header'
import { routes } from './routing/routes'
import { useHeaderHeight } from './hooks/useHeaderHeight'
import '../App.css'

// All routing components should be lazy loaded like this
const Home = React.lazy(() => import(`./Home`))
// const Home = React.lazy(() => new Promise(res => setTimeout(res, 2000)).then(() => import(`./Home`)))
const routeComponents = routes.reduce((components, route) => {
  components[route.component] = React.lazy(() => import(`./${route.component}`))
  return components
}, {})

const mainStyle = css`
  background-color: #f8ffff;
  box-shadow: 0 10px 25px #222220;
  display: grid;
  margin: 0 auto;
  max-width: 750px; /* Ensure the content can't get too wide */
  padding: 0 1em;
  width: 100vw; /* Allows the content to fill the page */
`

function App() {
  return (
    <Router>
      <GlobalProvider>
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
      </GlobalProvider>
    </Router>
  )
}

export default App
