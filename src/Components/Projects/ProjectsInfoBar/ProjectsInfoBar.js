import React from 'react'
// import css from '../../../index.module.css'
// import svgs from '../../../assets/svgs.js'
import InfoBar from '../../shared/InfoBar/InfoBar'
import * as mock from '../../../Mock/mockData.js'
//TODO get Data from context
function ProjectsInfoBar() {
  return (
    <InfoBar infoToShow={mock.infoToShow} />
  )
}

export default ProjectsInfoBar
