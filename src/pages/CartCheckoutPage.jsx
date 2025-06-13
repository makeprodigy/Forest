import React from 'react';
import CartItems from '../components/cartcheckout/CartItems';
import PriceBreakdown from '../components/cartcheckout/PriceBreakdown';
import '../pagescss/CartCheckoutPage.css';

const CartCheckoutPage = () => {
  return (
    <div className="checkout-root">
      <h1 className="checkout-title">Checkout</h1>
      <div className="checkout-content">
        <CartItems />
        <PriceBreakdown />
      </div>
    </div>
  );
}

export default CartCheckoutPage;