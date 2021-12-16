import React, { useState, useEffect } from 'react'
import css from '../../index.module.css'
import MainHeader from '../Projects/ProjectsHeader/MainHeader'
import InfoBar from '../shared/InfoBar/InfoBar'
import Error from '../shared/Error'
import * as tikcetService from '../../API/TicketService.js'
import { splitTicketsDataBasedOnIsDone } from '../../helpers/helper.js'

function Tickets() {
  const [ticketsDone, setTicketsDone] = useState([])
  const [ticketsWIP, setTicketsWIP] = useState([])
  const [ticketsToShow, setTicketsToShow] = useState([{}])

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [isGrid, setIsGrid] = useState(false)

  useEffect(async () => {
      setLoading(true)
    const loadData = async () =>
    {
        const result =await tikcetService.getUserTickets();
        console.log("in function : result:", result)
        return result;

    }


    try {
      const incommingData = await loadData();
      console.log("incommig : ",incommingData)
      // setTicketsToShow([...incommingData.data.data])
      // const [done, wip] = splitTicketsDataBasedOnIsDone(incommingData.data.data);
      // console.log("done: ",done)
      // console.log("done: ",wip)
      // setTicketsDone([...done]);
      // setTicketsWIP([...wip])

    } catch (error) {
      setError(error)
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
          <MainHeader title="Projects" />
          <InfoBar
            onClick={onToShowChange}
            infoToShow={
              [{ title: 'Tikcets Done', info: ticketsDone.length, identifier: 'Done' }, { title: 'WIP`s', info: ticketsWIP.length, identifier: 'WIP' }
              ]}
            onToggleGrid={toggleGridHandler} />

          <div className={[css.projectBoxes, (isGrid ? css.jsGridView : '')].join(" ")}>

            {ticketsToShow.map(ticket => (
              <p> h {ticket?.ticket?.number}</p>
            ))}
          </div>


        </div>
      }
      {loading && <p>Loading ...</p>}
    </>
  )
}

export default Tickets
