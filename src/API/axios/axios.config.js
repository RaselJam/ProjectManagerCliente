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

  return ({ message: 'Failure, some thing hapend on cliente side on calling API, Its a very generic ErrorHandler for now. It may be a result of  bad request and rejected by server(especially 500), look at response from server if there`s any for more info', error });
});
export default instance;