import React from 'react'
import '../Styles/Login.css'
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

function Login() {
  return (
    <>
      <div className="login-container">
        <div className='login-section'>
          <div className="login-header">
            <div className="login-text">Login </div>
          </div>
          <div className="login-input">
            <i>{<MdOutlineEmail />}</i>
            <input type="email" placeholder='E-mail' />
          </div>
          <div className="login-input">
            <i>{<RiLockPasswordLine />}</i>
            <input type="password" placeholder='Password' />
          </div>
          <div className="forgot-password">Forgot Password?<span>Click Here!</span></div>
          <div className="submit-container">
            <div className='submit'>Login</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login