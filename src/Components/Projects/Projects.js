import React, { useState, useEffect } from 'react'
import css from '../../index.module.css'
import MainHeader from './ProjectsHeader/MainHeader'
import InfoBar from '../shared/InfoBar/InfoBar'
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

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [isGrid, setIsGrid] = useState(false)

  useEffect(async() => {
    setLoading(true)
    async function loadData() {
      const result = await projectService.getrelatedProjects();
      return result.data.data;
    }
    try {
      const incommingData = await loadData();
      console.log("incomming-data :", incommingData)
      let loadedProjects = incommingData.projects;


      //incomingData:{
      //              projects: {asCreator: Array(1), asManager: Array(1), asDev: Array(2)}
      //              tickets: {done: Array(1), notDone: Array(1)}
      //             }
      setprojectsAsCreator([...loadedProjects.asCreator])
      setprojectsAsManager([...loadedProjects.asManager])
      setprojectsAsDeveloper([...loadedProjects.asDev])


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
  const toggleGridHandler = () => {
    setIsGrid(prevSt => !prevSt)
  }

  //
  return (
    <>
      <Error error={error} />
      {!loading &&
        <div className={css.projectsSection}>
          <MainHeader title="Projects" />
          <InfoBar
            onClick={onToShowChange}
            infoToShow={
              [{ title: 'Own Projects', info: projectsAsCreator.length, identifier: 'projectsAsCreator' }, { title: 'Projects as manager', info: projectsAsManager.length, identifier: 'projectsAsManager' }, { title: 'Projects as Developer', info: projectsAsDeveloper.length, identifier: 'projectsAsDeveloper' }
              ]}
            onToggleGrid={toggleGridHandler} />


          <div className={[css.projectBoxes, (isGrid ? css.jsGridView : '')].join(" ")}>
            {projectsToShow.map(project => (
              <ProjectCart canAddDev={isManagaer} canAddManager={isCreator}  key={project._id} project={project} />
            ))}
          </div>
        </div>
      }
      {loading && <p>Loading ...</p>}

    </>
  )
}

export default Projects
