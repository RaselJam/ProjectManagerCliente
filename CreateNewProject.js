
import React, {Fragment, useState} from 'react';
import css from '../../index.module.css'

const CreateNewProject = () => {


    const [data, setData] = useState({
        name: '',
        description: ''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setData({
          ...data,
          [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('Send data...' + data.name + ' ' + data.description)
    }

    return (
      <Fragment>
        <h3>Create a new Project</h3>
        <form className={css.crateNewProjectForm} onSubmit={enviarDatos}>
          <label>Project Name</label>
          <div className="">
            <input type="text" placeholder="Name" className={css.crateNewProjectFormName} onChange={handleInputChange} name="name" ></input>
          </div>
          <label>Description</label>
          <div className="">
            <textarea  placeholder="Description" className={css.crateNewProjectFormTextarea} onChange={handleInputChange} name="description"></textarea>
          </div>
          <button type="submit" className={css.crateNewProjectFormButton}>Send</button>
        </form>
        <ul>
          <li>{data.name}</li>
          <li>{data.description}</li>
        </ul>
      </Fragment>
    );
}

export default CreateNewProject;