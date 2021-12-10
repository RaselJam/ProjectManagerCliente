import React from 'react'
import * as svgs from '../shared/svgs.js'


function Navbar({user}) {
  return (
    <div className="app-header">
      <div className="app-header-left">
        <span className="app-icon"></span>
        <p className="app-name">Project Management</p>
        <div className="search-wrapper">
          <input className="search-input" type="text" placeholder="Search" />
          {svgs.serach}
        </div>
      </div>
      <div className="app-header-right">
        <button className="mode-switch" title="Switch Theme">
          {svgs.moon}
        </button>
        <button className="add-btn" title="Add New Project">
          {svgs.add}
        </button>
        <button className="notification-btn">
        {svgs.notBtn}
        </button>
        <button className="profile-btn">
          <img src={user.img} />
          <a href="./login.html">login</a> <span>{user.userName}</span>
        </button>
      </div>

    </div>
  )
}

export default Navbar
