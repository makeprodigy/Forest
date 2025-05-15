import React from 'react';

const ProductCard = ({ product }) => {
  const { title, price, image, rating } = product;

  return (
    <div className="products-page-card">
      <img src={image} alt={title} className="products-page-card-img" />
      <h4 className="products-page-card-title">{title}</h4>
      <div className="products-page-card-rating">
        <span className="products-page-card-star">⭐</span>
        <span className="products-page-card-rating-value">{rating.rate.toFixed(1)}</span>
        <span className="products-page-card-reviews">({rating.count})</span>
      </div>
      <p className="products-page-card-price">${price}</p>
      <button className="products-page-card-button">Add to Cart</button>
    </div>
  );
};

export default ProductCard;