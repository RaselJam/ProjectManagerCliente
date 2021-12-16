import React, { useState } from 'react'
import SingleNavLink from './SingleNavLink'
import * as svgs from '../../../assets/svgs.js'
import css from '../../../index.module.css'

function Sidebar() {
  const [active, setActive] = useState(0)


  return (
    <div className={css.appSidebar}>
      <SingleNavLink  title="Home" to="/home" active={true} svg={svgs.home()} />
      <SingleNavLink title="projects" to="/home/projects" active={false} svg={svgs.chart()} />
      <SingleNavLink title="Tickets" to="/home/tickets" active={false} svg={svgs.calender()} />
      <SingleNavLink  title="Settings" to="" active={false} svg={svgs.settings()} />
    </div>
  )
}

export default Sidebar
