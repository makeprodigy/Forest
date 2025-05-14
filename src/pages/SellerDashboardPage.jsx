import React from 'react';
import SellerStats from '../components/sellerdashboard/SellerStats';
import AddProductForm from '../components/sellerdashboard/AddProductForm';
import ProductManagementPanel from '../components/sellerdashboard/ProductManagementPanel';
import OrderHistory from '../components/sellerdashboard/OrderHistory';

import '../pagescss/SellerDashboardPage.css';

const SellerDashboardPage = () => {
  return (
    <div className="seller-dashboard">

      <section className="seller-summary">
        <h2 className='seller-greeting'>Welcome Back, Seller</h2>
        <SellerStats />
      </section>

      <section className="add-product-section">
        <AddProductForm />
      </section>

      <section className="product-management-section">
        <ProductManagementPanel />
      </section>

      <section className="order-history-section">
        <OrderHistory />
      </section>

    </div>
  );
};

export default SellerDashboardPage;
