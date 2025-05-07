import React, { useState } from 'react';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';

import '../pagescss/LoginSignupPage.css'

const LoginSignupPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div 
      className='login_signup_page'
    >
    <div 
      className='login_signup_page_main_container'  
    >
      <h1>
        {isLoggedIn ? "Login" : "Sign Up"}
      </h1>
      
      {isLoggedIn ? <LoginForm /> : <SignupForm />}

      <p>
        {isLoggedIn ? "Don't have an account? " : "Already have an account? "}
        <button 
          className='switch_button'
          onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Sign Up" : "Log In"}
        </button>
      </p>
    </div>
    </div>
  )
}

export default LoginSignupPage