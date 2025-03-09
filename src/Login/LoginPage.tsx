import React from 'react'
import LoginForm from './LoginForm'
import './styles.css'
const LoginPage:React.FC = () => {
  return (
    <>
       <div className='login-main'>
      <div className='login-form'>
          <LoginForm/>
      </div>
        <div className='main'>
          <img src='../../public/adminLoginBg.jpg' className='img-dim' />
        </div>
       
      </div>
    </>
  )
}

export default LoginPage
