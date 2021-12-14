import React from 'react'
import css from '../../../index.module.css'

function ProjectsHeader() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let today = new Date();

  today.toLocaleDateString("en-US", options)
  return (
    <div className={css.projectsSectionHeader}>
      <p>Projects</p>
      <p className={css.time}>{today.toLocaleDateString("en-US", options)}</p>
    </div>
  )
}

export default ProjectsHeader
