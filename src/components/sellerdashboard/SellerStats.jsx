import React from 'react';

const SellerStats = () => {

  const stats = {
    totalSales: 1200,
    productsListed: 45,
    ordersCompleted: 300,
    revenue: 50000, 
  };

  return (
    <div className="seller-stats">
      <h2>Dashboard</h2>
      <div className="stats-container">
        <div className="stat-item">
          <h3>Total Sales</h3>
          <p>{stats.totalSales}</p>
        </div>
        <div className="stat-item">
          <h3>Products Listed</h3>
          <p>{stats.productsListed}</p>
        </div>
        <div className="stat-item">
          <h3>Orders Completed</h3>
          <p>{stats.ordersCompleted}</p>
        </div>
        <div className="stat-item">
          <h3>Total Revenue</h3>
          <p>₹{stats.revenue.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default SellerStats;