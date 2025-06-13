import React from 'react';
import { useCart } from '../../CartContext';
import '../../pagescss/CartCheckoutPage.css';

const CartItems = () => {
  const { cart, removeFromCart, increment, decrement } = useCart();

  if (cart.length === 0) {
    return <div className="cart-empty">Your cart is empty.</div>;
  }

  return (
    <div className="cart-items">
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <div className="cart-item-details">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div>
              <div className="cart-item-title">{item.title}</div>
              <div className="cart-item-price">${item.price} x {item.quantity}</div>
              <div className="cart-item-quantity">
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
              </div>
            </div>
          </div>
          <button
            className="remove-button"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartItems;