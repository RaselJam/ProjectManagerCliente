import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as ticketService from '../../../API/TicketService.js'
import { getProjectById } from '../../../API/ProjectServic.js'
import InfoBar from '../../shared/InfoBar/InfoBar'
import css from '../../../index.module.css'
import { splitArrayBasedOnProp } from '../../../helpers/helper.js'


function ProjectDetail() {
  const [loggedUser, setloggedUser] = useState({})
  const [thisProject, setThisProject] = useState({})
  const [notTakenT, setNotTakenT] = useState([])
  const [takenT, setTakenT] = useState([])
  const [doneT, setDoneT] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setloggedUser(user)
    }
    try {
      async function fetchAndLoad() {
        setLoading(true);
        //TODO Refactor using prommise.all
        const resultOnProjects = await fetchProject();
        const resultOnTickets = await fetchTicktes()
        // console.log("projetcsResult : ", resultOnProjects)
        // console.log("ticketsResult : ", resultOnTickets)
        if (resultOnProjects.status == 200) {
          setThisProject({ ...resultOnProjects.data.data })
        }
        if (resultOnTickets.status == 200) {
          const [done, notDone] = splitArrayBasedOnProp(resultOnTickets.data.data, 'isDone')
          const [takenTicket, notTakenTikcet] = splitArrayBasedOnProp(notDone, 'developer')
          console.log("tickets : ", notTakenTikcet, takenTicket, done);
          setNotTakenT([...notTakenTikcet])
          setTakenT([...takenTicket])
          setDoneT([...done])

        }
        setLoading(false)
        setError('')
      }
      fetchAndLoad();
    } catch (error) {
      console.log(error)
      setError("Error on loading Project look at console for more info")
    }

  }, [])
  const { id: projectId } = useParams()

  async function fetchProject() {
    const result = await getProjectById({ projectId })
    return result;
  }
  async function fetchTicktes() {
    const result = await ticketService.getTicketsOfProject({ projectId });
    return result;
  }
  const onHeaderClickHandler = () => {

  }
  const onToggleGridHandler = () => {

  }
  //handlers:
  const tackingTicketHandler = (id) => {
    console.log("taking it id: ", id)

  }
  const doingTicketHandler = (id) => {
    console.log("Do it, id: ", id)
    try {

    } catch (error) {
      console.log(error)
      setError("Error on Setting TicketDone, see console for more info")
    }
  }

  //
  return (
    <div className={css.projectsSection}>
      {loading && <p>Loading ...</p>}
      {!loading && <div>

        <InfoBar onClick={onHeaderClickHandler} onToggleGrid={onToggleGridHandler}
          infoToShow={[
            { identifier: "detail", title: "project Detail", info: `${thisProject?.name}` },
            { identifier: "people", title: "Work Flow", info: `${thisProject?.developers?.length} people are working on it` },
            { identifier: "manager", title: "Managers", info: `${(thisProject?.managers?.map(elm => elm.userName))?.join(" ")}` }
          ]} />
        <h1>{thisProject.name}</h1>
        <div className={[css.workFlowSection, css.projectBoxes, css.jsGridView].join(' ')}>

          <div className={css.aColumn}>
            <h3>Tickets issued but not taken</h3>
            <div className={css.ticketsContainer}>
              {notTakenT.map(ticket => (
                <div class={css.singleTicket} key={ticket._id}>
                  <p>Number : {ticket.number}</p>
                  <p>description : {ticket.description}</p>
                  {(loggedUser._id === ticket.developer._id || ticket.managers.some(manager => manager._id === loggedUser._id)) &&
                    <button onClick={tackingTicketHandler.bind(this, ticket._id)}>Take it</button>}
                </div>
              ))}
            </div>
          </div>


          <div className={css.bColumn}>
            <h3>Tikcets taken(WIP)</h3>
            <div className={css.ticketsContainer}>
              {takenT.map(ticket => (
                <div class={css.singleTicket} key={ticket._id}>
                  <p>Number : {ticket.number}</p>
                  <p>description : {ticket.description}</p>
                  <button onClick={doingTicketHandler.bind(this, ticket._id)}>Make it Done</button>
                </div>
              ))}
            </div>


          </div>
          <div className={css.cColumn}>
            <h3>Tickets DONE successfully</h3>
            <div className={css.ticketsContainer}>
              {doneT.map(ticket => (
                <div className={css.singleTicket} key={ticket._id}>
                  <p>Number : {ticket.number}</p>
                  <p>description : {ticket.description}</p>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>}



    </div>
  )
}

export default ProjectDetail

