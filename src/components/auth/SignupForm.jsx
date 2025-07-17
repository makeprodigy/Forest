import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate()

  const handleSignUp = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true'); // Persist login state in localStorage
    navigate('/');
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center my-4 mb-3 gap-4">
        <label className="text-lg w-[28%] text-right text-blue-600 font-medium">Name:</label>
        <input
          className="bg-gray-100 flex-1 w-[72%] px-3 py-2 text-lg rounded-md border-2 border-gray-300 transition-all duration-200 focus:border-green-400 focus:shadow-lg focus:shadow-green-400/20 focus:outline-none placeholder:text-sm placeholder:text-gray-500"
          type='text'
          name='name'
          placeholder='Enter your name'
          required
        />
      </div>
      <div className="flex items-center my-4 mb-3 gap-4">
        <label className="text-lg w-[28%] text-right text-blue-600 font-medium">Email:</label>
        <input
          className="bg-gray-100 flex-1 w-[72%] px-3 py-2 text-lg rounded-md border-2 border-gray-300 transition-all duration-200 focus:border-green-400 focus:shadow-lg focus:shadow-green-400/20 focus:outline-none placeholder:text-sm placeholder:text-gray-500"
          type='email'
          name='email'
          placeholder='you@yourmail.com'
          required
        />
      </div>
      <div className="flex items-center my-4 mb-3 gap-4">
        <label className="text-lg w-[28%] text-right text-blue-600 font-medium">Password:</label>
        <input 
          className="bg-gray-100 flex-1 w-[72%] px-3 py-2 text-lg rounded-md border-2 border-gray-300 transition-all duration-200 focus:border-green-400 focus:shadow-lg focus:shadow-green-400/20 focus:outline-none placeholder:text-sm placeholder:text-gray-500"
          type="password" 
          name="password" 
          placeholder="Enter a suitable password" 
          required 
        />
      </div>
      <div className="flex items-center my-4 mb-3 gap-4">
        <label className="text-lg w-[28%] text-right text-blue-600 font-medium">Confirm Password:</label>
        <input 
          className="bg-gray-100 flex-1 w-[72%] px-3 py-2 text-lg rounded-md border-2 border-gray-300 transition-all duration-200 focus:border-green-400 focus:shadow-lg focus:shadow-green-400/20 focus:outline-none placeholder:text-sm placeholder:text-gray-500"
          type="password" 
          name="confirmpassword" 
          placeholder="Confirm your password" 
          required 
        />
      </div>
      <button 
        type='submit'
        className='bg-gradient-to-r from-green-400 to-cyan-300 text-white text-lg rounded-lg h-10 w-full mt-5 mb-2 border-none font-bold shadow-lg shadow-green-400/20 tracking-wide transition-all duration-200 hover:bg-gradient-to-r hover:from-teal-600 hover:to-green-400 hover:shadow-xl hover:shadow-green-400/30'
        onClick={handleSignUp}
      >Sign Up</button>
    </div>
  )
}

export default SignupForm