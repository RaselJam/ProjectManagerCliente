import React from 'react'
import css from '../../index.module.css'
import ProjectsHeader from './ProjectsHeader/ProjectsHeader'
import ProjectsInfoBar from './ProjectsInfoBar/ProjectsInfoBar'
import * as mocks from '../../Mock/mockData.js'
import ProjectCart from './ProjectCart'

function Projects() {
  console.log( mocks.projects)
  return (
    <div className={css.projectsSection}>
      <ProjectsHeader />
      <ProjectsInfoBar />
      <div class={[css.projectBoxes,css.jsGridView].join(" ")}>
      {mocks.projects.map(project => (
        <ProjectCart key={PromiseRejectionEvent._id} project={project} />
      ))}
    </div>
    </div>
  )
}

export default Projects
