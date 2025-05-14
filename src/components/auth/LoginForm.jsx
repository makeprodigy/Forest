import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = ({setIsLoggedIn}) => {
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true'); // Persist login state in localStorage
    navigate('/'); // Redirect to the home page after login
  };

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
        onClick={handleLogin}
      >Login</button>
    </div>
  )
}

export default LoginForm