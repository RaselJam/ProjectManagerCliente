import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Projects from './Projects/Projects'

function Home({ children }) {
  useEffect(() => {
    console.log("efect in home")
  }, [])
  return (
    <Layout>
     <Route path="/home/projects"> <Projects /></Route>
    </Layout>
  )
}

export default Home
