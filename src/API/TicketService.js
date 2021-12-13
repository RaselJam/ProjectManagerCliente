import axios from './axios/axios.config.js';


export const getProfileData = async () => {
  console.log("Calling API on Get:profile ")
  const result = await axios.get(`profile`)
  return result;
}

export const getUserTickets = async () => {
  console.log("Calling API on Get:profile/my-tickets ")
  const result = await axios.get('profile/my-tickets')
  return result;
}

export const getAllTicketsOnlyIfSuper = async () => {
  console.log("Calling API on Get:profile/tickets ")
  const result = await axios.get('profile/tickets')
  return result;
}


export const getTicketsOfProject = async ({ projectId }) => {
  console.log("Calling API on Get:profile/tickets/project/:id  projectId:", projectId)
  const result = await axios.get(`profile/tickets/project/${projectId}`, { projectId })
  return result;
}



export const takeThisTicket = async ({ projectId, ticketId }) => {
  console.log("Calling API on POST:profile/tickets/take-it  projectId:", projectId, "tikcetId: ", ticketId)
  const result = await axios.post(`profile/tickets/take-it`, { projectId, ticketId })
  return result;
}


export const addTaskToTicket = async ({ projectId, ticketId, name, description }) => {
  console.log("Calling API on POST:profile/tickets/ad-task  projectId:", projectId, "tikcetId: ", ticketId, "name: ", name, "description :", description)
  const result = await axios.post(`profile/tickets/add-task`, { projectId, ticketId, name, description })
  return result;
}

export const doTask = async ({ projectId, ticketId, taskId }) => {
  console.log("Calling API on POST:profile/tickets/ad-task  projectId:", projectId, "tikcetId: ", ticketId, "taskId: ", taskId)
  const result = await axios.post(`profile/tickets/do-task`, { projectId, ticketId, taskId })
  return result;
}

export const undoTask = async ({ projectId, ticketId, taskId }) => {
  console.log("Calling API on POST:profile/tickets/ad-task  projectId:", projectId, "tikcetId: ", ticketId, "taskId: ", taskId)
  const result = await axios.post(`profile/tickets/undo-task`, { projectId, ticketId, taskId })
  return result;
}


export const createTicket = async ({ projectId, number, description, predecessor }) => {
  if (!predecessor) predecessor = '';
  console.log("Calling API on POST:profile/tickets  projectId:", projectId, "number : ", number, "description : ", description, "predecessor : ", predecessor)
  const result = await axios.post(`profile/tickets`, { projectId, number, description, predecessor })
  return result;
}


export const removeTask = async ({ projectId, ticketId, taskId }) => {
  if (!predecessor) predecessor = '';
  console.log("Calling API on POST:profile/tickets/remove-task  projectId:", projectId, "tikcetId : ", ticketId, "taskId : ", taskId)
  const result = await axios.post(`profile/tickets/remove-task`, { projectId, ticketId, taskId })
  return result;
}


export const getTicketById = async ({ ticketId, projectId }) => {
  console.log("Calling API on GET:profile/tickets/:id  projectId:", projectId, "tikcetId : ", ticketId)
  const result = await axios.get(`profile/tickets/${ticketId}`, { projectId})
  return result;
}



export const getCommentsOfTicket = async ({ ticketId, projectId }) => {
  console.log("Calling API on GET:profile/tickets/:id/comments  projectId:", projectId, "tikcetId : ", ticketId)
  const result = await axios.get(`profile/tickets/${ticketId}/comments`, { projectId})
  return result;
}