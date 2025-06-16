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
      <div className="seller-product-cards">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="seller-product-card" key={product.id}>
              <div className="seller-product-card-title">{product.name}</div>
              <div className="seller-product-card-info">
                <span>Price: <b>₹{product.price}</b></span>
                <span>Category: <b>{product.category}</b></span>
                <span>Stock: <b>{product.stock > 0 ? product.stock : 'Out of Stock'}</b></span>
              </div>
              <div className="seller-product-card-actions">
                <button className="edit-button" onClick={() => handleEdit(product.id)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(product.id)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <div className="seller-product-card-empty">No products found.</div>
        )}
      </div>
    </div>
  );
};

export default ProductManagementPanel;