import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import LoadingIcon from './LoadingIcon'
import '../App.css'

// All routing components should be lazy loaded like this
const Home = React.lazy(() => import('./Home'))
// const Other = React.lazy(() => import('./Other'))

function App() {
  return (
    <Router>
      {/* <LoadingIcon /> */}
      {/* All routes must go within suspense to support lazy loading */}
      <React.Suspense fallback={<LoadingIcon />}>
        <Route exact path="/" component={Home} />
        {/* <Route path="/other" component={Other} /> */}
      </React.Suspense>
    </Router>
  )
}

export default App
