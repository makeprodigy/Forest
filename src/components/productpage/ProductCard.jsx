import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../cartcheckout/CartContext';
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Eye, 
  Plus, 
  Check,
  Tag,
  ArrowRight
} from 'lucide-react';

const ProductCard = ({ product, viewMode = 'grid' }) => {
  const { title, price, image, rating, id, category } = product;
  const { cart, addToCart, removeFromCart } = useCart();
  const inCart = cart.some(item => item.id === id);
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    // Prevent click if the button is clicked
    if (e.target.tagName === 'BUTTON') return;
    navigate(`/product-details/${id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (inCart) {
      removeFromCart(id);
    } else {
      addToCart(product);
    }
  };

  // Animation variants
  const cardVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    hover: { 
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  const imageVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.1,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const badgeVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    hover: { scale: 1.05 }
  };

  // List view layout
  if (viewMode === 'list') {
    return (
      <motion.div 
        className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100 overflow-hidden"
        onClick={handleCardClick}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <div className="flex flex-col sm:flex-row">
          {/* Product Image */}
          <div className="relative w-full sm:w-48 h-48 flex-shrink-0">
            <motion.img 
              src={image} 
              alt={title} 
              className="w-full h-full object-contain p-4"
              variants={imageVariants}
              whileHover="hover"
            />
            
            {/* Rating Badge */}
            <motion.div 
              className="absolute top-2 sm:top-3 left-2 sm:left-3"
              variants={badgeVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1 shadow-md">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-xs sm:text-sm font-semibold text-gray-800">{rating.rate.toFixed(1)}</span>
                <span className="text-xs text-gray-500">({rating.count})</span>
              </div>
            </motion.div>

            {/* Category Badge */}
            <motion.div 
              className="absolute top-2 sm:top-3 right-2 sm:right-3"
              variants={badgeVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <div className="bg-primary-green-dark/90 text-white rounded-lg px-2 py-1 flex items-center gap-1 shadow-md">
                <Tag className="w-3 h-3" />
                <span className="text-xs font-medium capitalize">{category}</span>
              </div>
            </motion.div>
          </div>

          {/* Product Info */}
          <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-green-dark transition-colors duration-200 line-clamp-2">
                {title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2 sm:line-clamp-3">
                Discover this amazing product with premium quality and excellent features.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-2">
              <div className="text-2xl sm:text-3xl font-bold text-primary-green-dark">
                ${price}
              </div>
              
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <motion.button
                  className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Add to wishlist functionality
                  }}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
                
                <motion.button
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 text-sm sm:text-base ${
                    inCart 
                      ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                      : 'bg-primary-green-dark text-white hover:bg-green-700 shadow-lg hover:shadow-xl'
                  }`}
                  onClick={handleAddToCart}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {inCart ? (
                    <>
                      <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                      Added
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                      Add to Cart
                    </>
                  )}
                </motion.button>

                <motion.button
                  className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/product-details/${id}`);
                  }}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Grid view layout (default)
  return (
    <motion.div 
      className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100 overflow-hidden h-full flex flex-col"
      onClick={handleCardClick}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      {/* Product Image Container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-48 sm:h-56 lg:h-64 object-contain p-4 sm:p-6"
          variants={imageVariants}
          whileHover="hover"
        />
        
        {/* Rating Badge */}
        <motion.div 
          className="absolute top-2 sm:top-3 left-2 sm:left-3"
          variants={badgeVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1 shadow-md">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-xs sm:text-sm font-semibold text-gray-800">{rating.rate.toFixed(1)}</span>
            <span className="text-xs text-gray-500">({rating.count})</span>
          </div>
        </motion.div>

        {/* Category Badge */}
        <motion.div 
          className="absolute top-2 sm:top-3 right-2 sm:right-3"
          variants={badgeVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <div className="bg-primary-green-dark/90 text-white rounded-lg px-2 py-1 flex items-center gap-1 shadow-md">
            <Tag className="w-3 h-3" />
            <span className="text-xs font-medium capitalize">{category}</span>
          </div>
        </motion.div>

        {/* Quick Actions (appears on hover) */}
        <motion.div 
          className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.div 
            className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className="p-2 sm:p-3 rounded-full bg-white/90 text-gray-700 hover:bg-white hover:text-red-500 transition-all duration-200 shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                // Add to wishlist functionality
              }}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
            
            <motion.button
              className={`p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 ${
                inCart 
                  ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                  : 'bg-primary-green-dark text-white hover:bg-green-700'
              }`}
              onClick={handleAddToCart}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {inCart ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />}
            </motion.button>

            <motion.button
              className="p-2 sm:p-3 rounded-full bg-white/90 text-gray-700 hover:bg-white hover:text-primary-green-dark transition-all duration-200 shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/product-details/${id}`);
              }}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        {/* Product Title */}
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-primary-green-dark transition-colors duration-200 line-clamp-2">
          {title}
        </h3>

        {/* Price and Actions */}
        <div className="mt-auto">
          <div className="flex items-center justify-between">
            <div className="text-xl sm:text-2xl font-bold text-primary-green-dark">
              ${price}
            </div>
            
            {/* Mobile Add to Cart Button */}
            <motion.button
              className={`p-2 rounded-lg transition-all duration-200 lg:hidden ${
                inCart 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-primary-green-dark text-white hover:bg-green-700'
              }`}
              onClick={handleAddToCart}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {inCart ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : <Plus className="w-4 h-4 sm:w-5 sm:h-5" />}
            </motion.button>
          </div>

          {/* View Details Link */}
          <motion.div 
            className="mt-2 sm:mt-3 flex items-center text-xs sm:text-sm text-gray-500 group-hover:text-primary-green-dark transition-colors duration-200"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <span>View details</span>
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;