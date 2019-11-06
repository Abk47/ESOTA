import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'
import Pending from './components/Pending/Pending'
import Delivery from './components/Delivery/Delivery'
import Payment from './components/Payment/Payment'

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/profile' component={Profile} />
        <Route path='/pending' component={Pending} />
        <Route path='/delivery' component={Delivery} />
        <Route path='/payment' component={Payment} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
