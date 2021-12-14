import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import css from '../Auth.module.css'
import cssLocal from '../Auth.module.css'
import * as authService from '../../../API/AuthService.js'
import Spinner from '../../shared/Spinner'
import Error from '../../shared/Error'

function Signup() {

  const history = useHistory();
  const [data, setData] = useState({
    userName: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  //handlers :

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  const submitHandler = async e => {
    e.preventDefault()
    setLoading(true);
    let result = await authService.signup({ ...data })
    if (result.status === 201) {
      //Everything ok
      console.log(result)
      setLoading(false);
      setError('');
      history.push('/');
    }
    else {
      console.log("res :", result.error.response.data.ErrorMessage)
      setError(result.error.response.data.ErrorMessage)
      setLoading(false)
      return;
    }
    console.log("result on signUp:", result.status)

  }
  //
  return (

    <div className={css.logincontainer}>
      <Error error={error} />
      {!loading &&
        <>
          <h2 className={css.logintitle}>SignUp!</h2>

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
              <button type="submit">SignUp</button>

            </div>

            <div className={css.formcontainer}>



            </div>
          </form>
        </>}
      {loading && <Spinner action="signing up" />}

    </div>

  )
}

export default Signup
