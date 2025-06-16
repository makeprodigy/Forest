import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductGallery from '../components/productdetails/ProductGallery';
import ProductDescription from '../components/productdetails/ProductDescription';
import RatingsAndReviews from '../components/productdetails/RatingsAndReviews';
import SellerInfo from '../components/productdetails/SellerInfo';
import '../pagescss/ProductDetailsPage.css';
import { useCart } from '../CartContext';

const mockProduct = {
  id: 0,
  title: 'Sample Product',
  price: 99.99,
  images: [
    'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
  ],
  description: 'A great product for your needs. High quality and reliable.',
  category: 'electronics',
  rating: { rate: 4.5, count: 120 },
  reviews: [
    { user: 'Alice', rating: 5, comment: 'Excellent!' },
    { user: 'Bob', rating: 4, comment: 'Very good.' },
  ],
  seller: { name: 'Best Seller', rating: 4.8 },
};

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { cart, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Product not found');
        return res.json();
      })
      .then(data => setProduct(data))
      .catch(() => setProduct(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="product-details-root">Loading...</div>;
  if (!product) return <div className="product-details-root error">Product not found.</div>;

  // Prepare product data for components
  const images = product.image ? [product.image] : mockProduct.images;
  const description = product.description || mockProduct.description;
  const title = product.title || mockProduct.title;
  const price = product.price || mockProduct.price;
  const category = product.category || mockProduct.category;
  const rating = product.rating || mockProduct.rating;
  const reviews = generateReviews(rating);
  const seller = mockProduct.seller;
  const inCart = cart.some(item => item.id === product.id);

  // Generate mock reviews based on product rating/count
  function generateReviews(rating) {
    if (!rating || !rating.count) return [];
    const count = rating.count; // No cap, show all
    const avg = rating.rate;
    const users = [
      'Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy'
    ];
    const comments = [
      'Excellent!', 'Very good.', 'Pretty decent.', 'Could be better.', 'Loved it!',
      'Not bad.', 'Would buy again.', 'Highly recommend.', 'Just okay.', 'Amazing product!'
    ];
    // Distribute ratings to match the average as closely as possible
    let stars = Array(count).fill(Math.floor(avg));
    let sum = stars.reduce((a, b) => a + b, 0);
    let diff = Math.round(avg * count) - sum;
    for (let i = 0; i < Math.abs(diff); i++) {
      if (diff > 0) stars[i] += 1;
      if (diff < 0 && stars[i] > 1) stars[i] -= 1;
    }
    return Array.from({ length: count }).map((_, i) => ({
      user: users[i % users.length],
      rating: stars[i],
      comment: comments[i % comments.length],
    }));
  }

  return (
    <div className="product-details-root wide">
      <div className="product-details-main-info">
        <div className="product-details-gallery-col">
          <ProductGallery images={images} />
        </div>
        <div className="product-details-info-col">
          <div className="product-details-header">
            <h1 className="product-details-title">{title}</h1>
            <div className="product-details-meta">
              <span className="product-details-category">Category: {category}</span>
              <span className="product-details-price">${price}</span>
              <span className="product-details-rating">⭐ {rating.rate} ({rating.count} reviews)</span>
            </div>
          </div>
          <ProductDescription description={description} />
          <button
            className={`products-page-card-button product-details-add-to-cart-btn${inCart ? ' added' : ''}`}
            style={inCart ? { backgroundColor: 'rgba(128,128,128,0.18)', color: '#888', cursor: 'pointer', marginTop: '1.2rem' } : { marginTop: '1.2rem' }}
            onClick={() => {
              if (inCart) {
                removeFromCart(product.id);
              } else {
                addToCart(product);
              }
            }}
          >
            {inCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
      <RatingsAndReviews reviews={reviews} actualAvg={rating.rate} />
      <SellerInfo seller={seller} />
    </div>
  );
};

export default ProductDetailsPage;