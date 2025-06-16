import React from 'react';
import { useCart } from '../../CartContext';
import '../../pagescss/CartCheckoutPage.css';
import { useNavigate } from 'react-router-dom';

const CartItems = () => {
  const { cart, removeFromCart, increment, decrement } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return <div className="cart-empty">Your cart is empty.</div>;
  }

  return (
    <div className="cart-items">
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <div className="cart-item-details">
            <img
              src={item.image}
              alt={item.title}
              className="cart-item-image cart-item-clickable"
              onClick={() => navigate(`/product-details/${item.id}`)}
              style={{ cursor: 'pointer' }}
            />
            <div>
              <div
                className="cart-item-title cart-item-clickable"
                onClick={() => navigate(`/product-details/${item.id}`)}
                style={{ cursor: 'pointer' }}
              >
                {item.title}
              </div>
              <div className="cart-item-quantity-row">
                <button
                  className="quantity-button decrement"
                  onClick={() => decrement(item.id)}
                  aria-label="Decrement"
                >
                  -
                </button>
                <span className="quantity-value">{item.quantity}</span>
                <button
                  className="quantity-button increment"
                  onClick={() => increment(item.id)}
                  aria-label="Increment"
                >
                  +
                </button>
                <span style={{ display: 'inline-block', width: '1.2rem' }} />
                <button
                  className="delete-icon-btn"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Delete"
                >
                  🗑️
                </button>
              </div>
            </div>
          </div>
          <div className="cart-item-price-summary">
            <div className="cart-item-price">${item.price}</div>
            <div className="cart-item-qty">Qty: {item.quantity}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;