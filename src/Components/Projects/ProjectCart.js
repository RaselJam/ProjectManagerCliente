import React, { useState, useRef } from 'react'
import * as svgs from '../../assets/svgs.js'
import css from '../../index.module.css'
import * as projectService from '../../API/ProjectServic.js'
import * as helper from '../../helpers/helper.js'
import AdduserToProjectForm from './AdduserToProjectForm.js'

function ProjectCart({ project, canAddDev, canAddManager }) {

  //const [showForm, setShowForm] = useState(false)
  //const newUser = useRef()
  const [thisProject, setThisProject] = useState({ ...project })
  const [loading, setLoading] = useState(false)
  const ageOfProject = helper.dayPassed(thisProject.createdAt);
  console.log("project to print :", project)

  //handlres :

  const handleUserAdded = async ({ userId, targetRole }) => {

    const options = {
      getUpDater: {
        manager: projectService.addManagerToProject,
        developer: projectService.addDevToProject
      },
      KeyNameOnCollection: {
        manager: 'managerId',
        developer: 'developerId'
      }
    }

    const objectParameter = {
      projectId: project._id
    }

    //asigne dynamic Key value:
    console.log("targetrole :", targetRole)
    objectParameter[options.KeyNameOnCollection[targetRole]] = userId;
    console.log("objectparameter", objectParameter)
    setLoading(true)

    try {
      const result = await options.getUpDater[targetRole](objectParameter)
      console.log(`result on adding new  ${targetRole} `, result.data.data)
      setThisProject({ ...result.data.data })
    } catch (error) {
      console.log(`on adding new  ${targetRole}`, error)
    }
    setLoading(false)
  }
  //
  return (
    <div className={css.projectBoxWrapper}>
      <div className={css.projectBox} style={{ backgroundColor: "#ffd3e2" }}>
        <div className={css.projectBoxHeader}>
          <span> Created at : {helper.getformatedDate(thisProject.createdAt)}</span>
          <br />
          <span> last Update : {helper.getformatedDate(thisProject.updatedAt)}</span>
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
            <p>Developers :</p>
            <section> {
              thisProject.developers.map(developer => {
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
              })}</section>
            {!loading &&
              <>
                {canAddDev &&
                  <>
                    <p>Add more Developer </p> <AdduserToProjectForm onUserAdded={handleUserAdded} targetRoleOnAdd={helper.ROLES.developer} />
                  </>
                }

              </>}
            {loading && <p>Loading ....</p>}
          </div>
          <div className={css.participants}>
            <p>Managers :</p>
            <section>{
              thisProject.managers.map(manager => {
                console.log("manger: ", manager)
                return (
                  <div className={css.person}><img
                    key={manager._id}
                    src={manager.img}
                    alt={manager.userName}
                  />
                    <p>{manager.userName}</p>
                  </div>
                )
              })}</section>
            {loading && <p>Loading ....</p>}
            {canAddManager &&
              <>
                <p>Add more Manager </p>
                <AdduserToProjectForm onUserAdded={handleUserAdded} targetRoleOnAdd={helper.ROLES.manager} />
              </>
            }

          </div>
          <div className={css.daysLeft} style={{ color: "#df3670" }}>{ageOfProject !== 0 ? `${ageOfProject} Days pased` : 'Just created today'}</div>
          <p>Description : {project.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCart
