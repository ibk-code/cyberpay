import React, { Fragment, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Loader from './components/Loader'
import './sass/main.scss'

const Home = lazy(() => import('./screens/home/home'))
const Subscription = lazy(() => import('./screens/subscribtion/subscription'))
const Checkout = lazy(() => import('./screens/checkout/checkout'))

function App() {
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/subscribe" component={Subscription} />
            <Route exact path="/checkout" component={Checkout} />
          </Switch>
        </Router>
      </Suspense>
    </Fragment>
  )
}

export default App
