import React, { useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Aditi Sharma",
    feedback: "This marketplace has completely changed the way I shop. Reliable sellers and a seamless interface!",
    role: "Verified Buyer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5
  },
  {
    name: "Rahul Mehta",
    feedback: "Excellent product quality and fast delivery. Highly recommended!",
    role: "Seller",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5
  },
  {
    name: "Priya Nair",
    feedback: "User-friendly, quick support, and a wide variety of products. I love it!",
    role: "Frequent Shopper",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    rating: 5
  },
  {
    name: "Aman Verma",
    feedback: "The seller dashboard and tools are intuitive. Helped me grow my small business online.",
    role: "Marketplace Vendor",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
    rating: 5
  }
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const visible = isMobile ? [testimonials[active]] : testimonials;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 sm:mb-6"
            variants={itemVariants}
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
            <span className="text-xs sm:text-sm font-medium text-white/90">Customer Reviews</span>
          </motion.div>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4"
            variants={itemVariants}
          >
            What Our Users Say
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto px-4"
            variants={itemVariants}
          >
            Real feedback from our community of buyers and sellers
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {visible.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              {/* Rating */}
              <motion.div 
                className="flex items-center mb-4 sm:mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.svg 
                    key={i} 
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 + i * 0.1 }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </motion.div>

              {/* Quote Icon */}
              <motion.div 
                className="mb-4 sm:mb-6"
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </motion.div>

              {/* Feedback */}
              <motion.p 
                className="text-white/90 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                "{testimonial.feedback}"
              </motion.p>

              {/* User Info */}
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-purple-400/50"
                  />
                  {/* Verification Badge */}
                  <motion.div 
                    className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5 sm:p-1"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </motion.div>
                <div className="ml-3 sm:ml-4">
                  <h4 className="text-white font-semibold text-sm sm:text-base">{testimonial.name}</h4>
                  <div className="flex items-center text-white/70 text-xs sm:text-sm">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Pagination */}
        {isMobile && (
          <motion.div 
            className="flex justify-center gap-2 sm:gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  active === idx 
                    ? 'bg-purple-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                onClick={() => setActive(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div 
          className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center"
          variants={statsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            { value: "98%", label: "Customer Satisfaction", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", color: "blue" },
            { value: "50K+", label: "Happy Customers", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", color: "purple" },
            { value: "24/7", label: "Customer Support", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", color: "green" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="flex items-center justify-center mb-3 sm:mb-4"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`p-3 sm:p-4 bg-gradient-to-r from-${stat.color}-500/20 to-${stat.color === 'purple' ? 'pink' : stat.color === 'green' ? 'emerald' : 'purple'}-500/20 rounded-2xl backdrop-blur-sm`}>
                  <svg className={`w-6 h-6 sm:w-8 sm:h-8 text-${stat.color}-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                  </svg>
                </div>
              </motion.div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-white/70 text-sm sm:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

