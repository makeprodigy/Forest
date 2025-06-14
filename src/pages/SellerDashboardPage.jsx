import React from 'react';
import '../pagescss/SellerDashboardPage.css';
import SellerStats from '../components/sellerdashboard/SellerStats';
import OrderHistory from '../components/sellerdashboard/OrderHistory';
import AddProductForm from '../components/sellerdashboard/AddProductForm';
import ProductManagementPanel from '../components/sellerdashboard/ProductManagementPanel';

const SellerDashboardPage = () => {
  return (
    <div className="seller-dashboard-grid">
      <SellerStats />
      <OrderHistory />
      <AddProductForm />
      <ProductManagementPanel />
    </div>
  );
};

export default SellerDashboardPage;
