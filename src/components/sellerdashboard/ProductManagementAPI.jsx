import React from 'react';

const ProductManagementAPI = () => {
  // TODO: Replace with real API data
  const products = [
    { id: 1, name: 'Product 1', price: 100, category: 'Category 1', stock: 10 },
    { id: 2, name: 'Product 2', price: 200, category: 'Category 2', stock: 0 },
  ];

  return (
    <div className="product-management-api">
      <h2>Product Management (API)</h2>
      <table className="product-management-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>₹{product.price}</td>
              <td>{product.category}</td>
              <td>{product.stock > 0 ? product.stock : 'Out of Stock'}</td>
              <td>
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagementAPI; 