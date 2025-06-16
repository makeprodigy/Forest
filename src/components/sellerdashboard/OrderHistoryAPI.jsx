import React from 'react';

const OrderHistoryAPI = () => {
  // TODO: Replace with real API data
  const orders = [
    { id: 1, product: 'Product 1', buyer: 'John Doe', quantity: 2, status: 'Delivered' },
    { id: 2, product: 'Product 2', buyer: 'Jane Smith', quantity: 1, status: 'Pending' },
  ];

  return (
    <div className="order-history-api">
      <h2>Order History (API)</h2>
      <table className="order-history-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>Buyer</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.product}</td>
              <td>{order.buyer}</td>
              <td>{order.quantity}</td>
              <td className={`status ${order.status.toLowerCase()}`}>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistoryAPI; 