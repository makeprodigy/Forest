import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2, ExternalLink, Package } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CartItems = () => {
  const { cart, removeFromCart, increment, decrement } = useCart();
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    initial: { 
      opacity: 0, 
      y: 20, 
      scale: 0.95,
      x: -20
    },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    },
    exit: { 
      opacity: 0, 
      x: -100, 
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.9 }
  };

  const quantityVariants = {
    initial: { scale: 1 },
    animate: { 
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  if (cart.length === 0) {
    return (
      <motion.div 
        className="text-center py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.2
          }}
        >
          <Package className="w-8 h-8 text-gray-400" />
        </motion.div>
        <motion.p 
          className="text-gray-500 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Your cart is empty.
        </motion.p>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="space-y-4"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <AnimatePresence mode="popLayout">
        {cart.map((item, index) => (
          <motion.div 
            key={item.id} 
            className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-200 group"
            variants={itemVariants}
            whileHover="hover"
            layout
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              layout: { duration: 0.3, ease: "easeInOut" }
            }}
          >
            <div className="flex items-start gap-4">
              {/* Product Image */}
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-200"
                  onClick={() => navigate(`/product-details/${item.id}`)}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
                <motion.div 
                  className="absolute -top-1 -right-1 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ExternalLink className="w-3 h-3 text-blue-600" />
                </motion.div>
              </motion.div>

              {/* Product Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1 min-w-0">
                    <motion.h3
                      className="font-semibold text-gray-800 cursor-pointer hover:text-blue-600 transition-colors duration-200 truncate"
                      onClick={() => navigate(`/product-details/${item.id}`)}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {item.title}
                    </motion.h3>
                    <p className="text-sm text-gray-500 mt-1">Product ID: {item.id}</p>
                  </div>
                  <motion.div 
                    className="text-right ml-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <div className="text-xl font-bold text-green-600">${item.price}</div>
                    <div className="text-sm text-gray-500">per item</div>
                  </motion.div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="flex items-center bg-gray-50 rounded-lg p-1"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <motion.button
                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={() => decrement(item.id)}
                        disabled={item.quantity <= 1}
                        aria-label="Decrease quantity"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <Minus className="w-4 h-4" />
                      </motion.button>
                      <motion.span 
                        className="px-4 py-1 text-lg font-semibold text-gray-800 min-w-[3rem] text-center"
                        key={item.quantity}
                        variants={quantityVariants}
                        initial="initial"
                        animate="animate"
                      >
                        {item.quantity}
                      </motion.span>
                      <motion.button
                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md transition-all duration-200"
                        onClick={() => increment(item.id)}
                        aria-label="Increase quantity"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <Plus className="w-4 h-4" />
                      </motion.button>
                    </motion.div>
                    <motion.span 
                      className="text-sm text-gray-500"
                      key={`${item.id}-${item.quantity}`}
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.3 }}
                    >
                      Total: <span className="font-semibold text-green-600">${(item.price * item.quantity).toFixed(2)}</span>
                    </motion.span>
                  </div>

                  {/* Remove Button */}
                  <motion.button
                    className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 group/remove"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove item from cart"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <motion.div
                      whileHover={{ rotate: 90 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Trash2 className="w-5 h-5 group-hover/remove:scale-110 transition-transform duration-200" />
                    </motion.div>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default CartItems;