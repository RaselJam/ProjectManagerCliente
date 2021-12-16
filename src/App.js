import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Components/Home'

import Login from './Components/Auth/Login/Login'
import Signup from './Components/Auth/Signup/Signup'





function App() {
  const [loggedUser, setloggedUser] = useState()
  useEffect(() => {
    getcurrentUser()
  }, [])

  const getcurrentUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setloggedUser(user)
      console.log(user)
    }
  }

  return (

    <Switch>
      <Route path="/home" component={() => <Home />} />
      <Route path="/signup" render={(props) => <Signup {...props} />} />
      <Route path="/login" render={(props) => <Login {...props} />} />
      <Route path="/" render={() => <Home />} />

      {loggedUser ?
        <Redirect to="/" />
        :
        <Redirect to="/login" />
      }
    </Switch>
  )
}

export default App
