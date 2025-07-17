import React from 'react';
import { useCart } from '../../CartContext';
import { Receipt, Tag, Truck, Shield } from 'lucide-react';

const PriceBreakdown = () => {
  const { cart } = useCart();
  
  if (cart.length === 0) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="space-y-4">
      {/* Price Details */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
            <Receipt className="w-3 h-3 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-800">Price Details</h3>
        </div>
        
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Subtotal ({cart.length} {cart.length === 1 ? 'item' : 'items'})</span>
            <span className="font-medium text-gray-800">${subtotal.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-gray-400" />
              <span className="text-gray-600">Shipping</span>
            </div>
            <span className="font-medium text-gray-800">
              {shipping === 0 ? (
                <span className="text-green-600">Free</span>
              ) : (
                `$${shipping.toFixed(2)}`
              )}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-gray-400" />
              <span className="text-gray-600">Tax (8%)</span>
            </div>
            <span className="font-medium text-gray-800">${tax.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-4"></div>

      {/* Total */}
      <div className="flex justify-between items-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
            <Shield className="w-3 h-3 text-green-600" />
          </div>
          <span className="font-bold text-gray-800">Total</span>
        </div>
        <span className="text-2xl font-bold text-green-600">${total.toFixed(2)}</span>
      </div>

      {/* Shipping Info */}
      {shipping === 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <div className="flex items-center gap-2 text-blue-700">
            <Truck className="w-4 h-4" />
            <span className="text-sm font-medium">Free shipping on orders over $50</span>
          </div>
        </div>
      )}

      {/* Security Badge */}
      <div className="flex items-center justify-center gap-2 text-xs text-gray-500 bg-gray-50 rounded-lg p-3">
        <Shield className="w-4 h-4" />
        <span>Secure checkout with SSL encryption</span>
      </div>
    </div>
  );
};

export default PriceBreakdown;