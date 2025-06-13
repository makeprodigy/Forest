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
    return <div className="payment-success">Payment successful! Thank you for your purchase.</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <div>
        <label>Name on Card</label>
        <input name="name" value={form.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Card Number</label>
        <input name="card" value={form.card} onChange={handleChange} required />
      </div>
      <button type="submit">Pay Now</button>
    </form>
  );
};

export default PaymentForm;