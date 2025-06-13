import React from 'react';
import { useCart } from '../../CartContext';

const PriceBreakdown = () => {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) return null;

  return (
    <div className="bg-white rounded-lg shadow p-4 mt-4">
      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default PriceBreakdown;