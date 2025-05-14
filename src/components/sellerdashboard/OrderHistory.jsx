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
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product Name</th>
            <th>Buyer Name</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.productName}</td>
                <td>{order.buyerName}</td>
                <td>{order.quantity}</td>
                <td className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No orders found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;