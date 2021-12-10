import axios from './axios/axios.config.js';
//TODO investigate how customize and localized Axios instancebase-URL toremove '/auth/ from allapi calls
export const signup = async ({ userName, password }) => {
  console.log("Calling API on signUp", userName, "  ", password)
  const result = await axios.post('auth/signup', {
     userName, password
  })
  return result;
}

export const login = async ({ userName, password }) => {
  console.log("Calling API on login", userName, "  ", password)
  const result = await axios.post('auth/login', {
    userName, password
  })
  return result;
}