import React from 'react'

const LoginForm = () => {
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
      >Login</button>
    </div>
  )
}

export default LoginForm