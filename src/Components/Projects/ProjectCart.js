import React from 'react'
import * as svgs from '../../assets/svgs.js'
import css from '../../index.module.css'

function ProjectCart({ project }) {
  let d = project.createdAt.getDate();
  let m = project.createdAt.getMonth();
  let y = project.createdAt.getFullYear();
  return (
    <div className={css.projectBoxWrapper}>
      <div className={css.projectBox} style={{ backgroundColor: "#ffd3e2" }}>
        <div className={css.projectBoxHeader}>
          <span>{`${d} / ${m} / ${y}`}</span>
          <div className={css.moreWrapper}>
            <button className={css.projectBtnMore}>
              {svgs.btnMore()}
            </button>
          </div>
        </div>
        <div className={css.projectBoxContentHeader}>
          <p className={css.boxContentHeader}>TO DO {project.tickets.length} ISSUES</p>
          <p className={css.boxContentSubheader}>{project.name}</p>
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
            {project.developers.map(developer =>{
              console.log("dev: ",developer)
             return (<img
              key={developer._id}
              src={developer.img}
              alt="participant"
            />)})}
            <button className={css.addParticipant} style={{ color: "#df3670" }}>
              {svgs.addMore()}
            </button>
          </div>
          <div className={css.daysLeft} style={{ color: "#df3670" }}>2 Days Left</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCart
