import React from 'react'
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="hero_section">
      <div className="hero_content">
        <h1>Discover Amazing Products</h1>
        <p>Your one-stop marketplace for everything you need. Shop smart, shop easy.</p>
        <button onClick={() => navigate('/products')}>Shop Now</button>
      </div>
    </div>
  )
}

export default HeroSection