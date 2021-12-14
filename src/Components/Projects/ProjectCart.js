import React, { useState, useRef } from 'react'
import * as svgs from '../../assets/svgs.js'
import css from '../../index.module.css'
import * as projectService from '../../API/ProjectServic.js'

function ProjectCart({ project, canAddDev, canAddManager }) {

  const [thisProject, setThisProject] = useState({ ...project })
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(false)
  const newUser = useRef()
  console.log("project to print :", project)
  const createdAt = new Date(thisProject.createdAt)
  let d = createdAt.getDate();
  let m = createdAt.getMonth();
  let y = createdAt.getFullYear();

  //handlres :
  const onAddmoreHandler = () => {
    setShowForm(true)
  }
  const handleAddDev = async () => {
    setLoading(true)
    const newDevID = newUser.current.value
    try {
      const result = await projectService.addDevToProject({ developerId: newDevID, projectId: project._id })
      console.log("result on adding new dev ", result.data.data)
      setThisProject({ ...result.data.data })
    } catch (error) {
      console.log("on adding new dev", error)
    }
    setLoading(false)
    setShowForm(false)
  }
  //
  return (
    <div className={css.projectBoxWrapper}>
      <div className={css.projectBox} style={{ backgroundColor: "#ffd3e2" }}>
        <div className={css.projectBoxHeader}>
          <span> Created at : {`${d}/ ${m}/ ${y}`}</span>
          <br />
          <span> last Update : {`${d}/ ${m}/ ${y}`}</span>
          <div className={css.moreWrapper}>
            <button className={css.projectBtnMore}>
              {svgs.btnMore()}
            </button>

          </div>
        </div>
        <div className={css.projectBoxContentHeader}>
          <p className={css.boxContentHeader}>{thisProject.developers.length} people working on</p>
          <p className={css.boxContentSubheader}>{thisProject.name}</p>
        </div>
        <div className={css.boxProgressWrapper}>
          <p className={css.boxProgressHeader}>Progress</p>
          <div className={css.boxProgressBar}>
            <span
              className={css.boxProgress}
              style={{ width: "20%", backgroundColor: "#df3670" }}
            ></span>
          </div>
          <p className={css.boxProgressPercentage}>20%</p>
        </div>
        <div className={css.projectBoxFooter}>
          <div className={css.participants}>
            Developers : {thisProject.developers.map(developer => {
              console.log("dev: ", developer)
              return (
                <div className={css.person}><img
                  key={developer._id}
                  src={developer.img}
                  alt={developer.userName}
                />
                  <p>{developer.userName}</p>
                </div>
              )
            })}
            {canAddDev && <button onClick={onAddmoreHandler} className={css.addParticipant} style={{ color: "#df3670" }}>
              {svgs.addMore()}
            </button>}
            {showForm && <div onBlur={() => setShowForm(false)} className={css.newDev}>
              <input ref={newUser} type="text" placeholder='Enter DeveloperId' />
              <button onClick={handleAddDev}>{loading ? 'Loading...' : 'Add more people'} </button>
            </div>}

          </div>


          <div className={css.daysLeft} style={{ color: "#df3670" }}>2 Days pased</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCart
