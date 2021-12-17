import React, { useState, useEffect, useRef } from 'react'
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
  const [loadingAColumn, setLoadingAColumn] = useState(false)
  const [loadingBColumn, setLoadingBColumn] = useState(false)
  const [loadingCColumn, setLoadingCColumn] = useState(false)

  const newTicketNumber = useRef('');
  const newTicketDescription = useRef('');


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
  const doingTicketHandler = async (id) => {
    console.log("Do it, id: ", id)
    setLoadingBColumn(true)
    setLoadingCColumn(true)
    try {
      const result = await ticketService.doTikcet({ ticketId: id, projectId: thisProject._id })
      console.log("Res on doing.. : ", result)
      if (result.data.message === "OK") {
        setDoneT(prev => [...prev, result.data.data])
        setTakenT(prev => prev.filter(elm => elm._id !== id))
      }
      else setError("Error on taking Ticket")


    } catch (error) {
      console.log(error)
      setError("Error on Setting TicketDone, see console for more info")
    }
    setLoadingBColumn(false)
    setLoadingCColumn(false)
  }
  const handleNewTicket = async (e) => {
    e.preventDefault()
    console.log(newTicketNumber.current, newTicketDescription.current)
    try {
      setLoadingAColumn(true)
      const result = await ticketService.createTicket({ projectId: thisProject._id, number: newTicketNumber.current, description: newTicketDescription.current })
      if (result.data.message === 'OK') {
        setNotTakenT(prevSt => [...prevSt, result.data.data])
        setError('')
      }

    } catch (error) {
      setError("Error on Ading new Tikcet.")

    }
    setLoadingAColumn(false)

  }
  const handleNumberChange = (e) => {
    console.log(e.target.name, e.target.value)
    newTicketNumber.current = e.target.value;
  }
  const handleDescriptionChange = (e) => {
    console.log(e.target.name, e.target.value)
    newTicketDescription.current = e.target.value;
  }
  const handleTakeT = async (id) => {
    setLoadingAColumn(true)
    setLoadingBColumn(true)
    try {
      const result = await ticketService.takeThisTicket({ projectId: thisProject._id, ticketId: id })
      console.log("res on taking : ", result)
      if (result.data.message = "OK") {
        setNotTakenT(prev => prev.filter(elm => elm._id !== id))
        setTakenT(prev => [...prev, result.data.data])
        setError('')
      }
    } catch (error) {
      setError("Error on Taking Tikcet")
    }
    setLoadingAColumn(false)
    setLoadingBColumn(false)

  }

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

        <div className={[css.workFlowSection, css.projectBoxes, css.jsGridView].join(' ')}>

          <div className={css.aColumn}>
            <h3>Tickets issued but not taken</h3>
            {!loadingAColumn &&
              <div className={css.ticketsContainer}>
                {notTakenT.map(ticket => (
                  <div style={{ display: "flex" }}>
                    <div class={css.singleTicket} key={ticket._id}>
                      <p>Number : {ticket.number}</p>
                      <p>description : {ticket.description}</p>
                    </div>
                    <button onClick={handleTakeT.bind(this, ticket._id)} style={{ maxWidth: '65px' }}>Take it</button>
                  </div>
                ))}


                <div class={css.singleTicket}>

                  <form onSubmit={handleNewTicket}>
                    <label>Number : <input type="text" name="number" onChange={handleNumberChange} /></label>
                    <label>description : <input type="text" name="description" onChange={handleDescriptionChange} /></label>
                    <button type='submit'>create</button>
                  </form>
                </div>
              </div>
            }
            {loadingAColumn && <p>Loading ..</p>}
          </div>



          <div className={css.bColumn}>
            <h3>Tikcets taken(WIP)</h3>
            {!loadingBColumn &&
              <div className={css.ticketsContainer}>
                {takenT.map(ticket => (
                  <div style={{ display: "flex" }}>
                    <div class={css.singleTicket} key={ticket._id}>
                      <p>Number : {ticket.number}</p>
                      <p>description : {ticket.description}</p>
                    </div>
                    <button style={{ maxWidth: '65px' }} onClick={doingTicketHandler.bind(this, ticket._id)}>Make it Done</button>
                  </div>
                ))}

              </div>
            }
            {loadingBColumn && <p>Loading ..</p>}
          </div>

          <div className={css.cColumn}>
            <h3>Tickets DONE successfully</h3>
            {!loadingCColumn &&
              <div className={css.ticketsContainer}>
                {doneT.map(ticket => (
                  <div className={css.singleTicket} key={ticket._id}>
                    <p>Number : {ticket.number}</p>
                    <p>description : {ticket.description}</p>

                  </div>
                ))}
              </div>
            }
            {loadingCColumn && <p>Loading ..</p>}
          </div>

        </div>
      </div>}



    </div>
  )
}

export default ProjectDetail

