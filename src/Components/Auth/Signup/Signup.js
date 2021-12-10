import React, { useState } from 'react'
import Input from '../../shared/Input'
import css from '../Auth.module.css'

import * as authService from '../../../API/AuthService.js'
import Spinner from '../../shared/Spinner'

function Signup() {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onFieldChangeHandler = ({ name, value }) => {
    setForm({ ...form, [name]: value })
  }
  //handlers :
  const submitHandler = async e => {
    e.preventDefault()
    setLoading(true);
    let result = await authService.signup({ ...form })
    if (result.status === 201) {
      //Everything ok
    }
    else {
      setError("internal Server Error 500")
    }
    console.log("result on signUp:", result.status)
    setLoading(false);
    setError('');
  }
  //
  return (

    <div className={css.logincontainer}>
      {!loading &&
        <>
          <h2 className={css.logintitle}>SignUp!</h2>
          <p className='error'>{error}</p>
          <form onSubmit={submitHandler} method="post">
            <div className={css.imgcontainer}>
              <img src="https://www.argentinaproduct.com/ckfinder/userfiles/files/blog/projectoct.png" alt="Avatar" className={css.avatar} />
            </div>
            <div className={css.formcontainer}>
              <Input onChange={onFieldChangeHandler} type="text" label={'UserName'} name={'userName'} required={true} placeholder={'Enter Username'} />
              <Input onChange={onFieldChangeHandler} type="password" label={'Password'} name={'password'} required={true} placeholder={'Enter Password'} />
              <button type="submit">SignUp</button>
            </div>
          </form>
        </>}
      {loading && <Spinner action="signing up" />}

    </div>

  )
}

export default Signup
