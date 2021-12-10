import React from 'react'
import { Link} from 'react-router-dom'

function SingleNavLink({ to, active, svg }) {
    const classes = ["app-sidebar-link"]
    if (active) classes.push('active')
    return (
      <Link to={to}  className={classes.join(' ')}>
            {svg}
      </Link>
    )
  }

export default SingleNavLink
