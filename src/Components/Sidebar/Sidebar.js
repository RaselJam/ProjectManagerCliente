import React, { useState } from 'react'
import { useState } from 'react'
import SingleNavLink from './SingleNavLink'
import * as svgs from '../shared/svgs.js'

function Sidebar() {
  const [active, setActive] = useState(0)

  return (
    <div className="app-sidebar">

      <SingleNavLink to="" active={true} svg={svgs.home} />
      <SingleNavLink to="" active={false} svg={svgs.chart} />
      <SingleNavLink to="" active={false} svg={svgs.calender} />
      <SingleNavLink to="" active={false} svg={svgs.settings} />
    </div>
  )
}

export default Sidebar
