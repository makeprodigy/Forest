import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, viewMode = 'grid' }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.3
      }
    }
  };

  const listItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -20,
      scale: 0.98
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: 20,
      scale: 0.98,
      transition: {
        duration: 0.3
      }
    }
  };

  if (viewMode === 'list') {
    return (
      <motion.div 
        className="w-full space-y-3 sm:space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key="list-view"
      >
        <AnimatePresence mode="wait">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={listItemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ delay: index * 0.05 }}
            >
              <ProductCard product={product} viewMode="list" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      key="grid-view"
    >
      <AnimatePresence mode="wait">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ delay: index * 0.05 }}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            <ProductCard product={product} viewMode="grid" />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProductGrid;