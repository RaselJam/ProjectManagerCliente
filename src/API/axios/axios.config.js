import axios from "axios";
const localURL = "http://localhost:3000/"
const remoteURL = 'https://raselapi.herokuapp.com/'
const instance = axios.create({
  baseURL: remoteURL,
  timeout: 4000,
  withCredentials: true
});

instance.interceptors.response.use((response) => response, (error) => {
  console.log("Error....", error)

  return ({ message: 'Failure, some thing hapend on cliente side on calling API', error });
});
export default instance;