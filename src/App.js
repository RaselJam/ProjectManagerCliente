import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Layout from './Components/layout/Layout'
import Login from './Components/Auth/Login/Login'
import Signup from './Components/Auth/Signup/Signup'
import Protected from './Components/Router/Protected'

import * as authService from './API/AuthService'


function App() {
  const [loggedUser, setloggedUser] = useState()
  //handlers :
  const handleLogedIn = () => {

  }
  //

  return (

    <Switch>
    <Route path="/" exact render={() => <Home />} />
    <Route path="/home" render={() => <Layout />} />


    {loggedUser ?
      <Redirect to="coaster-list" />
      :
      <>
        <Route path="/signup" render={(props) => <SignupPage {...props} storeUser={this.storeUser} />} />
        <Route path="/login" render={(props) => <LoginPage {...props} storeUser={this.storeUser} />} />
      </>
    }
  </Switch>
  )
}

export default App
