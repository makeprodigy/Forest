import React from 'react'
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="hero_section">
      <div className="hero_content">
        <h1 className="hero_title">Buy and Sell Amazing Products</h1>
        <p className="hero_subtitle">Your one-stop marketplace to shop, sell, and discover unique items. Join a thriving community of buyers and sellers today.</p>
        <div className="hero_buttons">
          <button className="hero_btn primary" onClick={() => navigate('/products')}>Shop Now</button>
          <button className="hero_btn secondary" onClick={() => navigate('/seller-dashboard')}>Sell on Forest</button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection