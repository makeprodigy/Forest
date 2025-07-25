import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ProductGallery from '../components/productdetails/ProductGallery';
import ProductDescription from '../components/productdetails/ProductDescription';
import RatingsAndReviews from '../components/productdetails/RatingsAndReviews';
import SellerInfo from '../components/productdetails/SellerInfo';
import { useCart } from '../components/cartcheckout/CartContext';

const mockProduct = {
  id: 0,
  title: 'Sample Product',
  price: 99.99,
  images: [
    'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
  ],
  description: 'A great product for your needs. High quality and reliable.',
  category: 'electronics',
  rating: { rate: 4.5, count: 120 },
  reviews: [
    { user: 'Alice', rating: 5, comment: 'Excellent!' },
    { user: 'Bob', rating: 4, comment: 'Very good.' },
  ],
  seller: { name: 'Best Seller', rating: 4.8 },
};

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { cart, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Product not found');
        return res.json();
      })
      .then(data => setProduct(data))
      .catch(() => setProduct(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="rounded-full h-16 w-16 border-b-2 border-primary-600 mx-auto mb-4"
          ></motion.div>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg"
          >
            Loading product details...
          </motion.p>
        </motion.div>
      </motion.div>
    );
  }

  if (!product) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md mx-auto p-8"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </motion.div>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold text-slate-800 mb-2"
          >
            Product Not Found
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-600"
          >
            The product you're looking for doesn't exist or has been removed.
          </motion.p>
        </motion.div>
      </motion.div>
    );
  }

  // Prepare product data for components
  const images = product.image ? [product.image] : mockProduct.images;
  const description = product.description || mockProduct.description;
  const title = product.title || mockProduct.title;
  const price = product.price || mockProduct.price;
  const category = product.category || mockProduct.category;
  const rating = product.rating || mockProduct.rating;
  const reviews = generateReviews(rating);
  const seller = mockProduct.seller;
  const inCart = cart.some(item => item.id === product.id);

  // Generate mock reviews based on product rating/count
  function generateReviews(rating) {
    if (!rating || !rating.count) return [];
    const count = rating.count;
    const avg = rating.rate;
    const users = [
      'Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy'
    ];
    const comments = [
      'Excellent!', 'Very good.', 'Pretty decent.', 'Could be better.', 'Loved it!',
      'Not bad.', 'Would buy again.', 'Highly recommend.', 'Just okay.', 'Amazing product!'
    ];
    let stars = Array(count).fill(Math.floor(avg));
    let sum = stars.reduce((a, b) => a + b, 0);
    let diff = Math.round(avg * count) - sum;
    for (let i = 0; i < Math.abs(diff); i++) {
      if (diff > 0) stars[i] += 1;
      if (diff < 0 && stars[i] > 1) stars[i] -= 1;
    }
    return Array.from({ length: count }).map((_, i) => ({
      user: users[i % users.length],
      rating: stars[i],
      comment: comments[i % comments.length],
    }));
  }

  // Animation variants
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

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"
    >
      {/* Breadcrumb */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8"
      >
        <motion.nav 
          variants={itemVariants}
          className="flex items-center space-x-2 text-sm text-slate-600 mb-8"
        >
          <motion.a 
            whileHover={{ color: "#2563eb" }}
            href="/" 
            className="hover:text-primary-600 transition-colors"
          >
            Home
          </motion.a>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <motion.a 
            whileHover={{ color: "#2563eb" }}
            href="/products" 
            className="hover:text-primary-600 transition-colors"
          >
            Products
          </motion.a>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-slate-900 font-medium">{title}</span>
        </motion.nav>
      </motion.div>

      {/* Main Product Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
      >
        <motion.div 
          variants={cardVariants}
          whileHover="hover"
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          {/* Product Header */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-50 to-blue-50 px-8 py-6 border-b border-slate-100"
          >
            <div className="flex items-center justify-between">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                  {category}
                </span>
              </motion.div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <motion.svg
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className={`w-5 h-5 ${i < Math.floor(rating.rate) ? 'text-yellow-400' : 'text-slate-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>
                  <motion.span 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-sm text-slate-600 ml-2"
                  >
                    {rating.rate} ({rating.count} reviews)
                  </motion.span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Gallery Column */}
            <motion.div 
              variants={itemVariants}
              className="p-8 bg-white"
            >
              <ProductGallery images={images} />
            </motion.div>

            {/* Info Column */}
            <motion.div 
              variants={itemVariants}
              className="p-8 bg-slate-50"
            >
              <div className="space-y-6">
                {/* Product Title */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl font-bold text-slate-900 leading-tight mb-2"
                  >
                    {title}
                  </motion.h1>
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center space-x-4"
                  >
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                      className="text-3xl font-bold text-primary-600"
                    >
                      ${price.toFixed(2)}
                    </motion.span>
                    <span className="text-sm text-slate-500">Free shipping</span>
                  </motion.div>
                </motion.div>

                {/* Product Description */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <ProductDescription description={description} />
                </motion.div>

                {/* Add to Cart Section */}
                <motion.div 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 border border-slate-200"
                >
                  <div className="flex items-center space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${
                        inCart
                          ? 'bg-slate-100 text-slate-600 cursor-not-allowed'
                          : 'bg-primary-600 text-white hover:bg-primary-700 active:scale-95 shadow-lg hover:shadow-xl'
                      }`}
                      onClick={() => {
                        if (inCart) {
                          removeFromCart(product.id);
                        } else {
                          addToCart(product);
                        }
                      }}
                      disabled={inCart}
                    >
                      <AnimatePresence mode="wait">
                        {inCart ? (
                          <motion.div 
                            key="added"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="flex items-center justify-center space-x-2"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Added to Cart</span>
                          </motion.div>
                        ) : (
                          <motion.div 
                            key="add"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="flex items-center justify-center space-x-2"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                            </svg>
                            <span>Add to Cart</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </div>
                  
                  {/* Quick Features */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-6 grid grid-cols-2 gap-4"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-3 text-sm text-slate-600"
                    >
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                      >
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                      <span>Free Returns</span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-3 text-sm text-slate-600"
                    >
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
                      >
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </motion.div>
                      <span>Fast Delivery</span>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Seller Info */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <SellerInfo seller={seller} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Reviews Section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-8"
        >
          <RatingsAndReviews reviews={reviews} actualAvg={rating.rate} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProductDetailsPage;