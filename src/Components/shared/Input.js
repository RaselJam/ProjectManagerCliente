import React,{useCallback} from 'react'
import { useField}   from '../../hooks/useField'

function Input({ label, type, name, placeholder, required, onChange }) {

  const onchangeHandler = () => {
    onChange({ name, value: thisInput.value })
  }

  const thisInput = useField({ type: type, callback: onchangeHandler })

  return (
    <>
      <label htmlFor={name}><b>{label}</b></label>
      <input {...thisInput} placeholder={placeholder} name={name} required={required ? true : false} />

    </>
  )
}

export default Input
