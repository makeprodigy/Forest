import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-primary-gradient rounded-2xl flex items-center justify-center shadow-glow mx-auto mb-4 animate-bounce-gentle">
            <span className="text-white text-3xl font-bold">🌲</span>
          </div>
          <h1 className="text-3xl font-bold gradient-text animate-pulse-gentle">
            Forest
          </h1>
        </div>

        {/* Loading Spinner */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-neutral-200 rounded-full mx-auto"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
        </div>

        {/* Loading Text */}
        <p className="mt-6 text-neutral-600 font-medium animate-pulse">
          Loading your marketplace...
        </p>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-1 mt-4">
          <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-64 mx-auto">
          <div className="w-full bg-neutral-200 rounded-full h-2">
            <div className="bg-primary-gradient h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
          </div>
        </div>

        {/* Loading Tips */}
        <div className="mt-8 max-w-md mx-auto">
          <p className="text-sm text-neutral-500">
            💡 Tip: You can browse products while we load the best deals for you
          </p>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary-300/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary-300/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default LoadingScreen;