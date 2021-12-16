import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as ticketService from '../../../API/TicketService.js'
import { getProjectById } from '../../../API/ProjectServic.js'
import InfoBar from '../../shared/InfoBar/InfoBar'
import MainHeader from '../ProjectsHeader/MainHeader.js'
import css from '../../../index.module.css'


function ProjectDetail() {
  const [thisProject, setThisProject] = useState({})
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)


  useEffect(() => {

    try {
      async function fetchAndLoad() {
        setLoading(true);
        const result = await fetchData();
        console.log("result : ", result)
        if (result.status == 200) {
          setThisProject({ ...result.data.data })
        }
        setLoading(false)
        setError('')
      }
      fetchAndLoad();
    } catch (error) {
      console.log(error)
      setError("Error onloading Project look at console for more info")
    }

  }, [])
  const { id } = useParams()

  async function fetchData() {
    const result = await getProjectById({ projectId: id })
    return result;
  }
  const onHeaderClickHandler = () => {

  }
  const onToggleGridHandler = () => {

  }

  return (
    <div className={css.projectsSection}>
      {loading && <p>Loading ...</p>}
      {!loading && <div>

        <InfoBar onClick={onHeaderClickHandler} onToggleGrid={onToggleGridHandler}
          infoToShow={[
            { identifire: "detail", title: "project Detail", info: `${thisProject?.name}` },
            { identifire: "people", title: "Work Flow", info: `${thisProject?.developers.length} people are working on it` },
            { identifire: "manager", title: "Managers", info: `${(thisProject?.managers.map(elm=>elm.userName)).join(" ")} ` }
          ]} />
        <h1>{thisProject.name}</h1>

      </div>}


      {/* {!loading &&
        <InfoBar />
      } */}
    </div>
  )
}

export default ProjectDetail

