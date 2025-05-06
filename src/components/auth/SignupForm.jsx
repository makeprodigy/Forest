import React from 'react'

const SignupForm = () => {

  return (
    <div className='signup_form_container'>
      <div className='signup_form_elements'>
        <label>Name:</label>
        <input
          type='text'
          name='name'
          placeholder='Enter your name'
          required
        />
      </div>
      <div className='signup_form_elements'>
      <label>Email:</label>
        <input
          type='email'
          name='email'
          placeholder='you@yourmail.com'
          required
        />
      </div>
      <div className="signup_form_elements">
        <label>Password:</label>
        <input 
          type="password" 
          name="password" 
          placeholder="Enter a suitable password" 
          required 
        />
      </div>
      <div className="signup_form_elements">
        <label>Confirm Password:</label>
        <input 
          type="password" 
          name="confirmpassword" 
          placeholder="Confirm your password" 
          required 
        />
      </div>
      <button 
        type='submit'
        className='signup_button'
      >Sign Up</button>
    </div>
  )
}

export default SignupForm