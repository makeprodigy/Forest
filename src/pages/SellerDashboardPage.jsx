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
        <h3>Add a New Product</h3>
        <AddProductForm />
      </section>

      <section className="product-management-section">
        <h3>Manage Your Products</h3>
        <ProductManagementPanel />
      </section>

      <section className="order-history-section">
        <h3>Order History</h3>
        <OrderHistory />
      </section>

    </div>
  );
};

export default SellerDashboardPage;
