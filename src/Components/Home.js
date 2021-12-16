import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import Layout from './layout/Layout'
import CreateNewProject from './Projects/CreateNewProject'
import Projects from './Projects/Projects'
import * as projectService from '../API/ProjectServic.js'
import Profile from './Profile/Profile'
import Tickets from './Tickets/Tickets'
import ProjectDetail from './Projects/ProjectDetail/ProjectDetail'

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

      <Route exact path="/home/projects">
        <Projects />
      </Route>
      <Route exact path="/home/projects/:id">
        <ProjectDetail/>
      </Route>
      <Route path="/home/newProject">
        <CreateNewProject />
      </Route>
    </Layout>
  )
}

export default Home
