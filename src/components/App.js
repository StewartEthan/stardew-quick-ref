import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import LoadingIcon from './LoadingIcon'

// All routing components to be lazy loaded should be like this
// const Home = React.lazy(() => import('./Home'))
// const Other = React.lazy(() => import('./Other'))

function App() {
  return (
    <Router>
      <LoadingIcon />
      <React.Suspense fallback={<LoadingIcon />}>
        {/* All routes must go within suspense to support lazy loading */}
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route path="/other" component={Other} /> */}
      </React.Suspense>
    </Router>
  )
}

export default App
