import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// All routing components to be lazy loaded should be like this
// const Home = React.lazy(() => import('./Home'))
// const Other = React.lazy(() => import('./Other'))

function App() {
  return (
    <Router>
      {/* TODO: Suspense fallback loading component */}
      <React.Suspense fallback="Loading...">
        {/* All routes must go within suspense to support lazy loading */}
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route path="/other" component={Other} /> */}
      </React.Suspense>
    </Router>
  )
}

export default App
