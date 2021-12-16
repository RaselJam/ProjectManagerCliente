import React, { useState, useEffect } from 'react'
import css from '../../index.module.css'
import MainHeader from '../Projects/ProjectsHeader/MainHeader'
import InfoBar from '../shared/InfoBar/InfoBar'
import Error from '../shared/Error'
import * as tikcetService from '../../API/TicketService.js'
import { splitTicketsDataBasedOnIsDone, getformatedDate } from '../../helpers/helper.js'
import { Link } from 'react-router-dom'

function Tickets() {
  const [ticketsDone, setTicketsDone] = useState([])
  const [ticketsWIP, setTicketsWIP] = useState([])
  const [ticketsToShow, setTicketsToShow] = useState([{}])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [isGrid, setIsGrid] = useState(false)

  useEffect(async () => {
    console.log("in effect")
    setLoading(true)
    const loadData = async () => {
      const result = await tikcetService.getUserTickets();
      console.log("in function : result:", result)
      return result;
    }
    try {
      const incommingData = await loadData();
      console.log("incommig : ", incommingData.data.data)
      const { done, wip } = splitTicketsDataBasedOnIsDone(incommingData.data.data);
      console.log("done: ", done)
      console.log("wip: ", wip)
      setTicketsDone([...done]);
      setTicketsWIP([...wip])
    } catch (error) {
      console.log(error)
      setError("error on loading Tickets, look at console for more info")
    }
    setLoading(false)
  }, [])
  //handlers:
  const toggleGridHandler = () => {
    setIsGrid(prevSt => !prevSt)
  }

  const onToShowChange = (toShow) => {
    const options = {
      Done: ticketsDone,
      WIP: ticketsWIP
    }
    setTicketsToShow([...options[toShow]])

  }
  //
  return (
    <>
      <Error error={error} />
      {!loading &&
        <div className={css.projectsSection}>
          <MainHeader title="Tickets taken by you" />
          <InfoBar
            onClick={onToShowChange}
            infoToShow={
              [{ title: 'Tikcets Done', info: ticketsDone.length, identifier: 'Done' }, { title: 'in Progress', info: ticketsWIP.length, identifier: 'WIP' }
              ]}
            onToggleGrid={toggleGridHandler} />

          <div className={[css.projectBoxes, (isGrid ? css.jsGridView : '')].join(" ")}>

            {ticketsToShow && ticketsToShow.map(elm => {

              {/* elm :{tasks:[], ticket:{}} */ }
              return (
                <div >
                  <h5>Ticket Number: {elm.ticket?.number}</h5>
                  <h5>belong to project : {elm.ticket?.project.name}</h5><Link to={`/home/projects/${elm.ticket?.project._id}`}>More onfo about project</Link>
                  <p>created at  :{getformatedDate(elm.ticket?.createdAt)}</p>
                  <p>Taken by You</p>
                  <h5> description : </h5><p>{elm.ticket?.description}</p>
                  <h5>Tasks :</h5>
                  <ul>
                    {elm.tasks?.map(task => (
                      <li key={task._id}>
                        <p>name: {task.name}</p>
                        <p>description: {task.description}</p>
                        <p>isDone: {task.isDone ? "YES" : `NO. Work in Progress last update was at : {getformatedDate(task.updatedAt)} `}</p>
                      </li>)

                    )}

                  </ul>


                </div>
              )

            })}
          </div>


        </div>
      }
      {loading && <p>Loading ...</p>}
    </>
  )
}

export default Tickets
