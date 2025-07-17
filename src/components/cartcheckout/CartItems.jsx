import React from 'react';
import { useCart } from '../../CartContext';
import { useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2, ExternalLink, Package } from 'lucide-react';

const CartItems = () => {
  const { cart, removeFromCart, increment, decrement } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Package className="w-8 h-8 text-gray-400" />
        </div>
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {cart.map(item => (
        <div key={item.id} className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-200 group">
          <div className="flex items-start gap-4">
            {/* Product Image */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-200"
                onClick={() => navigate(`/product-details/${item.id}`)}
              />
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ExternalLink className="w-3 h-3 text-blue-600" />
              </div>
            </div>

            {/* Product Details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-semibold text-gray-800 cursor-pointer hover:text-blue-600 transition-colors duration-200 truncate"
                    onClick={() => navigate(`/product-details/${item.id}`)}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">Product ID: {item.id}</p>
                </div>
                <div className="text-right ml-4">
                  <div className="text-xl font-bold text-green-600">${item.price}</div>
                  <div className="text-sm text-gray-500">per item</div>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center bg-gray-50 rounded-lg p-1">
                    <button
                      className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() => decrement(item.id)}
                      disabled={item.quantity <= 1}
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-1 text-lg font-semibold text-gray-800 min-w-[3rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md transition-all duration-200"
                      onClick={() => increment(item.id)}
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">
                    Total: <span className="font-semibold text-green-600">${(item.price * item.quantity).toFixed(2)}</span>
                  </span>
                </div>

                {/* Remove Button */}
                <button
                  className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 group/remove"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remove item from cart"
                >
                  <Trash2 className="w-5 h-5 group-hover/remove:scale-110 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;