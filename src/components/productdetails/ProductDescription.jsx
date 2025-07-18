import React from 'react'
import { motion } from 'framer-motion'

const ProductDescription = ({ description }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const featureVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
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
      <motion.div 
        variants={itemVariants}
        className="flex items-center space-x-3 mb-4"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center"
        >
          <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </motion.div>
        <motion.h3 
          variants={itemVariants}
          className="text-lg font-semibold text-slate-900"
        >
          Product Description
        </motion.h3>
      </motion.div>
      
      <motion.div 
        variants={itemVariants}
        className="prose prose-slate max-w-none"
      >
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-slate-700 leading-relaxed text-base"
        >
          {description || 'Product description coming soon.'}
        </motion.p>
      </motion.div>
      
      {/* Key Features */}
      <motion.div 
        variants={itemVariants}
        className="mt-6 pt-6 border-t border-slate-100"
      >
        <motion.h4 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm font-semibold text-slate-900 mb-3"
        >
          Key Features
        </motion.h4>
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 gap-3"
        >
          <motion.div 
            variants={featureVariants}
            whileHover={{ x: 5 }}
            className="flex items-center space-x-3 text-sm text-slate-600"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 300 }}
              className="w-2 h-2 bg-primary-500 rounded-full"
            ></motion.div>
            <span>High-quality materials</span>
          </motion.div>
          <motion.div 
            variants={featureVariants}
            whileHover={{ x: 5 }}
            className="flex items-center space-x-3 text-sm text-slate-600"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 300 }}
              className="w-2 h-2 bg-primary-500 rounded-full"
            ></motion.div>
            <span>Durable construction</span>
          </motion.div>
          <motion.div 
            variants={featureVariants}
            whileHover={{ x: 5 }}
            className="flex items-center space-x-3 text-sm text-slate-600"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
              className="w-2 h-2 bg-primary-500 rounded-full"
            ></motion.div>
            <span>1-year warranty</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ProductDescription