import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';

import '../pagescss/LoginSignupPage.css'

const LoginSignupPage = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className='login_signup_page'>
      <div className='login_signup_page_main_container'>
        <h1>{isLoggedIn ? "Login" : "Sign Up"}</h1>
        {isLoggedIn ? 
        <div className="login_form_container">
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
          </div> : 
        <SignupForm setIsLoggedIn={setIsLoggedIn}/>}
        <p>
          {isLoggedIn ? "Don't have an account? " : "Already have an account? "}
          <button
            className='switch_button'
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? "Sign Up" : "Log In"}
          </button>
        </p>
      </div>
    </div>
  );
};


export default LoginSignupPage