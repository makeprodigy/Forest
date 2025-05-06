import React, { useState } from 'react';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';
import '../pagescss/'

const LoginSignupPage = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
      <h1>
        {isLoggedIn ? "Login" : "Sign Up"}
      </h1>
      
      {isLoggedIn ? <LoginForm /> : <SignupForm />}

      <p>
        {isLoggedIn ? "Don't have an account? " : "Already have an account? "}
        <button 
          className=''
          onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Sign Up" : "Log In"}
        </button>
      </p>
    </div>
  )
}

export default LoginSignupPage