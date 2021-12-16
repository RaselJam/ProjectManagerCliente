
import React, { Fragment, useState } from 'react';
import css from '../../index.module.css';
import * as projectService from '../../API/ProjectServic.js'


const CreateNewProject = () => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [data, setData] = useState({
    name: '',
    description: ''
  })
  const handleInputChange = (event) => {

    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  const enviarDatos = async (event) => {
    event.preventDefault()
    console.log('Send data...' + data.name + ' ' + data.description)
    try {
      setLoading(true);
      const result = await projectService.createProject({ name: data.name, description: data.description });
      // config: {transitional: {…}, transformRequest: Array(1), transformResponse: Array(1), timeout: 4000, adapter: ƒ, …}
      // data: {message: 'ok', data: {…}}
      // headers: {content-length: '285', content-type: 'application/json; charset=utf-8'}
      // request: XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 4000, withCredentials: true, upload: XMLHttpRequestUpload, …}
      // status: 201
      // statusText: "Created"
      // [[Prototype]]: Object
      if (result.status === 201) {
        setLoading(false)
        setMessage(`Successfully added new project ${result.data.data.name}`)
        setData({
          name: '',
          description: ''
        })
      }
      console.log(result)
    } catch (error) {
      console.log(error)
      setMessage("Some thing didnt work, look at console for more info")
    }
  }

  return (
    <Fragment>
      {message}
      <h3>Create a new Project</h3>
      <form className={css.crateNewProjectForm} onSubmit={enviarDatos}>
        <label>Project Name</label>
        <div className="">
          <input type="text" placeholder="Name" className={css.crateNewProjectFormName} onChange={handleInputChange} name="name" ></input>
        </div>
        <label>Description</label>
        <div className="">
          <textarea placeholder="Description" className={css.crateNewProjectFormTextarea} onChange={handleInputChange} name="description"></textarea>
        </div>
        <button type="submit" className={css.crateNewProjectFormButton}>{loading ? 'Loading..' : 'Send'}</button>
      </form>

    </Fragment>
  );
}

export default CreateNewProject;