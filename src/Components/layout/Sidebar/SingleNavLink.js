import React from 'react'
import { Link} from 'react-router-dom'
import css from '../../../index.module.css'

function SingleNavLink({ to, active, svg ,title}) {
      return (
      <Link to={to} className={[css.appSidebarLink, active? css.active:''].join(' ')}>
            {svg}
            <span>{title}</span>
      </Link>
    )
  }

export default SingleNavLink
