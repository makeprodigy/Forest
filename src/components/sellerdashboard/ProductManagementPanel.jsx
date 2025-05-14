import React, { useState } from 'react';


const ProductManagementPanel = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 100, category: 'Category 1', stock: 10 },
    { id: 2, name: 'Product 2', price: 200, category: 'Category 2', stock: 5 },
    { id: 3, name: 'Product 3', price: 300, category: 'Category 3', stock: 0 },
  ]);

  const handleEdit = (id) => {
    console.log(`Edit product with ID: ${id}`);
    // Add logic to edit the product
  };

  const handleDelete = (id) => {
    console.log(`Delete product with ID: ${id}`);
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="product-management-panel">
      <h2>Manage Your Products</h2>
      <table className="product-table">
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
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>₹{product.price}</td>
                <td>{product.category}</td>
                <td>{product.stock > 0 ? product.stock : 'Out of Stock'}</td>
                <td>
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(product.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No products found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagementPanel;