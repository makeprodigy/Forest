import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../CartContext';

const ProductCard = ({ product }) => {
  const { title, price, image, rating, id } = product;
  const { cart, addToCart, removeFromCart } = useCart();
  const inCart = cart.some(item => item.id === id);
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    // Prevent click if the button is clicked
    if (e.target.tagName === 'BUTTON') return;
    navigate(`/product-details/${id}`);
  };

  return (
    <div className="products-page-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      {!id && <div style={{color: 'red'}}>Product missing id</div>}
      <img src={image} alt={title} className="products-page-card-img" />
      <h4 className="products-page-card-title">{title}</h4>
      <div className="products-page-card-rating">
        <span className="products-page-card-star">⭐</span>
        <span className="products-page-card-rating-value">{rating.rate.toFixed(1)}</span>
        <span className="products-page-card-reviews">({rating.count})</span>
      </div>
      <p className="products-page-card-price">${price}</p>
      <button
        className={`products-page-card-button${inCart ? ' added' : ''}`}
        style={inCart ? { backgroundColor: 'rgba(128,128,128,0.3)', color: '#888', cursor: 'not-allowed' } : {}}
        onClick={(e) => {
          e.stopPropagation();
          if (inCart) {
            removeFromCart(id);
          } else {
            addToCart(product);
          }
        }}
      >
        {inCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;