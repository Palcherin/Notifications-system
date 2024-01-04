import React from 'react'
import { FaLock, FaMailBulk, FaUser } from 'react-icons/fa'

const Login = () => {
  return (
    <div className='login-page'>
      <div className='content'>
        <header>
            <div className='title'>SIgn-up</div>
            <div className='underline'></div>
        </header>
        <div className='input'>
            <FaUser/>
            <input type='text' placeholder='Name...'/>
        </div>
        <div className='input'>
            <FaMailBulk/>
            <input type='email' placeholder='Email Id...'/>
        </div>
        <div className='input'>
            <FaLock/>
            <input type='password' placeholder='password...'/>
        </div>
        <div>Forgot password?</div>
        <div className='submit'>
            <div className='submit'>Sign-Uo</div>
            <div className='submit-2'>Login</div>
        </div>
      </div>
    </div>
  )
}

export default Login
