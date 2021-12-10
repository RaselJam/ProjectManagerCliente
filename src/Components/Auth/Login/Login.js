import React, { useState } from 'react'
import Input from '../../shared/Input'
import Error from '../../shared/Error'
import Spinner from '../../shared/Spinner'
import css from '../Auth.module.css'
import * as authService from '../../../API/AuthService.js'

function Login() {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onFieldChangeHandler = ({ name, value }) => {
    console.log("got data from input", name, value)
    setForm({ ...form, [name]: value })
  }



  const submitHandler = async e => {
    e.preventDefault()
    setLoading(true);
    const result = await authService.login({ ...form })
    console.log("result on login:", result)

    if (result.status === 200 && result.data.messsage === 'OK') {
      //Everything ok
      setError('');
      setLoading(false);
      //Redirrect...
    }
    else {
      console.log(result)
      setError(result.data.messsage)
    }

    setLoading(false);

  }
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
              <Input onChange={onFieldChangeHandler} type="text" label={'UserName'} name={'userName'} required={true} placeholder={'Enter Username'} />
              <Input onChange={onFieldChangeHandler} type="password" label={'Password'} name={'password'} required={true} placeholder={'Enter Password'} />
              <button type="submit">Login</button>
              <Input type="checkbox" onChange={onFieldChangeHandler} label={'Remember Me'} defaultChecked name="remember" />
            </div>

            <div className={css.formcontainer}>
              <button type="button" className={css.cancelbtn}>Cancel</button>
              <span className={css.psw}>Forgot <a href="#">password?</a></span>
            </div>
          </form>
        </>
      }
      {loading && <Spinner action="Loging" />}
    </div>
  )
}

export default Login
