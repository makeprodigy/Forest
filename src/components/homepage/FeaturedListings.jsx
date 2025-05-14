import React, { useEffect, useState } from 'react';

const FeaturedListings = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="product-rating">⭐ {product.rating?.rate} ({product.rating?.count})</p>
            <div className="product-bottom">
              <span className="product-price">₹{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedListings;
