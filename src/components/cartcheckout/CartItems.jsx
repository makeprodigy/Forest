import React from 'react';
import { useCart } from '../../CartContext';

const CartItems = () => {
  const { cart, removeFromCart, increment, decrement } = useCart();

  if (cart.length === 0) {
    return <div className="text-center text-gray-500">Your cart is empty.</div>;
  }

  return (
    <div className="space-y-4">
      {cart.map(item => (
        <div key={item.id} className="flex items-center justify-between bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-4">
            <img src={item.image} alt={item.title} className="w-16 h-16 object-contain rounded" />
            <div>
              <div className="font-semibold">{item.title}</div>
              <div className="text-sm text-gray-600">${item.price} x {item.quantity}</div>
              <div className="flex items-center gap-2 mt-1">
                <button
                  className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                  onClick={() => decrement(item.id)}
                  aria-label="Decrement"
                >
                  -
                </button>
                <span className="px-2">{item.quantity}</span>
                <button
                  className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                  onClick={() => increment(item.id)}
                  aria-label="Increment"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
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