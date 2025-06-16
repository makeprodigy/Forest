import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturedListings = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=6')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0, 5));
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch products:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading featured listings...</p>;

  return (
    <div className="featured-listings">
      <h2 className="main-heading">Featured Listings</h2>
      <div className="product-grid">
        {products.map(product => (
          <div
            key={product.id}
            className="product-card clickable"
            onClick={() => navigate(`/product-details/${product.id}`)}
            tabIndex={0}
            role="button"
            aria-label={`View details for ${product.title}`}
            onKeyDown={e => { if (e.key === 'Enter') navigate(`/product-details/${product.id}`); }}
          >
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="product-rating">⭐ {product.rating?.rate} ({product.rating?.count})</p>
            <div className="product-bottom">
              <span className="product-price">${product.price}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="featured-listings-footer">
        <button className="view-all-products-btn" onClick={() => navigate('/products')}>
          View All Products
        </button>
      </div>
    </div>
  );
};

export default FeaturedListings;
