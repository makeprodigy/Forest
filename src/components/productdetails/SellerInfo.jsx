import React from 'react'
import { motion } from 'framer-motion'

const SellerInfo = ({ seller }) => {
  if (!seller) return null;
  
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const starVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200
      }
    }
  };
  
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-2xl p-6 border border-slate-200"
    >
      <div className="flex items-center space-x-4">
        <motion.div 
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
        >
          {seller.name[0]}
        </motion.div>
        <motion.div 
          variants={itemVariants}
          className="flex-1"
        >
          <motion.h4 
            variants={itemVariants}
            className="text-lg font-semibold text-slate-900 mb-1"
          >
            Seller Information
          </motion.h4>
          <div className="flex items-center space-x-4">
            <div>
              <motion.p 
                variants={itemVariants}
                className="font-medium text-slate-900"
              >
                {seller.name}
              </motion.p>
              <div className="flex items-center space-x-2 mt-1">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <motion.svg
                      key={i}
                      variants={starVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.3 + i * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className={`w-4 h-4 ${i < Math.floor(seller.rating) ? 'text-yellow-400' : 'text-slate-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>
                <motion.span 
                  variants={itemVariants}
                  className="text-sm text-slate-600"
                >
                  {seller.rating} rating
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          className="flex flex-col items-end space-y-2"
        >
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#e2e8f0" }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors duration-200"
          >
            View Profile
          </motion.button>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center space-x-2 text-xs text-slate-500"
          >
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-green-500 rounded-full"
            ></motion.div>
            <span>Verified Seller</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default SellerInfo