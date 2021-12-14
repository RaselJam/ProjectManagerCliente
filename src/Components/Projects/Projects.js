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
  const [projectsToShow, setProjectsToShow] = useState([])
  const [isManagaer, setIsManagaer] = useState(false)
  const [isCreator, setIsCreator] = useState(false)
  const [ticketsDone, setTicketsDone] = useState([])
  const [ticketsNotDone, setTicketsNotdone] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(async () => {
    setLoading(true)
    async function loadData() {
      const result = await projectService.getrelatedProjects();
      return result.data.data;
    }
    try {
      const incommingData = await loadData();
      console.log("incomming-data :", incommingData)
      let loadedProjects = incommingData.projects;
      let loadedTickets = incommingData.tickets;

      //incomingData:{
      //              projects: {asCreator: Array(1), asManager: Array(1), asDev: Array(2)}
      //              tickets: {done: Array(1), notDone: Array(1)}
      //             }
      setprojectsAsCreator([...loadedProjects.asCreator])
      setprojectsAsManager([...loadedProjects.asManager])
      setprojectsAsDeveloper([...loadedProjects.asDev])
      setTicketsDone([...loadedTickets.done])
      setTicketsNotdone([...loadedTickets.notDone])

      setLoading(false)
      setError('');
    } catch (error) {
      setError(error)
    }

  }, [])
  //handlres :
  const onToShowChange = (toshow) => {
    const options = {
      projectsAsCreator: projectsAsCreator,
      projectsAsManager: projectsAsManager,
      projectsAsDeveloper: projectsAsDeveloper
    }
    setIsManagaer((toshow === 'projectsAsManager'))
    setIsCreator((toshow === 'projectsAsCreator'))
    setProjectsToShow([...options[toshow]])
  }


  //
  return (
    <>
      <Error error={error} />
      {!loading &&
        <div className={css.projectsSection}>
          <ProjectsHeader />
          <ProjectsInfoBar onClick={onToShowChange} infoToShow={[{ title: 'Own Projects', info: projectsAsCreator.length, identifier: 'projectsAsCreator' }, { title: 'Projects as manager', info: projectsAsManager.length, identifier: 'projectsAsManager' }, { title: 'Projects as Developer', info: projectsAsDeveloper.length, identifier: 'projectsAsDeveloper' }]} />
          <div className={css.projectBoxes}>
            {projectsToShow.map(project => (
              <ProjectCart canAddDev={isManagaer} canAddManager={isCreator} c key={project._id} project={project} />
            ))}
          </div>
        </div>
      }
      {loading && <p>Loading ...</p>}

    </>
  )
}

export default Projects
