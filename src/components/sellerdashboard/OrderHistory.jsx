import React, { useState } from 'react';

const OrderHistory = () => {

  const [orders, setOrders] = useState([
    {
      id: 1,
      productName: 'Product 1',
      buyerName: 'John Doe',
      quantity: 2,
      status: 'Delivered',
    },
    {
      id: 2,
      productName: 'Product 2',
      buyerName: 'Jane Smith',
      quantity: 1,
      status: 'Pending',
    },
    {
      id: 3,
      productName: 'Product 3',
      buyerName: 'Alice Johnson',
      quantity: 3,
      status: 'Shipped',
    },
  ]);

  return (
    <div className="order-history">
      <h2>Order History</h2>
      <div className="seller-order-cards">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div className="seller-order-card" key={order.id}>
              <div className="seller-order-card-row"><span className="order-label">Order ID:</span> {order.id}</div>
              <div className="seller-order-card-row"><span className="order-label">Product:</span> {order.productName}</div>
              <div className="seller-order-card-row"><span className="order-label">Buyer:</span> {order.buyerName}</div>
              <div className="seller-order-card-row"><span className="order-label">Quantity:</span> {order.quantity}</div>
              <div className={`seller-order-card-row status-badge ${order.status.toLowerCase()}`}>Status: {order.status}</div>
            </div>
          ))
        ) : (
          <div className="seller-order-card-empty">No orders found.</div>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;