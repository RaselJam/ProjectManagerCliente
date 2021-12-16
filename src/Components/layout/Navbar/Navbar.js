import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';
import * as svgs from '../../../assets/svgs.js'
import css from '../../../index.module.css';
import * as authService from '../../../API/AuthService.js'


function Navbar({ toggleTheme }) {
  const [loggedUser, setloggedUser] = useState({})
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setloggedUser(user)
      console.log("in NavBar USer :", user)
    }
  }, [])

  //handlers:
  const onlogOutHandler = async () => {
    try {
      const result = await authService.logout();
      console.log("from server on logout: ", result)
      if (result?.data?.message === 'OK') {
        console.log("LogedOut from server successfully, going to do it locally")
        localStorage.removeItem('user')
        console.log("localstorage removed going to redirect")
        history.push("/login");
      }
      else throw new Error("Some thing happend on loging out")
    } catch (error) {
      console.log(error)
    }
  }
  const onToggleClicked = () => {
    toggleTheme();
  }
  //
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
        <button onClick={onToggleClicked} className={css.modeSwitch} title="Switch Theme">
          {svgs.moon('moon')}
        </button>
        <Link to="/home/newProject" title="Add New Project" className={css.addBtn} > {svgs.add(css.btnIcon)}</Link>

        <button className={css.notificationBtn}>
          {svgs.notBtn()}
        </button>
        <button className={css.profileBtn}>
        </button>
        {/* <img src={loggedUser.img} /> */}
        <button className={css.logout} onClick={onlogOutHandler} >Logout</button> <span>{loggedUser.userName}</span>

      </div>

    </div>
  )
}

export default Navbar
