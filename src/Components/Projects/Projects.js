import React, { useState, useEffect } from 'react'
import css from '../../index.module.css'
import ProjectsHeader from './ProjectsHeader/ProjectsHeader'
import ProjectsInfoBar from './ProjectsInfoBar/ProjectsInfoBar'
import Error from '../shared/Error'
import ProjectCart from './ProjectCart'
import * as projectService from '../../API/ProjectServic.js'

function Projects() {
  const [projectsAsCreator, setprojectsAsCreator] = useState([])
  const [projectsAsManager, setprojectsAsManager] = useState([])
  const [projectsAsDeveloper, setprojectsAsDeveloper] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(async () => {
    setLoading(true)
    try {
      const projetcsAsCreator = await projectService.getrelatedProjects();
      console.log(projetcsAsCreator)
      setLoading(false)
    } catch (error) {
      setError(error)
    }

  }, [])
  return (
    <>
      <Error error={error} />
      {!loading &&
        <div className={css.projectsSection}>
          <ProjectsHeader />
          <ProjectsInfoBar />
        </div>
      }
      {loading && <p>Loading ...</p>}
    </>
  )
}

export default Projects
