import React, { useState, useEffect } from 'react';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';

const LoginSignupPage = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-300/10 to-cyan-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex justify-center items-center min-h-screen p-4">
        <div 
          className={`w-full max-w-md transform transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Glassmorphism card */}
          <div className="backdrop-blur-xl bg-white/70 rounded-3xl shadow-2xl border border-white/20 p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                {isLoggedIn ? "Welcome Back" : "Create Account"}
              </h1>
              <p className="text-gray-600 text-sm">
                {isLoggedIn ? "Sign in to your account to continue" : "Join us and start your journey"}
              </p>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {isLoggedIn ? (
                <LoginForm setIsLoggedIn={setIsLoggedIn} />
              ) : (
                <SignupForm setIsLoggedIn={setIsLoggedIn} />
              )}
            </div>

            {/* Switch mode */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm">
                {isLoggedIn ? "Don't have an account? " : "Already have an account? "}
                <button
                  className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-200 underline decoration-2 underline-offset-2"
                  onClick={() => setIsLoggedIn(!isLoggedIn)}
                >
                  {isLoggedIn ? "Sign Up" : "Sign In"}
                </button>
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-6">
            <p className="text-gray-500 text-xs">
              By continuing, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupPage;