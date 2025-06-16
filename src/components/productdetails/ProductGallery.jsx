import React, { useState } from 'react';

const ProductGallery = ({ images }) => {
  const [selected, setSelected] = useState(0);
  if (!images || images.length === 0) return null;
  return (
    <div className="product-gallery-section">
      <img
        src={images[selected]}
        alt={`Product ${selected + 1}`}
        className="product-gallery-main-img"
      />
      {images.length > 1 && (
        <div className="product-gallery-thumbnails">
          {images.map((img, idx) => (
            <img
              key={img}
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className={`product-gallery-thumb${selected === idx ? ' selected' : ''}`}
              onClick={() => setSelected(idx)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;