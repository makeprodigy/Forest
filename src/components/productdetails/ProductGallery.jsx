import React, { useState } from 'react';

const ProductGallery = ({ images }) => {
  const [selected, setSelected] = useState(0);
  
  if (!images || images.length === 0) return null;
  
  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Main Image */}
      <div className="relative bg-neutral-50 rounded-2xl overflow-hidden mb-4 group">
        <img
          src={images[selected]}
          alt={`Product ${selected + 1}`}
          className="w-full h-96 md:h-[500px] object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Image Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => setSelected(selected === 0 ? images.length - 1 : selected - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-medium hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
              <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setSelected(selected === images.length - 1 ? 0 : selected + 1)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-medium hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
              <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
        
        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
            {selected + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
          {images.map((img, idx) => (
            <button
              key={img}
              onClick={() => setSelected(idx)}
              className={`relative aspect-square bg-neutral-50 rounded-xl overflow-hidden transition-all duration-200 hover:scale-105 ${
                selected === idx 
                  ? 'ring-2 ring-primary-500 ring-offset-2' 
                  : 'hover:ring-2 hover:ring-neutral-300 ring-offset-2'
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-contain p-2"
              />
              
              {/* Selected indicator */}
              {selected === idx && (
                <div className="absolute inset-0 bg-primary-500/20 flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Image Zoom Feature (Future Enhancement) */}
      <div className="mt-4 text-center">
        <button className="text-sm text-neutral-500 hover:text-primary-600 transition-colors duration-200">
          <span className="mr-1">🔍</span>
          Click to zoom
        </button>
      </div>
    </div>
  );
};

export default ProductGallery;