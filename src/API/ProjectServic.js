import axios from './axios/axios.config.js';


export const getAllasIfSuper = async () => {
  console.log("Calling API on Get:All")
  const result = await axios.get('projetcs')
  return result;
}

export const getDeveloperProjects = async () => {
  console.log("Calling API on Get:projects/user-projects-as-dev")
  const result = await axios.get('projects/user-projects-as-dev')
  return result;
}

export const getManagerProjects = async () => {
  console.log("Calling API on Get:projects/user-projects-as-manager")
  const result = await axios.get('projects/user-projects-as-manager')
  return result;
}

export const getrelatedProjects = async () => {
  console.log("Calling API on Get:profile/related")
  const result = await axios.get('profile', { withCredentials: true })
  return result;
}
export const getProjectById = async ({ projectId }) => {
  console.log("Calling API on Get:projects/:id   with id: ", projectId)
  const result = await axios.get(`projects/${projectId}`,{projectId:projectId})
  console.log("in APISerice :", result)
  return result;
}

export const createProject = async ({ name, description }) => {
  console.log("Calling API on POST:projects/   with name, description: ", name, description)
  const result = await axios.post('projects', { name, description })
  return result;
}

export const addDevToProject = async ({ developerId, projectId }) => {
  console.log("Calling API on POST:projects/:id/add-dev dev-id: ", developerId, "ProjectID :", projectId)
  const result = await axios.post(`projects/${projectId}/add-dev`, { developerId, projectId })
  return result;
}


export const addManagerToProject = async ({ managerId, projectId }) => {
  console.log("Calling API on POST:/projects/:id/add-manager manager-id: ", managerId, "ProjectID :", projectId)
  const result = await axios.post(`projects/${projectId}/add-manager`, { managerId, projectId })
  return result;
}


export const removeProject = async ({ projectId }) => {
  console.log("Calling API on POST:/projects/:id/remove ProjectID :", projectId)
  const result = await axios.post(`projects/${projectId}/remove`, { projectId })
  return result;
}

export const updateProject = async ({ name, description, projectId, creatorId }) => {
  console.log("Calling API on POST:/projects/update/:id ProjectID :", projectId, "name: ", name, "description: ", description, "creatorId :", creatorId)
  const result = await axios.post(`projects/update/${projectId}`, {
    name, description, creatorId, projectId
  })
  return result;
}
