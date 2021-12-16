import React from 'react'
import Navbar from './Navbar/Navbar'
import SideBar from './Sidebar/Sidebar'
import css from '../../index.module.css'
function Layout({toggleTheme, children }) {
  return (
    <div className={css.appContainer}>
      <Navbar toggleTheme={toggleTheme}/>
      <div className={css.appContent}>
        <SideBar />
        {children}
      </div>
    </div>
  )
}

export default Layout
