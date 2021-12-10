import { useEffect, useState } from "react";
export const useField = ({ type, callback }) => {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    if (type === 'checkbox') setValue(e.target.checked)
    else setValue(e.target.value)
  }
  useEffect(() => {
    callback()
  }, [value])
  return {
    type, value, onChange
  }
}