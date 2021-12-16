import React from 'react'

import InfoBar from '../../shared/InfoBar/InfoBar'


function ProjectsInfoBar({ infoToShow , onClick, onToggleGrid}) {
  return (
    <InfoBar onClick={onClick} infoToShow={infoToShow} onToggleGrid={onToggleGrid}/>
  )
}

export default ProjectsInfoBar
