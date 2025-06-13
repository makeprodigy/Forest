import React from 'react';

const UserOrderHistory = () => {
  // Mock order history
  const orders = [
    { id: 1, date: '2024-06-01', total: 120.5 },
    { id: 2, date: '2024-06-10', total: 45.0 },
  ];
  return (
    <div className="profile-card">
      <div className="profile-card-title">Order History</div>
      {orders.length === 0 ? (
        <div className="profile-empty">No orders yet.</div>
      ) : (
        <ul className="order-history-list">
          {orders.map(order => (
            <li key={order.id} className="order-history-item">
              <span>Order #{order.id} ({order.date})</span>
              <span className="order-history-total">${order.total.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserOrderHistory;