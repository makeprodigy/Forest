import React from 'react';
import '../pagescss/SellerDashboardPage.css';
import SellerProfile from '../components/sellerdashboard/SellerProfile';
import SellerStats from '../components/sellerdashboard/SellerStats';
import OrderHistory from '../components/sellerdashboard/OrderHistory';
import AddProductForm from '../components/sellerdashboard/AddProductForm';
import ProductManagementPanel from '../components/sellerdashboard/ProductManagementPanel';

const SellerDashboardPage = () => {
  return (
    <div className="seller-dashboard-hero-layout">
      <section className="seller-dashboard-hero">
        <div className="seller-dashboard-avatar">GK</div>
        <div className="seller-dashboard-hero-info">
          <h1 className="seller-dashboard-hero-title">Welcome back, GreenLeaf Store!</h1>
          <div className="seller-dashboard-hero-stats">
            <div className="seller-dashboard-hero-stat">
              <span className="stat-label">Products</span>
              <span className="stat-value">45</span>
            </div>
            <div className="seller-dashboard-hero-stat">
              <span className="stat-label">Orders</span>
              <span className="stat-value">300</span>
            </div>
            <div className="seller-dashboard-hero-stat">
              <span className="stat-label">Rating</span>
              <span className="stat-value">⭐ 4.8</span>
            </div>
          </div>
        </div>
      </section>
      <section className="seller-dashboard-section">
        <SellerProfile />
      </section>
      <section className="seller-dashboard-section">
        <AddProductForm />
      </section>
      <section className="seller-dashboard-section">
        <ProductManagementPanel />
      </section>
      <section className="seller-dashboard-section">
        <OrderHistory />
      </section>
    </div>
  );
};

export default SellerDashboardPage;
