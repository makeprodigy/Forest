import React from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const navigate = useNavigate();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-500">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5"></div>
      <motion.div 
        className="absolute top-20 left-20 w-32 h-32 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
        variants={floatingVariants}
        animate="animate"
      ></motion.div>
      <motion.div 
        className="absolute bottom-20 right-20 w-40 h-40 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" 
        style={{ animationDelay: '1s' }}
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-64 sm:h-64 bg-cyan-500/10 rounded-full blur-2xl animate-pulse" 
        style={{ animationDelay: '2s' }}
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      ></motion.div>
      
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div 
          className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 sm:mb-8"
          variants={itemVariants}
        >
          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-white/90 text-xs sm:text-sm font-medium">Trusted by 10,000+ users worldwide</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1 
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-tight"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Discover
          </span>
          <br />
          <span className="text-white drop-shadow-2xl">
            Amazing Products
          </span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4"
          variants={itemVariants}
        >
          Your premier marketplace for buying and selling unique items. 
          Join our thriving community of creators and collectors.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4"
          variants={itemVariants}
        >
          <motion.button 
            className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-purple-500 w-full sm:w-auto"
            onClick={() => navigate('/products')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Start Shopping
            <svg className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>
          
          <motion.button 
            className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            onClick={() => navigate('/seller-dashboard')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
            </svg>
            Become a Seller
            <svg className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>
        </motion.div>
        
        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4"
          variants={itemVariants}
        >
          {[
            { number: "10K+", label: "Happy Customers", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", color: "blue" },
            { number: "5K+", label: "Products Listed", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4", color: "purple" },
            { number: "99%", label: "Satisfaction Rate", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", color: "green" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <div className={`p-2 sm:p-3 bg-gradient-to-r from-${stat.color}-500/20 to-${stat.color === 'purple' ? 'pink' : stat.color === 'green' ? 'emerald' : 'purple'}-500/20 rounded-2xl backdrop-blur-sm`}>
                  <svg className={`w-6 h-6 sm:w-8 sm:h-8 text-${stat.color}-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                  </svg>
                </div>
              </div>
              <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2 group-hover:text-blue-400 transition-colors duration-300">{stat.number}</div>
              <div className="text-white/70 font-medium text-sm sm:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection