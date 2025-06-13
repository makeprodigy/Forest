import React from 'react';
import { useCart } from '../../CartContext';
import '../../pagescss/CartCheckoutPage.css'; // Import the CSS file

const PriceBreakdown = () => {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) return null;

  return (
    <div className="price-breakdown">
      <div className="price-total">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default PriceBreakdown;