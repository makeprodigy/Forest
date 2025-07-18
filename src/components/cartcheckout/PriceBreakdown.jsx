import React from 'react';
import { useCart } from '../../CartContext';
import { Receipt, Tag, Truck, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PriceBreakdown = () => {
  const { cart } = useCart();
  
  if (cart.length === 0) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  // Animation variants
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  const totalVariants = {
    initial: { opacity: 0, scale: 0.9, y: 20 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        delay: 0.4
      }
    }
  };

  const badgeVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        delay: 0.6
      }
    },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  const priceVariants = {
    initial: { scale: 1 },
    animate: { 
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="space-y-4"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {/* Price Details */}
      <motion.div 
        className="space-y-3"
        variants={itemVariants}
      >
        <motion.div 
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <motion.div 
            className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Receipt className="w-3 h-3 text-blue-600" />
          </motion.div>
          <h3 className="font-semibold text-gray-800">Price Details</h3>
        </motion.div>
        
        <motion.div 
          className="space-y-2 text-sm"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="flex justify-between items-center"
            variants={itemVariants}
          >
            <span className="text-gray-600">Subtotal ({cart.length} {cart.length === 1 ? 'item' : 'items'})</span>
            <motion.span 
              className="font-medium text-gray-800"
              key={subtotal}
              variants={priceVariants}
              initial="initial"
              animate="animate"
            >
              ${subtotal.toFixed(2)}
            </motion.span>
          </motion.div>
          
          <motion.div 
            className="flex justify-between items-center"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Truck className="w-4 h-4 text-gray-400" />
              </motion.div>
              <span className="text-gray-600">Shipping</span>
            </div>
            <motion.span 
              className="font-medium text-gray-800"
              key={shipping}
              variants={priceVariants}
              initial="initial"
              animate="animate"
            >
              {shipping === 0 ? (
                <span className="text-green-600">Free</span>
              ) : (
                `$${shipping.toFixed(2)}`
              )}
            </motion.span>
          </motion.div>
          
          <motion.div 
            className="flex justify-between items-center"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Tag className="w-4 h-4 text-gray-400" />
              </motion.div>
              <span className="text-gray-600">Tax (8%)</span>
            </div>
            <motion.span 
              className="font-medium text-gray-800"
              key={tax}
              variants={priceVariants}
              initial="initial"
              animate="animate"
            >
              ${tax.toFixed(2)}
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Divider */}
      <motion.div 
        className="border-t border-gray-200 my-4"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />

      {/* Total */}
      <motion.div 
        className="flex justify-between items-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4"
        variants={totalVariants}
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
          transition: { duration: 0.3 }
        }}
      >
        <div className="flex items-center gap-2">
          <motion.div 
            className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Shield className="w-3 h-3 text-green-600" />
          </motion.div>
          <span className="font-bold text-gray-800">Total</span>
        </div>
        <motion.span 
          className="text-2xl font-bold text-green-600"
          key={total}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.4 }}
        >
          ${total.toFixed(2)}
        </motion.span>
      </motion.div>

      {/* Shipping Info */}
      <AnimatePresence>
        {shipping === 0 && (
          <motion.div 
            className="bg-blue-50 border border-blue-200 rounded-lg p-3"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 24
            }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-2 text-blue-700">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Truck className="w-4 h-4" />
              </motion.div>
              <span className="text-sm font-medium">Free shipping on orders over $50</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Security Badge */}
      <motion.div 
        className="flex items-center justify-center gap-2 text-xs text-gray-500 bg-gray-50 rounded-lg p-3"
        variants={badgeVariants}
        whileHover="hover"
      >
        <motion.div
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Shield className="w-4 h-4" />
        </motion.div>
        <span>Secure checkout with SSL encryption</span>
      </motion.div>
    </motion.div>
  );
};

export default PriceBreakdown;