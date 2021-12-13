import axios from './axios/axios.config.js';
//TODO investigate how customize and localized Axios instancebase-URL toremove '/auth/ from all api calls
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


export const logout = async () => {
  console.log("Calling API logOut")
  const result = await axios.get('/auth/logout');
  return result;
}

export const isLogedIn = async ()=>{
  console.log("Calling API isLogedIn")
  const result = await axios.get('/auth/islogedin');
  return result;

}