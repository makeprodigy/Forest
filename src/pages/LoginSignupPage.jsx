import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';

const LoginSignupPage = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className='m-0 p-0 bg-gradient-to-br from-green-400 to-cyan-300 flex justify-center items-center min-h-screen'>
      <div className='py-10 px-8 w-full max-w-md rounded-2xl shadow-2xl shadow-green-600/20 text-center bg-white flex flex-col items-center'>
        <h1 className="text-4xl font-bold text-success mb-6 tracking-wide">{isLoggedIn ? "Login" : "Sign Up"}</h1>
        {isLoggedIn ? 
        <div className="flex flex-col w-full">
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
          </div> : 
        <SignupForm setIsLoggedIn={setIsLoggedIn}/>}
        <p>
          {isLoggedIn ? "Don't have an account? " : "Already have an account? "}
          <button
            className='border-none text-success text-lg font-semibold bg-transparent cursor-pointer underline ml-1 transition-colors duration-200 hover:text-teal-600'
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