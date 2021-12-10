import React from 'react'
import css from './shared.module.css'
function Spinner({action}) {
  return (
    <div className={css.loading}>
  <span className={css.loadingdots}>•</span>
  <p className={css.loadingtext}>{action}</p>
</div>
  )
}

export default Spinner
