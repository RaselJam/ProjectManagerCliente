import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import Layout from './layout/Layout'
import CreateNewProject from './Projects/CreateNewProject'
import Projects from './Projects/Projects'
import * as projectService from '../API/ProjectServic.js'
import Profile from './Profile/Profile'
import Tickets from './Tickets/Tickets'

function Home({ children }) {
  const [theme, setTheme] = useState()
  //handlers:

  const toggleThemeHandler = () => {
    //TODO change the theme
  }
  //
  return (
    <Layout toggleTheme={toggleThemeHandler}>

      <Route exact path="/home">
        <Profile />
      </Route>

      <Route path="/home/tickets">
        <Tickets/>
      </Route>

      <Route path="/home/projects">
        <Projects />
      </Route>

      <Route path="/home/newProject">
        <CreateNewProject />
      </Route>
    </Layout>
  )
}

export default Home
