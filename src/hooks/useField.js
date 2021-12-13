import { useEffect, useRef } from "react";
export const useField = ({ type, callback }) => {
  const value = useRef()
  const onChange = (e) => {
    if (type === 'checkbox') value.curent=e.target.checked
    else value.curent=e.target.value
  }
  useEffect(() => {
    callback()
  }, [value])
  return {
    type, value, onChange
  }
}


