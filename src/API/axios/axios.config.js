import axios from "axios";

const instance = axios.create({
  baseURL: 'https://raselapi.herokuapp.com/',
  timeout: 3000,
});
instance.interceptors.response.use((response) => response, (error) => {
  console.log("Error....", error)

  return ({ message: 'Failure, some thing hapend on cliente side on calling API', error });
});
export default instance;