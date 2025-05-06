import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate()

  const handleLogIn = (e) => {
    e.preventDefault()

    navigate('/');
  }

  return (
    <div className="login_form_container">
      <div className='login_form_elements'>
      <label>Email:</label>
        <input
          type='email'
          name='email'
          placeholder='you@yourmail.com'
          required
        />
      </div>
      <div className="login_form_elements">
        <label>Password:</label>
        <input 
          type="password" 
          name="password" 
          placeholder="Enter your password" 
          required 
        />
      </div>
      <button
        type='submit'
        className='login_button'
        onClick={handleLogIn}
      >Login</button>
    </div>
  )
}

export default LoginForm