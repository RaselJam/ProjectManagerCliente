import React, {  useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Error from '../../shared/Error'
import Spinner from '../../shared/Spinner'
import css from '../Auth.module.css'
import cssLocal from '../Auth.module.css'
import * as authService from '../../../API/AuthService.js'

function Login() {
  const history = useHistory();
  const [data, setData] = useState({
    userName: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const submitHandler = async e => {
    e.preventDefault()
    setLoading(true);
    const result = await authService.login({ ...data })
    console.log("result on login:", result)
    if (result.status === 200 && result.data.message === 'OK') {
      //Everything ok
      localStorage.setItem("user", JSON.stringify(result.data.data))

      //Redirrect...
      history.push("/home");
    }
    else {
      console.log(result)
      setError(result.data.message)
    }
    setLoading(false);
  }

  //handlers :
  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }



  //
  return (
    <div className={css.logincontainer}>
      <Error error={error} />
      {!loading &&
        <>
          <h2 className={css.logintitle}>Welcome back!</h2>

          <form onSubmit={submitHandler} method="post">
            <div className={css.imgcontainer}>
              <img src="https://www.argentinaproduct.com/ckfinder/userfiles/files/blog/projectoct.png" alt="Avatar" className={css.avatar} />
            </div>

            <div className={css.formcontainer}>
              <label><b>User Name</b>
                <input type="text" placeholder="Name" className={cssLocal.crateNewProjectFormName} onChange={handleInputChange} name="userName" />
              </label>
              <label ><b>Password</b>
                <input type="password" placeholder="Pasword" className={cssLocal.crateNewProjectFormName} onChange={handleInputChange} name="password" />
              </label>
              <button type="submit">Login</button>
              {/* <Input type="checkbox" onChange={onFieldChangeHandler} label={'Remember Me'} defaultChecked name="remember" /> */}
            </div>

            <div className={css.formcontainer}>
              <button type="button" className={css.cancelbtn}>Cancel</button>
              <span className={css.psw}>Forgot <a href="/">password?</a></span>
              <span className={css.psw}>dont have Account? <Link to="/signup">SignUp</Link></span>
            </div>
          </form>
        </>
      }
      {loading && <Spinner action="Loging" />}
    </div>
  )
}

export default Login
