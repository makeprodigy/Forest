import React, { useState } from 'react';
import { useCart } from '../../CartContext';

const PaymentForm = () => {
  const { cart, clearCart } = useCart();
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: '', card: '' });

  if (cart.length === 0) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    clearCart();
  };

  if (success) {
    return <div className="text-success text-xl text-center mt-8 font-semibold">Payment successful! Thank you for your purchase.</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg shadow-black/10 px-6 py-8 max-w-sm mx-auto flex flex-col gap-5">
      <div>
        <label className="font-medium text-gray-800 mb-1">Name on Card</label>
        <input 
          className="w-full px-3 py-2 border border-gray-400 rounded-md text-base mb-3 bg-gray-100 transition-colors duration-200 focus:border-2 focus:border-success focus:outline-none"
          name="name" 
          value={form.name} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label className="font-medium text-gray-800 mb-1">Card Number</label>
        <input 
          className="w-full px-3 py-2 border border-gray-400 rounded-md text-base mb-3 bg-gray-100 transition-colors duration-200 focus:border-2 focus:border-success focus:outline-none"
          name="card" 
          value={form.card} 
          onChange={handleChange} 
          required 
        />
      </div>
      <button 
        className="bg-success text-white border-none rounded-md px-5 py-3 text-lg font-semibold cursor-pointer transition-colors duration-200 hover:bg-green-800"
        type="submit"
      >
        Pay Now
      </button>
    </form>
  );
};

export default PaymentForm;