import React from 'react'
import css from '../../../index.module.css'
import * as svgs from '../../../assets/svgs.js'
//infoToShow type: [{ title, info, }]

function InfoBar({ infoToShow, onClick }) {
  //handlres:
  const onclickHandler = (e) => {
       onClick(e.target.getAttribute('name'))
  }

  //
  return (
    <div className={css.projectsSectionLine}>

      <div className={css.projectsStatus}>
        {infoToShow.map(elm => (
          <div key={elm.identifier} className={css.itemStatus}>
            <span className={css.statusNumber}>{elm.info}</span>
            <span  name={elm.identifier} onClick={onclickHandler} className={css.statusType}>{elm.title}</span>
          </div>
        ))}
      </div>

      <div className={css.viewActions}>
        <button className={[css.viewBtn, css.listView].join(" ")} title="List View">
          {svgs.listView([css.feather, css.featherList].join(" "))}
        </button>
        <button className={[css.viewBtn, css.gridView, css.active].join(" ")} title="Grid View">
          {svgs.gridView([css.feather, css.featherGrid].join(" "))}
        </button>
      </div>
    </div>
  )
}

export default InfoBar
