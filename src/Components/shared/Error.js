import React from 'react'
import css from './shared.module.css'

function Error({ error }) {
  return (
    <p className={css.error}>{error}</p>
  )
}

export default Error
