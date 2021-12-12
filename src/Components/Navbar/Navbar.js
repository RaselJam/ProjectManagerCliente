import React from 'react'
import * as svgs from '../../assets/svgs.js'
import css from '../../index.module.css'


function Navbar({ user }) {
  return (
    <div className={css.appHeader}>
      <div className={css.appHeaderLeft}>
        <span className={css.appIcon}></span>
        <p className={css.appName}>Project Management</p>
        <div className={css.searchWrapper}>
          <input className={css.searchInput} type="text" placeholder="Search" />
          {svgs.serach()}
        </div>
      </div>
      <div className={css.appHeaderRight}>
        <button className={css.modeSwitch} title="Switch Theme">
          {svgs.moon('moon')}
        </button>
        <button className={css.addBtn} title="Add New Project">
          {svgs.add(css.btnIcon)}
        </button>
        <button className={css.notificationBtn}>
          {svgs.notBtn()}
        </button>
        <button className={css.profileBtn}>
          <img src={user.img} />
          <a href="./login.html">login</a> <span>{user.userName}</span>
        </button>
      </div>

    </div>
  )
}

export default Navbar
