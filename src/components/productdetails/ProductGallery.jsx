import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductGallery = ({ images }) => {
  const [selected, setSelected] = useState(0);
  
  if (!images || images.length === 0) return null;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto"
    >
      {/* Main Image */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="relative bg-neutral-50 rounded-2xl overflow-hidden mb-4 group"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={selected}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            src={images[selected]}
            alt={`Product ${selected + 1}`}
            className="w-full h-96 md:h-[500px] object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          />
        </AnimatePresence>
        
        {/* Image Navigation Arrows */}
        {images.length > 1 && (
          <>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelected(selected === 0 ? images.length - 1 : selected - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-medium hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
              <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelected(selected === images.length - 1 ? 0 : selected + 1)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-medium hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
              <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </>
        )}
        
        {/* Image Counter */}
        {images.length > 1 && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium"
          >
            {selected + 1} / {images.length}
          </motion.div>
        )}
      </motion.div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-4 md:grid-cols-6 gap-3"
        >
          {images.map((img, idx) => (
            <motion.button
              key={img}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelected(idx)}
              className={`relative aspect-square bg-neutral-50 rounded-xl overflow-hidden transition-all duration-200 hover:scale-105 ${
                selected === idx 
                  ? 'ring-2 ring-primary-500 ring-offset-2' 
                  : 'hover:ring-2 hover:ring-neutral-300 ring-offset-2'
              }`}
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-contain p-2"
              />
              
              {/* Selected indicator */}
              <AnimatePresence>
                {selected === idx && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="absolute inset-0 bg-primary-500/20 flex items-center justify-center"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
                      className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </motion.div>
      )}

      {/* Image Zoom Feature (Future Enhancement) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-center"
      >
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-sm text-neutral-500 hover:text-primary-600 transition-colors duration-200"
        >
          <motion.span 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mr-1"
          >
            🔍
          </motion.span>
          Click to zoom
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ProductGallery;