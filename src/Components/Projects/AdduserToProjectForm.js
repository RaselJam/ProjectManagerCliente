import React, { useState, useRef } from 'react'
import * as svgs from '../../assets/svgs.js'
import css from '../../index.module.css'
//targetRoleOnAdd : developer/ manager
function AdduserToProjectForm({ onUserAdded, targetRoleOnAdd }) {
  const newUserRef = useRef();
  const [showForm, setShowForm] = useState(false)
  //handlres :
  const onAddmoreHandler = () => {
    setShowForm(true)
  }
  const handleAdduserHandlers = () => {
    console.log("targetRoleOnAdd: ",targetRoleOnAdd )
    const userId = newUserRef.current.value;
    onUserAdded({ userId, targetRole: targetRoleOnAdd })

  }
  //
  return (
    <div>
      <button onClick={onAddmoreHandler} className={css.addParticipant} style={{ color: "#df3670" }}>
       {/*  {svgs.addMore()} */}
        Add {targetRoleOnAdd}
      </button>
      {showForm && <div  className={css.newDev}>
        <input ref={newUserRef} type="text" placeholder='Enter userId' />
        <button onClick={handleAdduserHandlers}>Add more people </button>
      </div>}
    </div>
  )
}

export default AdduserToProjectForm
