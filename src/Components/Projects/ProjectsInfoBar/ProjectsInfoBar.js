import React from 'react'
// import css from '../../../index.module.css'
// import svgs from '../../../assets/svgs.js'
import InfoBar from '../../shared/InfoBar/InfoBar'

//TODO get Data from context
function ProjectsInfoBar({ infoToShow , onClick}) {
  return (
    <InfoBar onClick={onClick} infoToShow={infoToShow} />
  )
}

export default ProjectsInfoBar
