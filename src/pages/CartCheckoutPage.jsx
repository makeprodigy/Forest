import React from 'react';
import CartItems from '../components/cartcheckout/CartItems';
import PriceBreakdown from '../components/cartcheckout/PriceBreakdown';
import '../pagescss/CartCheckoutPage.css';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';

const CartCheckoutPage = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  return (
    <div className="checkout-root">
      <h1 className="checkout-title">Checkout</h1>
      <div className="checkout-content">
        <CartItems />
        <div className="checkout-right-col">
          <PriceBreakdown />
          {cart.length > 0 && (
            <div className="proceed-payment-container">
              <button className="proceed-payment-btn" onClick={() => navigate('/payment')}>
                Proceed to Payment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartCheckoutPage;